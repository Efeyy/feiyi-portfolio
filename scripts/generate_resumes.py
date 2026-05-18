from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

PAGE_W, PAGE_H = letter
MARGIN_X = 42
TOP = PAGE_H - 38
BOTTOM = 34


ZH_BODY_FONT_PATH = "/System/Library/Fonts/STHeiti Light.ttc"
ZH_BOLD_FONT_PATH = "/System/Library/Fonts/STHeiti Medium.ttc"
pdfmetrics.registerFont(TTFont("ZHBody", ZH_BODY_FONT_PATH, subfontIndex=0))
pdfmetrics.registerFont(TTFont("ZHBold", ZH_BOLD_FONT_PATH, subfontIndex=0))


EN = {
    "file": "Fei_Yi_Resume.pdf",
    "name": "Fei Yi",
    "contact": "fei.yi@emory.edu | 470-417-5998 | linkedin.com/in/fei-yi/",
    "sections": [
        {
            "title": "EDUCATION",
            "items": [
                {
                    "left": "Emory University",
                    "right": "Atlanta, GA",
                    "subleft": "B.S. in Quantitative Science - Data Science | Minor in Artificial Intelligence",
                    "subright": "Graduated May 2026",
                    "bullets": [
                        "Cumulative GPA: 3.82/4.0",
                        "Relevant Courses: Machine Learning, Quantitative Models, Probability, Linear Algebra, Regression Analysis",
                        "Technical Skills: Python, R, SQL, JavaScript, pandas, NumPy, scikit-learn, PyTorch, NLP, time-series forecasting, Matplotlib, Seaborn, Excel, Google Analytics, Git, Jupyter, VS Code, ChatGPT API, AI-assisted development / vibe coding",
                    ],
                }
            ],
        },
        {
            "title": "WORK EXPERIENCE",
            "items": [
                {
                    "left": "Tencent Cloud",
                    "right": "Shenzhen, China",
                    "subleft": "Data Science Intern",
                    "subright": "Jun. 2024 - Aug. 2024",
                    "bullets": [
                        "Built an end-to-end client demand forecasting pipeline with Python, SQL, and Tencent's Hunyuan AI framework to surface forward-looking sales signals.",
                        "Aggregated client usage logs from multiple internal sources, cleaned inconsistent IDs and missing timestamps, and engineered rolling, trend, and seasonality features.",
                        "Designed a self-service sales decision dashboard that translated forecasts into client-level risk, growth, and outreach priorities.",
                        "Optimized data extraction workflows, reducing processing time by ~15% and enabling faster refresh cycles for decision-making.",
                    ],
                },
                {
                    "left": "Atmosfy, Inc.",
                    "right": "San Francisco, CA",
                    "subleft": "Data Analysis Intern (Remote)",
                    "subright": "Sep. 2024 - Dec. 2024",
                    "bullets": [
                        "Analyzed market, local news, and user behavior datasets to support weekly growth research and product decision-making.",
                        "Drafted weekly 10-page analytical memos highlighting market developments, engagement patterns, and retention opportunities.",
                        "Collaborated on a user churn prediction workflow using SQL and Python, translating behavioral signals into targeted retention insights.",
                    ],
                },
                {
                    "left": "Emory University Quantitative Science Department | Prof. Clifford J. Carrubba",
                    "right": "Atlanta, GA",
                    "subleft": "Research Assistant",
                    "subright": "Jan. 2025 - May 2026",
                    "bullets": [
                        "Studied dynamic strategic interaction models with evolutionary game theory to examine cooperation and defection among AI agents.",
                        "Scraped operational data from 50+ global AI models to construct a panel dataset for fixed-effects validation of game-theoretic predictions.",
                        "Analyzed computational centralization dynamics and identified conditions where competitive agent behavior reduced system-wide sustainability.",
                    ],
                },
            ],
        },
        {
            "title": "PROJECT AND RESEARCH EXPERIENCE",
            "items": [
                {
                    "left": "GridStateFormer: Next-Day Electricity Demand Forecasting",
                    "right": "Atlanta, GA",
                    "subleft": "Machine Learning Researcher",
                    "subright": "Spring 2026",
                    "bullets": [
                        "Developed a hybrid PatchTST and state-space model for 24-hour regional electricity demand forecasting using U.S. EIA hourly load data across 148 regions.",
                        "Built a 168-hour input to 24-hour forecast pipeline with RevIN normalization, daily patch encoding, latent rollout, and seasonal residual forecasting.",
                        "Benchmarked against GRU, LSTM, TCN, CNN, and seasonal-naive baselines; achieved RMSE 0.3903, MAE 0.2381, and R2 0.8131.",
                    ],
                },
                {
                    "left": "Online Discourse by Federal Officials on ICE and Immigration",
                    "right": "Atlanta, GA",
                    "subleft": "Data Engineering & Political Time-Series Analysis Lead",
                    "subright": "Spring 2026",
                    "bullets": [
                        "Scraped and processed large-scale political social media data covering 1.57M posts from 541 federal actors, including ~80K ICE/immigration-related posts.",
                        "Led Error Correction Model (ECM) analysis to separate short-term attention shocks from long-run equilibrium patterns in political discourse.",
                        "Modeled how event-driven spikes, actor participation, and platform dynamics shaped ICE-related attention during January 2025 - March 2026.",
                    ],
                },
                {
                    "left": "Drug Side Effects - NLP Clustering Analysis",
                    "right": "Atlanta, GA",
                    "subleft": "Unsupervised Learning Researcher",
                    "subright": "Spring 2025",
                    "bullets": [
                        "Clustered 2,900+ drugs using side-effect text representations, showing that adverse-effect profiles captured pharmacological similarity better than names or conditions.",
                        "Compared MinHash LSH, TF-IDF, DBSCAN, and agglomerative clustering, demonstrating that feature representation drove clustering quality more than algorithm choice.",
                    ],
                },
            ],
        },
        {
            "title": "ADDITIONAL INFORMATION",
            "plain": [
                "Language: Mandarin Chinese (native), English (full proficiency), German (intermediate), Japanese (basic)",
                "Volunteering: Michael C. Carlos Museum Volunteer, Hainan Youth Supportive Teacher",
                "Interests: Tennis, Video-gaming, Hiking, Photography, Cuisine, Movies, Vlogging and Video Editing",
            ],
        },
    ],
}


ZH = {
    "file": "Fei_Yi_Resume_CN.pdf",
    "name": "易非",
    "contact": "fei.yi@emory.edu | 470-417-5998 | linkedin.com/in/fei-yi/",
    "sections": [
        {
            "title": "教育背景",
            "items": [
                {
                    "left": "埃默里大学 Emory University",
                    "right": "美国亚特兰大",
                    "subleft": "定量科学 - 数据科学本科 | 人工智能辅修",
                    "subright": "2026年5月毕业",
                    "bullets": [
                        "累计 GPA: 3.82/4.0",
                        "相关课程: 机器学习，定量模型，概率论，线性代数，回归分析",
                        "技术能力: Python, R, SQL, JavaScript, pandas, NumPy, scikit-learn, PyTorch, NLP, 时间序列预测, Matplotlib, Seaborn, Excel, Google Analytics, Git, Jupyter, VS Code, ChatGPT API, AI 辅助开发 / Vibe Coding",
                    ],
                }
            ],
        },
        {
            "title": "工作经历",
            "items": [
                {
                    "left": "腾讯云",
                    "right": "中国深圳",
                    "subleft": "数据科学实习生",
                    "subright": "2024年6月 - 2024年8月",
                    "bullets": [
                        "使用 Python，SQL 与腾讯混元 AI 框架搭建端到端客户需求预测 pipeline，产出前瞻性销售需求信号。",
                        "整合多个内部系统的客户使用日志，清洗不一致客户 ID 与缺失时间戳，并构造滚动均值，趋势与季节性特征。",
                        "设计自助式销售决策 dashboard，将预测结果转化为客户级风险，增长趋势与触达优先级。",
                        "优化数据抽取流程，将处理时间降低约 15%，支持更快的数据刷新与业务决策。",
                    ],
                },
                {
                    "left": "Atmosfy, Inc.",
                    "right": "美国旧金山 / 远程",
                    "subleft": "数据分析实习生",
                    "subright": "2024年9月 - 2024年12月",
                    "bullets": [
                        "分析市场，本地新闻与用户行为数据，支持每周增长研究与产品决策。",
                        "每周撰写约 10 页分析备忘录，总结市场变化，用户参与模式与留存机会。",
                        "参与基于 SQL 与 Python 的用户流失预测流程，将行为信号转化为可执行的留存洞察。",
                    ],
                },
                {
                    "left": "埃默里大学定量科学系 | Clifford J. Carrubba 教授",
                    "right": "美国亚特兰大",
                    "subleft": "研究助理",
                    "subright": "2025年1月 - 2026年5月",
                    "bullets": [
                        "使用演化博弈论研究 AI agents 的动态策略互动，分析资源约束下的合作与背离行为。",
                        "爬取 50+ 个全球 AI 模型的运行数据，构建面板数据集并用固定效应模型验证博弈论预测。",
                        "分析计算资源集中化带来的竞争动态，识别过度竞争降低系统整体可持续性的条件。",
                    ],
                },
            ],
        },
        {
            "title": "项目与研究经历",
            "items": [
                {
                    "left": "GridStateFormer: 次日电力需求预测",
                    "right": "美国亚特兰大",
                    "subleft": "机器学习研究员",
                    "subright": "2026年春",
                    "bullets": [
                        "基于美国 EIA 小时级电力负荷数据，开发结合 PatchTST 与 state-space rollout 的混合模型，覆盖 148 个区域的 24 小时需求预测。",
                        "构建 168 小时输入到 24 小时输出的预测流程，包含 RevIN 归一化，日级 patch 编码，latent rollout 与季节性残差预测。",
                        "与 GRU，LSTM，TCN，CNN 和 seasonal-naive 基线对比，取得 RMSE 0.3903，MAE 0.2381，R2 0.8131。",
                    ],
                },
                {
                    "left": "美国联邦官员关于 ICE 与移民议题的社交媒体话语分析",
                    "right": "美国亚特兰大",
                    "subleft": "数据工程与政治时间序列分析负责人",
                    "subright": "2026年春",
                    "bullets": [
                        "爬取并处理大规模政治社交媒体数据，覆盖 541 位联邦 actor 的 157 万条帖文，其中约 8 万条与 ICE/移民议题相关。",
                        "负责 Error Correction Model (ECM) 分析，将政治注意力中的短期事件冲击与长期均衡关系分离建模。",
                        "分析 2025年1月 - 2026年3月期间事件冲击，参与者数量与平台差异如何共同塑造 ICE 相关讨论热度。",
                    ],
                },
                {
                    "left": "药物副作用 NLP 聚类分析",
                    "right": "美国亚特兰大",
                    "subleft": "无监督学习研究员",
                    "subright": "2025年春",
                    "bullets": [
                        "基于 2,900+ 种药物的副作用文本进行聚类，证明副作用特征比药物名称或适应症更能捕捉药理相似性。",
                        "比较 MinHash LSH，TF-IDF，DBSCAN 与层次聚类方法，发现特征表征对聚类质量的影响高于算法选择。",
                    ],
                },
            ],
        },
        {
            "title": "其他信息",
            "plain": [
                "语言: 中文普通话（母语），英语（流利），德语（中级），日语（基础）",
                "志愿经历: Michael C. Carlos Museum 志愿者，海南支教志愿者",
                "兴趣: 网球，电子游戏，徒步，摄影，美食，电影，Vlogging 与视频剪辑",
            ],
        },
    ],
}


def text_width(text, font, size):
    return pdfmetrics.stringWidth(text, font, size)


def wrap_text(text, max_width, font, size):
    if not text:
        return [""]
    tokens = list(text) if font in {"ZHBody", "ZHBold"} else text.split(" ")
    lines, cur = [], ""
    sep = "" if font in {"ZHBody", "ZHBold"} else " "
    closing_punctuation = set("。，；：！？）】》,.;:!?)]")
    for token in tokens:
        candidate = token if not cur else cur + sep + token
        if text_width(candidate, font, size) <= max_width:
            cur = candidate
        else:
            if font in {"ZHBody", "ZHBold"} and token in closing_punctuation and cur:
                cur += token
                continue
            if cur:
                lines.append(cur)
            cur = token
    if cur:
        lines.append(cur)
    return lines


class ResumePDF:
    def __init__(self, data, chinese=False):
        self.data = data
        self.chinese = chinese
        self.c = canvas.Canvas(str(PUBLIC / data["file"]), pagesize=letter)
        self.y = TOP
        self.body_font = "ZHBody" if chinese else "Times-Roman"
        self.bold_font = "ZHBold" if chinese else "Times-Bold"
        self.italic_font = "ZHBody" if chinese else "Times-Italic"
        self.title_font = "ZHBold" if chinese else "Times-Bold"
        self.accent = colors.black
        self.body_size = 10.15 if chinese else 9.4
        self.bullet_size = 9.95 if chinese else 9.35
        self.line_gap = 14.25 if chinese else 11.15

    def draw_line(self, text, x, y, font=None, size=None, color=colors.black):
        self.c.setFont(font or self.body_font, size)
        self.c.setFillColor(color)
        self.c.drawString(x, y, text)

    def right_line(self, text, x_right, y, font=None, size=None):
        self.c.setFont(font or self.body_font, size)
        self.c.setFillColor(colors.black)
        self.c.drawRightString(x_right, y, text)

    def section(self, title):
        self.y -= 3
        self.c.setStrokeColor(self.accent)
        self.c.setLineWidth(1.35)
        self.draw_line(title, MARGIN_X, self.y, self.bold_font, 10.7 if self.chinese else 10.8, self.accent)
        self.y -= 4
        self.c.line(MARGIN_X, self.y, PAGE_W - MARGIN_X, self.y)
        self.y -= 12 if self.chinese else 9

    def paragraph(self, text, indent=0, size=None, bullet=False):
        size = size or self.body_size
        bullet_x = MARGIN_X + indent
        text_x = bullet_x + (13 if bullet else 0)
        max_width = PAGE_W - MARGIN_X - text_x
        lines = wrap_text(text, max_width, self.body_font, size)
        if bullet:
            self.c.setFillColor(colors.black)
            self.c.circle(bullet_x + 3.2, self.y + 3.2, 1.45 if self.chinese else 1.25, stroke=0, fill=1)
        for i, line in enumerate(lines):
            self.draw_line(line, text_x if bullet else bullet_x, self.y, self.body_font, size)
            self.y -= self.line_gap

    def item(self, item):
        self.draw_line(item["left"], MARGIN_X, self.y, self.bold_font, self.body_size + 0.2)
        self.right_line(item["right"], PAGE_W - MARGIN_X, self.y, self.bold_font, self.body_size + 0.2)
        self.y -= self.line_gap
        self.draw_line(item["subleft"], MARGIN_X, self.y, self.italic_font, self.body_size)
        self.right_line(item["subright"], PAGE_W - MARGIN_X, self.y, self.body_font, self.body_size)
        self.y -= self.line_gap
        for bullet in item.get("bullets", []):
            self.paragraph(bullet, indent=0, size=self.bullet_size, bullet=True)
        self.y -= 4

    def build(self):
        self.c.setTitle(self.data["name"] + " Resume")
        self.c.setFont(self.title_font, 15.2 if self.chinese else 15.8)
        self.c.setFillColor(colors.black)
        self.c.drawCentredString(PAGE_W / 2, self.y, self.data["name"])
        self.y -= 14
        self.c.setFont(self.body_font, 9.5 if self.chinese else 10.0)
        self.c.drawCentredString(PAGE_W / 2, self.y, self.data["contact"])
        self.y -= 11

        for section in self.data["sections"]:
            self.section(section["title"])
            if "plain" in section:
                for line in section["plain"]:
                    self.paragraph(line, size=self.body_size)
                self.y -= 4
            for item in section.get("items", []):
                self.item(item)

        if self.y < BOTTOM:
            raise RuntimeError(f"{self.data['file']} overflowed page by {BOTTOM - self.y:.1f} points")
        self.c.save()


def main():
    PUBLIC.mkdir(exist_ok=True)
    ResumePDF(EN).build()
    ResumePDF(ZH, chinese=True).build()
    print(PUBLIC / EN["file"])
    print(PUBLIC / ZH["file"])


if __name__ == "__main__":
    main()
