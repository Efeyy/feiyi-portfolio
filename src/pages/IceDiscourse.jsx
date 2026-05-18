import { useLang } from '../context/LanguageContext'
import '../styles/tencent.css'

const copy = {
  en: {
    title: 'Online Discourse by Federal Officials on ICE and Immigration',
    subtitle: 'Data Engineering & Political Time-Series Analysis · Capstone · Spring 2026',
    tags: ['Python', 'Scraping', 'NLP', 'ECM', 'Political Data'],
    overview:
      'This capstone analyzes how federal officials framed ICE and immigration online during Donald Trump’s second term, combining large-scale social media scraping, text labeling, platform comparison, and political time-series modeling.',
    data:
      'The project processed 1.57M posts from 541 federal actors across X/Twitter, Facebook, Instagram, YouTube, TikTok, Truth Social, Telegram, and other platforms. About 80K posts were ICE or immigration related.',
    role:
      'My focus was data scraping and ECM analysis. I helped structure the post-level dataset and modeled how attention around ICE behaves after event-driven shocks.',
    method:
      'The Error Correction Model separates short-run changes in posting activity from longer-run equilibrium behavior. It helps explain when discourse is temporarily inflated by events and when it returns toward normal participation-adjusted attention levels.',
    finding:
      'The analysis showed that ICE-related discourse followed a political attention cycle: major events triggered sharp increases in posting and actor participation, followed by gradual stabilization toward equilibrium.',
  },
  zh: {
    title: '美国联邦官员关于 ICE 与移民议题的社交媒体话语分析',
    subtitle: '数据工程与政治时间序列分析 · Capstone · 2026 春季',
    tags: ['Python', '数据爬取', 'NLP', 'ECM', '政治数据'],
    overview:
      '该 capstone 分析特朗普第二任期内联邦官员如何在社交媒体上建构 ICE 与移民议题，结合大规模社交媒体爬取，文本标注，平台比较与政治时间序列建模。',
    data:
      '项目处理了 541 位联邦 actor 在 X/Twitter，Facebook，Instagram，YouTube，TikTok，Truth Social，Telegram 等平台上的 157 万条帖文，其中约 8 万条与 ICE 或移民议题相关。',
    role:
      '我的重点负责数据爬取与 ECM 分析。我参与构建 post-level 数据集，并建模 ICE 相关政治注意力在事件冲击后的变化方式。',
    method:
      'Error Correction Model 将短期发帖活动变化与长期均衡行为分离，用于解释政治讨论何时被事件暂时抬高，以及何时回到按参与者数量调整后的正常注意力水平。',
    finding:
      '分析显示，ICE 相关话语呈现典型政治注意力周期：重大事件引发发帖量和参与者数量的急剧上升，随后逐步回归均衡状态。',
  },
}

export default function IceDiscourse() {
  const { lang } = useLang()
  const t = copy[lang]

  return (
    <div className="case-study">
      <div className="container">
        <div className="case-study-header">
          <h1>{t.title}</h1>
          <p className="case-study-subtitle">{t.subtitle}</p>
          <div className="case-study-meta">
            {t.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>

        {[
          [lang === 'zh' ? '概述' : 'Overview', t.overview],
          [lang === 'zh' ? '数据规模' : 'Data Scale', t.data],
          [lang === 'zh' ? '我的职责' : 'My Role', t.role],
          [lang === 'zh' ? '方法' : 'Method', t.method],
        ].map(([title, body]) => (
          <div className="case-study-section" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '关键发现' : 'Key Finding'}</h2>
          <p className="case-study-callout">{t.finding}</p>
        </div>
      </div>
    </div>
  )
}
