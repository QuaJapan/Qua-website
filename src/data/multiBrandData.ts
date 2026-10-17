import { Language } from '../types';

export interface GlobalChapter {
  id: string;
  city: string;
  cityJa: string;
  country: string;
  countryJa: string;
  targetMembers: string;
  lead: string;
  status: string;
  statusJa: string;
  flag: string;
  focusAreaJa: string;
}

export interface SummitEvent {
  id: string;
  title: string;
  titleJa: string;
  date: string;
  venue: string;
  venueJa: string;
  attendees: string;
  status: string;
  statusJa: string;
  description: string;
  descriptionJa: string;
  badge: string;
  noteJa: string;
}

export interface ReanowFactions {
  id: string;
  name: string;
  nameJa: string;
  ideology: string;
  ideologyJa: string;
  color: string;
  accentHex: string;
  leaderType: string;
  bonus: string;
  bonusJa: string;
  descriptionJa: string;
  descriptionEn: string;
}

export const REACH_TODAY_DATA = {
  // 誇大表現を排除：すでに達成した過去実績ではなく「ロードマップ・展開目標値（Target Metrics）」として定義
  stats: {
    baseCity: '東京（実証拠点）',
    targetAudienceReach: '未定（規模策定中）',
    summitYear: '2027年（構想・日程未定）',
    pilotSchoolsGoal: '都内実証パートナー募集中',
  },
  chapters: [
    { 
      id: 'tyo', 
      city: 'Tokyo', 
      cityJa: '東京（実証・準備拠点）', 
      country: 'Japan', 
      countryJa: '日本', 
      targetMembers: '発起人・初期メンバー準備中', 
      lead: '神保 想叶 / Soya J. (発起人代表)', 
      status: 'Pilot Desk', 
      statusJa: '実証準備中（東京拠点）', 
      flag: '🇯🇵',
      focusAreaJa: '探究学習カリキュラム実証・青年模擬議会'
    }
  ] as GlobalChapter[],
  summits: [
    {
      id: 'summit-2027-tokyo',
      title: 'Reach Today Global Youth Summit: Tokyo 2027 (Flagship Plan - TBD)',
      titleJa: 'Reach Today 世界青年サミット 2027：東京旗艦大会（構想計画・未定 / 参加エントリー受付中）',
      date: '2027年 開催構想（日程未定）',
      venue: 'Tokyo, Japan (Venue TBD) & Online Simulation Stream',
      venueJa: '東京都内（会場未定）＆ オンライン学習配信（予定）',
      attendees: '想定規模: 未定（会場調整中）',
      status: 'Planning (TBD) / Entry Open',
      statusJa: '開催構想中（未定）・参加エントリー受付中',
      description: 'A prospective flagship conference bringing together students, civic-tech educators, and municipal leaders to model policy trade-offs within the Reanow digital learning sandbox.',
      descriptionJa: '次世代を担う高校生・大学生、主権者教育に携わる教育関係者・自治体パートナーが集い、デジタル模擬環境「Reanow」を活用して政策の合意形成を体験する旗艦プログラム（2027年開催予定に向けた構想策定・日程会場未定 / エントリー受付中）。',
      badge: '2027年 開催構想（未定）',
      noteJa: '※本サミットは現在、2027年の開催日程および東京都内会場の調整を進めているプロジェクト構想（未定）です。教育機関・自治体との共催パートナーおよび参加学生のエントリーを受け付けています。'
    },
    {
      id: 'summit-2027-tokyo-roundtable',
      title: 'Youth Civic Tech Roundtable: Tokyo 2027 (Proposed Framework - TBD)',
      titleJa: '次世代シビックテック円卓会議：東京 2027（検討中プログラム・未定）',
      date: '2027年 検討中（日程未定）',
      venue: 'Tokyo, Japan (Venue TBD) & Online Global Link',
      venueJa: '東京都内（会場未定）＆ オンライン連携予定',
      attendees: '想定規模: 未定（調整中）',
      status: 'Concept Proposal (TBD)',
      statusJa: '開催構想策定中（未定）',
      description: 'A planned regional roundtable exploring youth voting engagement and educational simulation models across digital democracies.',
      descriptionJa: 'デジタル民主主義学習や若年層の社会参加教育をテーマに、教育機関・若手研究者との連携を目的とした検討中ラウンドテーブル（2027年・東京都内での開催を検討中）。',
      badge: '2027年 企画検討（未定）',
      noteJa: '※現時点では東京都内での開催構想となっており、提携大学・研究機関との協業枠組み、日程、想定規模はすべて未定です。'
    }
  ] as SummitEvent[]
};

export const REANOW_DATA = {
  // 誇大広告リスクを完全排除：開発中（α/β版・プロトタイプ）であることと、目標数値を誠実に明示
  metrics: {
    statusBadgeJa: '現在プロトタイプ開発・クローズドβ検証中',
    statusBadgeEn: 'In Active Prototype & Closed Beta R&D',
    preRegisteredTarget: 50000,
    architectureTypeJa: '民主主義のインフラをアップデートする 次世代シビックテック＆エデュテインメント基盤',
    conceptHookJa: 'もし君が国を動かすなら？ 演説・選挙・統治を体験する模擬世界MMO',
    platformMissionJa: '「民主主義を考える」から一歩進み、デジタル空間から民主主義のインフラをアップデートする',
  },
  factions: [
    {
      id: 'techno-republic',
      name: 'Techno-Republic (In-Game Faction)',
      nameJa: 'テクノ・リパブリック（架空のシミュレーション陣営）',
      ideology: 'Algorithmic Optimization & Evidence-Based Policy',
      ideologyJa: 'データ駆動型政策・科学的合意形成・インフラ自動化',
      color: 'from-cyan-500 to-blue-600',
      accentHex: '#00F0FF',
      leaderType: 'Chancery Council',
      bonus: 'Simulation: Tech Research Weight +25% / Budget Allocation Efficiency',
      bonusJa: 'ゲーム内設定：技術研究ウェイト +25% / 予算配分最適化',
      descriptionJa: '【ゲーム内設定】デジタル上の模擬国家において、データ解析と数理モデルによって都市インフラを最適化する進歩派の仮想勢力。',
      descriptionEn: 'An in-game theoretical faction modeling algorithmic governance and smart-infrastructure budgeting within digital simulations.'
    },
    {
      id: 'sol-confederacy',
      name: 'Sol Confederacy (In-Game Faction)',
      nameJa: 'ソル・コンフェデラシー（架空のシミュレーション陣営）',
      ideology: 'Civic Liberty, Participatory Assemblies & Market Freedom',
      ideologyJa: '市民参加型議会・直接民主制モデル・分散経済',
      color: 'from-emerald-400 to-teal-600',
      accentHex: '#10B981',
      leaderType: 'Citizens Assembly',
      bonus: 'Simulation: Civic Engagement +30% / Trade Corridor Openness',
      bonusJa: 'ゲーム内設定：市民参加スコア +30% / 外交交易ルート開放度',
      descriptionJa: '【ゲーム内設定】重要政策をプレイヤー全員のリアルタイム投票で決定する、徹底した参加型民主主義を検証するための仮想勢力。',
      descriptionEn: 'An in-game faction designed to test direct referendums, civic deliberation, and decentralized governance models.'
    },
    {
      id: 'neo-aegis',
      name: 'Neo-Aegis Imperium (In-Game Faction)',
      nameJa: 'ネオ・イージス帝国連合（架空のシミュレーション陣営）',
      ideology: 'Strategic Resilience, Defense Coordination & Resource Stability',
      ideologyJa: '危機管理・重要サプライチェーン防衛・強固なガバナンス',
      color: 'from-fuchsia-500 to-rose-600',
      accentHex: '#EC4899',
      leaderType: 'Strategic High Command',
      bonus: 'Simulation: Defensive Resilience +40% / Resource Mobilization',
      bonusJa: 'ゲーム内設定：防衛レジリエンス +40% / 資源動員即応性',
      descriptionJa: '【ゲーム内設定】国際秩序の危機や災害時に迅速な意思決定を行い、国家機能の保全を検証するための架空の安全保障モデリング勢力。',
      descriptionEn: 'A fictional simulation faction modeling emergency management, resource resilience, and coordinated crisis defense protocols.'
    }
  ] as ReanowFactions[],
  features: [
    {
      key: 'speech',
      titleJa: '仮想議会・アバタースピーチ（Live Speech Arena）',
      titleEn: 'Virtual Parliamentary Speech Arena',
      descJa: '【デジタル模擬空間】アバターを通じて仮想の議場に登壇し、政策案をプレゼンテーション。AIによるテキスト・トーン解析とオーディエンス反応が可視化され、合意形成の難しさと説得技法を学べます。',
      descEn: 'A digital parliamentary stage where users deliver policy presentations. AI-assisted sentiment tools provide pedagogical feedback on audience engagement.',
      icon: 'Mic',
      tag: '仮想議場・スピーチ検証'
    },
    {
      key: 'election',
      titleJa: '検証可能・改ざん耐性投票プロトコル（Elections Simulator）',
      titleEn: 'Verifiable Civic Elections Simulator',
      descJa: '【デジタル模擬空間】暗号技術を用いた改ざん耐性プロトコルにより、模擬議会選挙や住民投票を実施。一票の集計プロセスや透明性の重要性を実体験できるシミュレーション機構です。',
      descEn: 'Simulates municipal and parliamentary elections using cryptographic proof mechanisms, teaching the foundations of verifiable digital voting.',
      icon: 'Vote',
      tag: '透明性・模擬投票'
    },
    {
      key: 'city',
      titleJa: 'マクロ経済・国家都市モデリング（Economic City Builder）',
      titleEn: 'Macro-Economic City & Policy Sandbox',
      descJa: '【デジタル模擬空間】税率、インフラ投資、再生可能エネルギー比率を配分。数理シミュレーションに基づき、失業率や財政赤字のトレードオフを安全に観察できる学習環境です。',
      descEn: 'An educational macroeconomic sandbox where users adjust tax brackets, clean-energy subsidies, and municipal budgets to observe structural trade-offs.',
      icon: 'Building',
      tag: '数理・経済モデリング'
    },
    {
      key: 'diplomacy',
      titleJa: '多国間条約・模擬地政学シミュレーション（Geopolitical Sandbox）',
      titleEn: 'Simulated Geopolitics & Treaty Diplomacy',
      descJa: '【デジタル模擬空間】他プレイヤーの仮想国家と同盟締結や貿易協定、安全保障の駆け引きを展開。国際政治の相互依存関係と摩擦のメカニズムをゲーム理論的に検証します。※現実の軍事・政治操作とは一切関係ありません。',
      descEn: 'A multiplayer game-theory sandbox for negotiating trade accords, mutual defensive treaties, and resource allocation among fictional digital nations.',
      icon: 'Swords',
      tag: 'ゲーム理論・模擬外交'
    }
  ]
};
