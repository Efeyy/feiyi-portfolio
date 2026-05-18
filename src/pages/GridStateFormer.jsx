import { useLang } from '../context/LanguageContext'
import '../styles/tencent.css'

const copy = {
  en: {
    title: 'GridStateFormer: Next-Day Electricity Demand Forecasting',
    subtitle: 'Machine Learning Research · QTM 447 · Spring 2026',
    tags: ['PyTorch', 'Time Series', 'PatchTST', 'State Space', 'EIA'],
    overview:
      'GridStateFormer is a hybrid forecasting model for regional electricity demand. It combines a PatchTST-style encoder with a compact latent state-space rollout, using the previous 168 hours of demand to forecast the next 24 hours.',
    method:
      'The model encodes the past week as seven daily patches, applies RevIN to reduce regional scale differences, initializes the latent rollout from the most recent encoded patch, and predicts residual corrections over a 24-hour seasonal-naive baseline.',
    data:
      'The dataset is built from U.S. EIA hourly electricity demand records across 148 regions from January 2023 to March 2026. The final supervised bundle uses chronological train, validation, and test windows under a shared 168-to-24 protocol.',
    result:
      'Against GRU, LSTM, TCN, CNN, and seasonal-naive baselines, GridStateFormer achieved the best normalized test performance: RMSE 0.3903, MAE 0.2381, and R2 0.8131.',
    takeaway:
      'The strongest gain came from aligning the architecture with the domain: daily patch representation, horizon-wise latent evolution, and residual forecasting around yesterday’s same-hour load.',
  },
  zh: {
    title: 'GridStateFormer: 次日电力需求预测',
    subtitle: '机器学习研究 · QTM 447 · 2026 春季',
    tags: ['PyTorch', '时间序列', 'PatchTST', 'State Space', 'EIA'],
    overview:
      'GridStateFormer 是一个面向区域电力需求的混合预测模型。它结合 PatchTST 风格的编码器与紧凑的 latent state-space rollout，使用过去 168 小时需求预测未来 24 小时负荷。',
    method:
      '模型将过去一周编码为七个日级 patch，使用 RevIN 缓解区域尺度差异，从最近的历史 patch 初始化 latent rollout，并围绕 24 小时 seasonal-naive baseline 预测残差修正。',
    data:
      '数据来自美国 EIA 小时级电力需求记录，覆盖 2023 年 1 月至 2026 年 3 月的 148 个区域。监督学习样本按时间顺序切分，并统一使用 168-to-24 预测协议。',
    result:
      '与 GRU，LSTM，TCN，CNN 和 seasonal-naive 基线相比，GridStateFormer 取得最佳归一化测试表现：RMSE 0.3903，MAE 0.2381，R2 0.8131。',
    takeaway:
      '核心提升来自模型结构与领域规律的匹配：日级 patch 表征，跨预测 horizon 的 latent 演化，以及围绕昨日同小时负荷的残差预测。',
  },
}

export default function GridStateFormer() {
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

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '概述' : 'Overview'}</h2>
          <p>{t.overview}</p>
        </div>

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '方法' : 'Method'}</h2>
          <p>{t.method}</p>
        </div>

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '数据' : 'Data'}</h2>
          <p>{t.data}</p>
        </div>

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '结果' : 'Result'}</h2>
          <div className="impact-grid">
            <div className="impact-card"><div className="impact-card-value">0.3903</div><div className="impact-card-label">RMSE</div></div>
            <div className="impact-card"><div className="impact-card-value">0.2381</div><div className="impact-card-label">MAE</div></div>
            <div className="impact-card"><div className="impact-card-value">0.8131</div><div className="impact-card-label">R2</div></div>
          </div>
          <p style={{ marginTop: '20px' }}>{t.result}</p>
        </div>

        <div className="case-study-section">
          <h2>{lang === 'zh' ? '关键洞察' : 'Takeaway'}</h2>
          <p className="case-study-callout">{t.takeaway}</p>
        </div>
      </div>
    </div>
  )
}
