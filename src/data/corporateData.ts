import { CorporateData, WebApplicationItem, NewsItem, QuaBrandStory } from '../types';

export const OFFICIAL_CORPORATE_DATA: CorporateData = {
  legalNameJa: "Qua合同会社",
  legalNameEn: "Qua LLC",
  brandName: "Qua",
  aliasJa: "キュア",
  corporateNumber: "0100-03-051369",
  headquartersJa: "東京都中央区日本橋室町一丁目11番12号",
  headquartersEn: "1-11-12 Nihonbashi-Muromachi, Chuo-ku, Tokyo 103-0022, Japan",
  buildingJa: "日本橋水野ビル7階",
  buildingEn: "Nihonbashi Mizuno Bldg. 7F",
  establishedDateJa: "令和8年5月8日 (2026年5月8日)",
  establishedDateEn: "May 8, 2026",
  capital: "金10万円",
  capitalEn: "JPY 100,000",
  representativeJa: "神保 想叶 (Soya Jimbo)",
  representativeEn: "Soya Jimbo",
  representativeRoleJa: "代表社員 / 業務執行社員",
  representativeRoleEn: "Representative Partner & Founder",
  publicNoticeMethodJa: "官報に掲載する方法により行う。",
  publicNoticeMethodEn: "Published via the Official Gazette of Japan (Kanpo).",
  contactEmail: "qua.headquarters@gmail.com",
  purposes: [
    {
      num: 1,
      textJa: "コンピュータのソフトウェア及びハードウェアの企画、研究、開発、設計、製造、販売、保守、リース、賃貸及び輸出入並びにそれらに関するコンサルティング業務",
      textEn: "Planning, research, development, design, manufacturing, sales, maintenance, leasing, and import/export of computer software and hardware, as well as consulting services relating thereto",
      category: "ソフトウェア企画・開発・ITコンサルティング"
    },
    {
      num: 2,
      textJa: "インターネット等の通信ネットワーク及び電子技術を利用した各種情報提供サービス及び情報収集サービス",
      textEn: "Various information provision, web application platforms, and data services utilizing communication networks such as the Internet and electronic technologies",
      category: "Webアプリケーション・情報提供サービス"
    },
    {
      num: 3,
      textJa: "不動産に関するコンサルティング",
      textEn: "Consulting services related to real estate and asset utilization",
      category: "不動産コンサルティング"
    },
    {
      num: 4,
      textJa: "各種勉強会の開催、会員間の情報交換及び相互交流",
      textEn: "Hosting of seminars, study groups, member information exchange, and technical community events",
      category: "技術勉強会・コミュニティ運営"
    },
    {
      num: 5,
      textJa: "アウトソーシング事業の受託及び請負",
      textEn: "Contracting and undertaking of system development and business process outsourcing services",
      category: "システム受託開発・業務請負"
    },
    {
      num: 6,
      textJa: "広告代理業及び各種の宣伝に関する業務",
      textEn: "Advertising agency business and operations relating to digital promotion and marketing",
      category: "デジタル広告・プロモーション支援"
    },
    {
      num: 7,
      textJa: "前各号に附帯関連する一切の事業",
      textEn: "Any and all businesses incidental or related to each of the preceding items",
      category: "附帯関連事業"
    }
  ]
};

export const QUA_BRAND_STORY: QuaBrandStory = {
  originTitleJa: "社名「Qua」に込めた理念と開発姿勢",
  originTitleEn: "Corporate Philosophy & Engineering Ethos of 'Qua'",
  originSummaryJa: "ラテン語で「〜として、〜の本質において（in the capacity of）」を意味する『Qua』。私たちは、表面的な流行にとらわれることなく、ユーザーにとって本当に使いやすく価値のあるアプリケーションの本質（Quality）を追求し、確かなソフトウェア工学で社会に貢献します。",
  originSummaryEn: "Derived from the Latin term 'Qua' (meaning 'in the capacity of' or 'in the essence of'), our company focuses on the fundamental utility, reliability, and quality of software applications.",
  etymologyJa: [
    {
      root: "01. Qua (本質への向き合い)",
      meaningJa: "課題の本質を見極める",
      meaningEn: "Addressing Core Needs",
      descriptionJa: "「何のためにそのアプリが存在するのか」という本質的な目的から逆算し、無駄のない設計と機能実装を行います。",
      descriptionEn: "We design software starting from fundamental user needs, ensuring clear purpose and practical value in every screen."
    },
    {
      root: "02. Quality (堅牢な品質設計)",
      meaningJa: "長く安心して使えるソフトウェア品質",
      meaningEn: "Reliable Engineering Quality",
      descriptionJa: "見た目のデザインだけでなく、保守性・セキュリティ・動作の安定性を重視した堅実なアプリケーション開発を徹底します。",
      descriptionEn: "Prioritizing maintainability, clean code architecture, security, and responsive performance across all web applications."
    },
    {
      root: "03. Qualia (直感的な操作体験)",
      meaningJa: "迷わず使えるUI/UXの追求",
      meaningEn: "Intuitive User Experience",
      descriptionJa: "マニュアルを読まなくても直感的に操作でき、日々の学習やコミュニケーションが快適になるインターフェースを構築します。",
      descriptionEn: "Crafting clear, accessible interfaces that users can understand and operate effortlessly from day one."
    },
    {
      root: "04. Quantum (次世代技術への挑戦)",
      meaningJa: "AI・先端技術の社会実装",
      meaningEn: "Practical Frontier Technology",
      descriptionJa: "生成AIや量子計算モデルなどの新しい技術領域も、わかりやすいオンラインUIや実用的なアプリとして形にしていきます。",
      descriptionEn: "Translating emerging technologies like AI and quantum computing concepts into accessible, practical web interfaces."
    }
  ],
  aiVisionTitleJa: "実用的なWebアプリ開発から、次世代のソフトウェア基盤へ",
  aiVisionTitleEn: "From Practical Web Applications to Next-Generation Software",
  aiVisionSummaryJa: "Qua合同会社は、革命的英単語・語学単語学習アプリ『EitangoNihongo』をはじめ、目の前のユーザーが毎日便利に使えるWebアプリケーションを一つひとつ丁寧に開発・運営することを第一としています。次世代SNS『Paralmeet』（Upcoming / Developing）や各種Webツールの開発を着実に進め、確かなソフトウェア工学で事業を拡大してまいります。",
  aiVisionSummaryEn: "At Qua LLC, our primary commitment is building and operating high-value web applications—led by our revolutionary vocabulary & language learning app EitangoNihongo, alongside our upcoming next-gen social platform Paralmeet."
};

export const CORE_WEB_APPLICATIONS: WebApplicationItem[] = [
  {
    id: "eitango-nihongo",
    name: "EitangoNihongo",
    nameJa: "EitangoNihongo（英単語日本語）｜革命的英単語・語学単語学習アプリ",
    category: "education_ai",
    tagline: "Revolutionary English & Language Vocabulary Learning Application",
    taglineJa: "文脈・語源・ニュアンスの立体理解と最適反復で語彙習得を革新する、革命的英単語・語学単語学習アプリ",
    description: "A revolutionary English and language vocabulary learning application. Goes beyond rote memorization by mapping real-world context sentences, subtle native nuances, etymological connections, and intelligent spaced-repetition scheduling.",
    descriptionJa: "従来の「一語一訳の丸暗記」を根本から覆す、革命的英単語・語学単語学習アプリケーションです。AIを活用した生きた文脈例文、類義語との微妙なニュアンス比較、語源ネットワーク、そして忘却曲線に基づく最適反復（SRS）を統合し、圧倒的な記憶定着と実践的な語学力を実現します。",
    launchStatus: "Active Flagship",
    launchStatusJa: "主力公開アプリ",
    version: "v1.4",
    iconName: "BookOpenCheck",
    tags: ["主力プロダクト", "革命的英単語学習", "語学単語学習アプリ", "ニュアンス＆文脈理解"],
    metrics: [
      { label: "Category", labelJa: "ジャンル", value: "革命的英単語・語学学習" },
      { label: "Method", labelJa: "学習アプローチ", value: "文脈・ニュアンス・SRS統合" },
      { label: "Platform", labelJa: "対応環境", value: "PC / スマホWeb対応" }
    ],
    features: [
      { title: "Deep Nuance & Context Mapping", titleJa: "生きた文脈とネイティブのニュアンス構造化", desc: "Understand how words are truly used across business, academic, and daily contexts.", descJa: "単なる日本語訳ではなく、「なぜその場面でこの単語を選ぶのか」というネイティブの感覚と文脈を立体的に理解できます。" },
      { title: "Adaptive Spaced Repetition (SRS)", titleJa: "個人最適化された記憶定着アルゴリズム", desc: "Automatically schedules reviews at the exact timing before forgetting occurs.", descJa: "学習者一人ひとりの習熟度と忘却曲線を分析し、最小の労力で長期記憶へ定着させる復習サイクルを自動編成します。" },
      { title: "Multi-Language Vocabulary Architecture", titleJa: "英単語から多言語語彙学習への拡張設計", desc: "Engineered as a comprehensive language vocabulary mastery platform.", descJa: "英語の語彙習得を核としながら、語源・概念ネットワークを通じて幅広い語学単語学習へと応用できる設計を採用しています。" }
    ],
    techStack: ["React", "TypeScript", "IndexedDB", "Web Speech API", "Tailwind CSS"],
    accentGradient: "from-sky-500 to-blue-600",
    hasInteractiveDemo: true,
    isCurrentProduct: true,
    appUrl: "https://eitangonihongo.qua.inc"
  },
  {
    id: "paralmeet-social",
    name: "Paralmeet",
    nameJa: "Paralmeet（パラミート）｜次世代SNS",
    category: "social_network",
    tagline: "Next-Gen Social Network (Upcoming / Developing)",
    taglineJa: "次世代SNS（Upcoming / Developing）",
    description: "Next-generation social network platform currently under development by Qua LLC.",
    descriptionJa: "Qua合同会社にて現在企画・開発を推進している次世代SNSプロジェクトです。（Upcoming / Developing）",
    launchStatus: "Upcoming / Developing",
    launchStatusJa: "Upcoming / Developing",
    version: "Developing",
    iconName: "Radio",
    tags: ["次世代SNS", "Upcoming", "Developing"],
    metrics: [
      { label: "Status", labelJa: "ステータス", value: "Upcoming / Developing" },
      { label: "Category", labelJa: "分野", value: "次世代SNS" }
    ],
    features: [
      { title: "Next-Gen Social Experience", titleJa: "次世代ソーシャルネットワーク", desc: "Currently in development.", descJa: "現在開発中の次世代SNSアプリケーションです。" }
    ],
    techStack: ["React", "TypeScript", "Next-Gen Web"],
    accentGradient: "from-blue-600 to-indigo-600",
    hasInteractiveDemo: false,
    isCurrentProduct: false
  },
  {
    id: "qua-spark-studio",
    name: "Qua Spark Studio",
    nameJa: "Qua Spark Studio（Webデザイン・プロトタイプ制作支援）",
    category: "pipeline",
    tagline: "Browser-Based UI Prototyping & Asset Organization Tool",
    taglineJa: "ブラウザ上で画面設計やデザイン素材の整理・共有を行えるWeb制作支援ツール",
    description: "A lightweight browser-based workspace for organizing UI wireframes, design components, and team feedback during web application development.",
    descriptionJa: "アプリ開発時のワイヤーフレーム作成、UIコンポーネントの整理、チーム間のフィードバック共有をブラウザ上で完結できる制作支援ツールです。",
    launchStatus: "Upcoming / Developing",
    launchStatusJa: "Upcoming / Developing",
    version: "Developing",
    iconName: "Layers",
    tags: ["UI設計支援", "プロトタイピング", "Developing"],
    metrics: [
      { label: "Status", labelJa: "ステータス", value: "Upcoming / Developing" },
      { label: "Category", labelJa: "分野", value: "デザイン・制作支援" }
    ],
    features: [
      { title: "Clean Wireframe Canvas", titleJa: "直感的な画面構成キャンバス", desc: "Quickly lay out web and mobile application screens.", descJa: "Webアプリやモバイル画面の構成案を素早く配置・比較できるシンプルなキャンバス機能。" }
    ],
    techStack: ["TypeScript", "React", "HTML5 Canvas"],
    accentGradient: "from-indigo-600 to-blue-500",
    hasInteractiveDemo: false,
    isCurrentProduct: false
  },
  {
    id: "qua-ai-agent-force",
    name: "Qua AI Workflow",
    nameJa: "Qua AI Workflow（業務タスク整理・自動化支援ツール）",
    category: "pipeline",
    tagline: "Practical Multi-Step AI Workflow & Document Structuring Tool",
    taglineJa: "複数のAI処理を組み合わせて、リサーチ・議事録整理・ドキュメント作成を効率化する業務支援アプリ",
    description: "A business productivity web application that coordinates AI tasks step-by-step to assist with research summarization, specification drafting, and routine workflow automation.",
    descriptionJa: "情報収集、要件定義書のドラフト作成、定型データの整理など、複数のステップからなる実務作業をAIのサポートで効率化するビジネス向けWebアプリケーションです。",
    launchStatus: "Upcoming / Developing",
    launchStatusJa: "Upcoming / Developing",
    version: "Developing",
    iconName: "Bot",
    tags: ["業務効率化", "AIワークフロー", "Developing"],
    metrics: [
      { label: "Status", labelJa: "ステータス", value: "Upcoming / Developing" },
      { label: "Category", labelJa: "分野", value: "ビジネス業務支援" }
    ],
    features: [
      { title: "Step-by-Step Task Pipeline", titleJa: "段階的なタスク実行と確認", desc: "Review and refine AI-generated outputs at each step.", descJa: "人間が各ステップの結果を確認・修正しながら確実に業務を進められる設計。" }
    ],
    techStack: ["TypeScript", "React", "AI Integration"],
    accentGradient: "from-blue-600 to-indigo-600",
    hasInteractiveDemo: false,
    isCurrentProduct: false
  }
];

export const CORPORATE_NEWS: NewsItem[] = [
  {
    id: "news-01",
    date: "2026.05.08",
    category: "Corporate",
    categoryJa: "企業情報",
    titleJa: "Qua合同会社、法人設立登記完了およびアプリケーション開発事業開始のお知らせ",
    titleEn: "Qua LLC Completes Corporate Registration and Commences Application Development Operations",
    summaryJa: "Webアプリケーションの企画・開発・運営およびシステム受託開発を行う「Qua合同会社」（法人番号：0100-03-051369、代表社員：神保 想叶）の設立登記を完了し、正式に事業を開始いたしました。",
    summaryEn: "Qua LLC (Corporate Number: 0100-03-051369) has completed its official corporate registration, initiating in-house web application development and client software engineering services.",
    readTime: "2 min",
    featured: true
  },
  {
    id: "news-02",
    date: "2026.06.20",
    category: "Product",
    categoryJa: "プロダクト",
    titleJa: "革命的英単語・語学単語学習アプリ『EitangoNihongo』公開および次世代SNS『Paralmeet』開発推進のお知らせ",
    titleEn: "Release of Revolutionary Vocabulary App 'EitangoNihongo' and Development of Next-Gen SNS 'Paralmeet'",
    summaryJa: "文脈・ニュアンス・反復学習を統合した革命的英単語・語学単語学習アプリ『EitangoNihongo』を公開いたしました。また、次世代SNS『Paralmeet』（Upcoming / Developing）をはじめとする後続アプリケーションの開発を推進してまいります。",
    summaryEn: "Launched EitangoNihongo, our revolutionary English and language vocabulary learning application, alongside ongoing development of our upcoming next-gen social network Paralmeet.",
    readTime: "3 min",
    featured: true
  },
  {
    id: "news-03",
    date: "2026.07.28",
    category: "R&D",
    categoryJa: "技術・UI公開",
    titleJa: "Webサイト上に「量子ビット(Qubit) オンラインUI」および「公式 Q&A AIボット」を公開",
    titleEn: "Launch of Online Qubit Interactive UI and Official Corporate Q&A AI Bot",
    summaryJa: "量子計算の基礎である1量子ビットモデル（ブロッホ球）をブラウザ上で直感的に操作・学習できるオンラインUIと、当社の事業内容やアプリについて自動応答するQ&A AIボットをコーポレートサイト上に公開しました。",
    summaryEn: "Added an interactive browser-based Qubit (Bloch sphere) model visualizer and an automated Q&A AI bot to our corporate website.",
    readTime: "2 min"
  },
  {
    id: "news-04",
    date: "2026.08.15",
    category: "Service",
    categoryJa: "事業案内",
    titleJa: "法人・事業者様向けWebアプリケーション受託開発およびUI/UX設計相談の受付開始",
    titleEn: "Now Accepting Inquiries for Custom Web Application Development & UI/UX Engineering",
    summaryJa: "自社プロダクト開発で培ったReact / TypeScript / AI組み込み開発の知見を活かし、法人・個人事業主様向けのWebアプリケーション開発、プロトタイプ構築、ITコンサルティングのご相談受付を開始いたしました。",
    summaryEn: "Leveraging our expertise in React, TypeScript, and AI integration, Qua LLC now accepts custom web application development and technical consulting engagements.",
    readTime: "2 min"
  }
];
