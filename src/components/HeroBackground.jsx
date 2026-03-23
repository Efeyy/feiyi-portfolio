import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw(ctx, rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

// Seeded pseudo-random for deterministic layout
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function draw(ctx, w, h) {
  ctx.clearRect(0, 0, w, h)
  const rand = mulberry32(42)

  // --- Layer 1: Scattered particle field ---
  const particles = []
  const count = Math.round((w * h) / 1800)

  for (let i = 0; i < count; i++) {
    // Bias distribution toward upper-left with a soft falloff
    const rawX = rand()
    const rawY = rand()
    // Use power distribution to concentrate particles
    const x = rawX * w
    const y = rawY * h

    // Distance from focal region (upper-left / center-left)
    const fx = 0.25
    const fy = 0.38
    const dx = (x / w - fx)
    const dy = (y / h - fy)
    const dist = Math.sqrt(dx * dx * 1.0 + dy * dy * 2.2)
    const falloff = Math.max(0, 1 - dist * 1.35)

    if (falloff < 0.03) continue

    // Vertical wave displacement — creates flowing topology
    const waveY = Math.sin(x * 0.008 + y * 0.003) * 18
      + Math.sin(x * 0.004 - y * 0.006) * 12
      + Math.cos(x * 0.012 + y * 0.002) * 6
    const waveX = Math.cos(y * 0.006 + x * 0.002) * 10
      + Math.sin(y * 0.01) * 5

    // Jitter for organic feel
    const jitterX = (rand() - 0.5) * 14
    const jitterY = (rand() - 0.5) * 14

    const px = x + waveX + jitterX
    const py = y + waveY + jitterY

    // Size variation
    const size = 0.6 + rand() * 1.2 + falloff * 0.8

    particles.push({ x: px, y: py, opacity: falloff, size })
  }

  // --- Layer 2: Flowing wave curves ---
  ctx.lineCap = 'round'
  const waveCount = 7
  for (let wi = 0; wi < waveCount; wi++) {
    const baseY = h * (0.15 + wi * 0.11)
    const amplitude = 25 + wi * 8
    const freq = 0.003 + wi * 0.0008
    const phase = wi * 1.7

    // Opacity: waves in the focal area are brighter
    const waveCenterY = baseY / h
    const waveDist = Math.abs(waveCenterY - 0.4)
    const waveOpacity = Math.max(0, 0.12 - waveDist * 0.18)
    if (waveOpacity < 0.01) continue

    ctx.beginPath()
    const steps = Math.ceil(w / 3)
    for (let s = 0; s <= steps; s++) {
      const x = (s / steps) * w * 1.1 - w * 0.05
      const y = baseY
        + Math.sin(x * freq + phase) * amplitude
        + Math.sin(x * freq * 2.3 + phase * 0.7) * amplitude * 0.3
        + Math.cos(x * freq * 0.5 + phase * 1.4) * amplitude * 0.2

      // Fade out wave at left and right edges
      const edgeFade = Math.min(x / (w * 0.15), (w - x) / (w * 0.3), 1)
      if (s === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.strokeStyle = `rgba(100, 145, 200, ${waveOpacity})`
    ctx.lineWidth = 0.5 + waveOpacity * 3
    ctx.stroke()
  }

  // --- Layer 3: Mesh connections between nearby particles ---
  const connectionDist = 55
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i]
    if (a.opacity < 0.15) continue

    let connections = 0
    for (let j = i + 1; j < particles.length; j++) {
      if (connections >= 3) break
      const b = particles[j]
      if (b.opacity < 0.15) continue

      const dx = b.x - a.x
      const dy = b.y - a.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > connectionDist || dist < 8) continue

      const lineAlpha = Math.min(a.opacity, b.opacity)
        * (1 - dist / connectionDist)
        * 0.2

      if (lineAlpha < 0.01) continue

      // Curved connection
      const cx = (a.x + b.x) / 2 + dy * 0.15
      const cy = (a.y + b.y) / 2 - dx * 0.15

      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.quadraticCurveTo(cx, cy, b.x, b.y)
      ctx.strokeStyle = `rgba(130, 165, 210, ${lineAlpha})`
      ctx.lineWidth = 0.4
      ctx.stroke()
      connections++
    }
  }

  // --- Layer 4: Draw particles (dots) ---
  for (const p of particles) {
    // Core dot
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(150, 185, 230, ${p.opacity * 0.6})`
    ctx.fill()

    // Glow halo on brighter particles
    if (p.opacity > 0.3 && p.size > 1.2) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size + 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(120, 160, 220, ${p.opacity * 0.07})`
      ctx.fill()
    }
  }

  // --- Layer 5: A few bright anchor nodes ---
  const anchorSeed = mulberry32(99)
  for (let i = 0; i < 5; i++) {
    const ax = anchorSeed() * w * 0.55 + w * 0.05
    const ay = anchorSeed() * h * 0.65 + h * 0.1
    const dist = Math.sqrt(
      Math.pow(ax / w - 0.25, 2) + Math.pow(ay / h - 0.38, 2) * 2
    )
    const aOpacity = Math.max(0, 0.6 - dist * 1.2)
    if (aOpacity < 0.1) continue

    // Outer glow
    const grad = ctx.createRadialGradient(ax, ay, 0, ax, ay, 8)
    grad.addColorStop(0, `rgba(140, 180, 230, ${aOpacity * 0.25})`)
    grad.addColorStop(1, 'transparent')
    ctx.beginPath()
    ctx.arc(ax, ay, 8, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()

    // Bright core
    ctx.beginPath()
    ctx.arc(ax, ay, 1.8, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 210, 245, ${aOpacity * 0.7})`
    ctx.fill()
  }
}
