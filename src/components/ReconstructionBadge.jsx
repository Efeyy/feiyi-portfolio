import { useLang } from '../context/LanguageContext'
import content from '../data/content'

export default function ReconstructionBadge() {
  const { lang } = useLang()
  return (
    <span className="reconstruction-badge">
      {content.shared[lang].reconstructionBadge}
    </span>
  )
}
