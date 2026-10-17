import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Radio, 
  BookOpenCheck, 
  ExternalLink, 
  RotateCw, 
  Layers, 
  Bot, 
  CheckCircle2, 
  Code2, 
  Layout, 
  Server, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Bell
} from 'lucide-react';

interface WebApplicationsPipelineProps {
  lang: Language;
  onOpenNotifyModal: (appTitle: string) => void;
  onAskCopilotAboutApp: (appName: string, context: string) => void;
}

export const WebApplicationsPipeline: React.FC<WebApplicationsPipelineProps> = ({
  lang,
  onOpenNotifyModal,
  onAskCopilotAboutApp,
}) => {
  // Interactive UI Preview state for EitangoNihongo (Revolutionary Vocabulary & Language Learning App)
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isWordFlipped, setIsWordFlipped] = useState(false);

  const sampleWords = [
    {
      word: "Breakthrough",
      pronunciation: "/ˈbreɪk.θruː/",
      pos: "noun / adj.",
      translation: "飛躍的進歩、現状打破、ブレイクスルー",
      context: "The team achieved a major breakthrough in natural language learning efficiency.",
      nuance: "単なる「進歩（progress）」ではなく、長年越えられなかった壁や限界を一気に突き破るような革新的・決定的な発見や成果を指します。",
      etymology: "break（打ち破る）＋ through（貫通して）→ 障壁を突き抜けるイメージ",
      level: "革命的語彙ネットワーク · 核概念"
    },
    {
      word: "Nuance",
      pronunciation: "/ˈnuː.ɑːns/",
      pos: "noun",
      translation: "微妙な意味合い、ニュアンス、語感の差異",
      context: "Mastering a language requires understanding the subtle nuances between similar words.",
      nuance: "辞書の一語一訳ではこぼれ落ちてしまう「話し手の感情・文脈・フォーマル度合いの微妙な違い」を表す、語学学習で最も重要な概念です。",
      etymology: "フランス語 nuer（色合いをつける、雲のようにぼかす）に由来",
      level: "語学・表現の本質"
    },
    {
      word: "Retention",
      pronunciation: "/rɪˈten.ʃən/",
      pos: "noun",
      translation: "記憶の保持・定着、維持",
      context: "Contextual learning dramatically improves long-term vocabulary retention.",
      nuance: "一時的な丸暗記（memorization）と対比して、「学んだ知識や語彙を忘れずに脳内に長く留めておく力（記憶定着）」を意味します。",
      etymology: "re-（後ろへ・しっかりと）＋ tain（保つ＝tenere）",
      level: "認知科学・学習理論"
    }
  ];

  const developmentSteps = [
    {
      step: "01",
      titleJa: "要件定義・企画設計",
      titleEn: "Requirements & Architecture",
      descJa: "解決したい課題とターゲットユーザーを整理し、必要な機能一覧・画面遷移・データベース構造を明確に定義します。",
      descEn: "Defining clear business objectives, user flows, functional specifications, and system architecture.",
      icon: Layout
    },
    {
      step: "02",
      titleJa: "UI/UXデザイン・プロトタイプ",
      titleEn: "UI/UX Design & Prototyping",
      descJa: "実際の画面イメージを早期にプロトタイプ化し、操作性や情報の見やすさを確認しながらデザインを固めます。",
      descEn: "Building interactive UI prototypes early to verify usability, clarity, and responsive layout behavior.",
      icon: Layers
    },
    {
      step: "03",
      titleJa: "フロントエンド・バックエンド実装",
      titleEn: "Full-Stack Implementation",
      descJa: "React / TypeScript / Node.js 等のモダンで保守性の高い技術スタックを用い、堅牢で高速なアプリケーションを構築します。",
      descEn: "Writing clean, maintainable code using React, TypeScript, Node.js, and modern cloud databases.",
      icon: Code2
    },
    {
      step: "04",
      titleJa: "品質検証・公開・継続運用",
      titleEn: "QA Testing, Launch & Support",
      descJa: "動作検証・セキュリティ確認を経て安全にリリースし、公開後の機能改善や保守運用まで責任を持って伴走します。",
      descEn: "Thorough testing, secure deployment, and continuous post-launch feature iteration and maintenance.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="applications" className="py-20 sm:py-28 relative bg-[#070b14] text-white border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono-tech text-sky-400 mb-2">
            APPLICATION DEVELOPMENT &amp; PRODUCTS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {lang === 'ja' ? '自社アプリケーション・開発プロジェクト' : 'In-House Applications & Development Pipeline'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            {lang === 'ja'
              ? '従来の暗記型学習を覆す革命的英単語・語学単語学習アプリ『EitangoNihongo』（現在開発中・近々公開予定）をはじめ、次世代SNS『Paralmeet』（Upcoming / Developing）、および法人向けアプリケーション受託開発を展開しています。'
              : 'Led by our upcoming revolutionary vocabulary app EitangoNihongo (In Development / Launching Soon), alongside our next-gen social network Paralmeet (Upcoming / Developing) and custom software engineering.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. IN-DEVELOPMENT FLAGSHIP: EitangoNihongo (現在開発中・近々公開予定) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 border-b border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {lang === 'ja'
                  ? '01. 開発中アプリケーション：EitangoNihongo（英単語・語学単語学習アプリ / 近々公開予定）'
                  : '01. In-Development Flagship: EitangoNihongo (Vocabulary Learning App / Coming Soon)'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'ja'
                  ? '「一語一訳の丸暗記」から「文脈・語源・ニュアンスの立体理解」へ。語学単語学習の常識を覆す自社Webアプリケーション（現在開発中・近々公開予定）。'
                  : 'Transforming language vocabulary acquisition through deep nuance mapping, etymology, and adaptive spaced repetition (In Active Development / Launching Soon).'}
              </p>
            </div>
            <span className="text-xs text-amber-400 font-medium">
              {lang === 'ja' ? '● 現在開発中・近々公開予定（Coming Soon）' : '● In Development (Launching Soon)'}
            </span>
          </div>

          <div className="rounded-2xl bg-[#0b1120] border border-slate-800 p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Detailed Description of EitangoNihongo */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/60">
                      <BookOpenCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono-tech text-amber-400">
                        IN ACTIVE DEVELOPMENT · LAUNCHING SOON
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2.5">
                        <span>EitangoNihongo</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-sans font-medium">
                          {lang === 'ja' ? '開発中・近々公開' : 'Coming Soon'}
                        </span>
                      </h4>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-sky-300 mb-3">
                    {lang === 'ja'
                      ? '語彙習得の効率と理解深度を根本から変える、革命的英単語・語学単語学習アプリ（現在開発中・近々公開予定）'
                      : 'Revolutionary English & Language Vocabulary Learning Application (Coming Soon)'}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {lang === 'ja'
                      ? '『EitangoNihongo（英単語日本語）』は、単語リストを機械的に丸暗記する従来の学習法を刷新するために現在開発を進めている、次世代の英単語・語学単語学習アプリケーションです（近々公開予定）。実際の文脈に即した生きた例文、類義語との繊細なニュアンスの違い、語源（コアイメージ）の解説、そして脳科学・忘却曲線に基づく反復アルゴリズム（SRS）を一つに統合しています。'
                      : 'EitangoNihongo is currently in active development to replace mechanical rote memorization with deep conceptual mastery. It integrates living context sentences, native nuance comparisons, etymological core imagery, and adaptive spaced-repetition scheduling in a fast, intuitive web interface.'}
                  </p>

                  {/* 3 Revolutionary Points */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/90 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">
                          {lang === 'ja' ? '1. ニュアンス・語源（コアイメージ）の立体理解' : '1. Nuance & Etymological Core Mapping'}
                        </strong>
                        <span className="text-slate-300">
                          {lang === 'ja'
                            ? '直訳だけでは身につかない「どんな文脈・感情で使われる単語なのか」という本質的な語感を視覚的に整理して習得できます。'
                            : 'Master subtle usage differences and core word imagery rather than isolated one-word translations.'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/90 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">
                          {lang === 'ja' ? '2. 忘却曲線に最適化されたスマート反復（SRS）' : '2. Adaptive Spaced Repetition Scheduling'}
                        </strong>
                        <span className="text-slate-300">
                          {lang === 'ja'
                            ? '記憶が薄れる直前の最適なタイミングで復習カードを自動提示し、最小限の学習時間で確実な長期記憶への定着を実現します。'
                            : 'Automatically schedules review sessions right before memory decay to maximize long-term vocabulary retention.'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800/90 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <strong className="text-white block mb-0.5">
                          {lang === 'ja' ? '3. 英単語からあらゆる語学単語学習へ通じる設計' : '3. Comprehensive Language Vocabulary Architecture'}
                        </strong>
                        <span className="text-slate-300">
                          {lang === 'ja'
                            ? '実用英語・ビジネス英語・学術語彙から多言語の語彙習得まで、生涯にわたって語学力を高め続けられる学習基盤です。'
                            : 'Designed for lifelong language learners across daily conversation, business communication, and technical domains.'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onOpenNotifyModal('EitangoNihongo（英単語・語学単語学習アプリ / 近々公開予定）')}
                    className="flex-1 py-3 px-5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-md"
                  >
                    <Bell className="w-4 h-4" />
                    <span>{lang === 'ja' ? 'EitangoNihongo 公開通知・事前登録' : 'Notify Me Upon EitangoNihongo Launch'}</span>
                  </button>
                  <button
                    onClick={() => onAskCopilotAboutApp('EitangoNihongo', '現在開発中の英単語・語学単語学習アプリ「EitangoNihongo」の特徴や公開予定について詳しく教えてください。')}
                    className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs border border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                    <span>{lang === 'ja' ? 'Q&Aボットで詳しく聞く' : 'Ask Q&A Bot'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive EitangoNihongo Card Demo */}
              <div className="lg:col-span-6">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#070b14] border border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ja' ? 'EitangoNihongo 先行プレビュー体験（開発中）' : 'EitangoNihongo Interactive Card Preview (Under Development)'}</span>
                    </span>
                    <span className="font-mono-tech tabular-nums text-slate-400">
                      Word {currentWordIndex + 1} / {sampleWords.length}
                    </span>
                  </div>

                  {/* Interactive Flip Card */}
                  <div
                    onClick={() => setIsWordFlipped(!isWordFlipped)}
                    className="p-5 sm:p-6 rounded-xl bg-[#0b1120] border border-slate-700/80 hover:border-sky-500/60 transition-colors cursor-pointer min-h-[220px] flex flex-col justify-between select-none"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-3 pb-3 border-b border-slate-800">
                        <div>
                          <span className="text-2xl font-display font-bold text-white mr-2.5">
                            {sampleWords[currentWordIndex].word}
                          </span>
                          <span className="text-xs font-mono-tech text-slate-400">
                            {sampleWords[currentWordIndex].pronunciation}
                          </span>
                        </div>
                        <span className="text-xs font-mono-tech text-sky-400 shrink-0">
                          {sampleWords[currentWordIndex].pos}
                        </span>
                      </div>

                      {!isWordFlipped ? (
                        <div className="space-y-3 py-2">
                          <div className="text-[11px] font-mono-tech text-slate-400">
                            {lang === 'ja' ? '【文脈例文 / Context Sentence】' : '[Context Sentence]'}
                          </div>
                          <p className="text-sm sm:text-base italic text-sky-100 leading-relaxed">
                            "{sampleWords[currentWordIndex].context}"
                          </p>
                          <p className="text-xs text-sky-400 pt-2">
                            {lang === 'ja'
                              ? '→ カードをクリックして「日本語訳・ニュアンス解説・語源イメージ」を表示'
                              : '→ Click card to reveal translation, nuance breakdown, and etymology'}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3 py-1">
                          <div>
                            <div className="text-[11px] text-slate-400 mb-0.5">
                              {lang === 'ja' ? '核心の意味・日本語訳' : 'Core Meaning'}
                            </div>
                            <div className="text-base font-bold text-sky-300">
                              {sampleWords[currentWordIndex].translation}
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[#070b14] border border-slate-800 text-xs text-slate-200 leading-relaxed">
                            <span className="font-semibold text-white block mb-1">
                              {lang === 'ja' ? 'ニュアンス・使い分け解説：' : 'Nuance & Usage:'}
                            </span>
                            {sampleWords[currentWordIndex].nuance}
                          </div>

                          <div className="text-xs text-slate-300">
                            <span className="text-slate-400 mr-1.5">{lang === 'ja' ? '語源・コアイメージ：' : 'Etymology:'}</span>
                            {sampleWords[currentWordIndex].etymology}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-4 border-t border-slate-800/80 text-xs text-slate-400">
                      <span>{sampleWords[currentWordIndex].level}</span>
                      <span className="text-sky-400 inline-flex items-center gap-1 font-medium">
                        <RotateCw className="w-3.5 h-3.5" />
                        {lang === 'ja' ? 'クリックで表裏切替' : 'Flip Card'}
                      </span>
                    </div>
                  </div>

                  {/* Card Navigation Controls */}
                  <div className="flex items-center justify-between gap-3 mt-4">
                    <button
                      onClick={() => {
                        setIsWordFlipped(false);
                        setCurrentWordIndex((prev) => (prev > 0 ? prev - 1 : sampleWords.length - 1));
                      }}
                      className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs border border-slate-800 cursor-pointer"
                    >
                      &larr; {lang === 'ja' ? '前の単語へ' : 'Previous Word'}
                    </button>
                    <button
                      onClick={() => setIsWordFlipped(!isWordFlipped)}
                      className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-sky-300 text-xs border border-slate-800 cursor-pointer"
                    >
                      {isWordFlipped
                        ? (lang === 'ja' ? '表面（英文）に戻す' : 'Show Front')
                        : (lang === 'ja' ? '裏面（ニュアンス解説）を見る' : 'Show Nuance')}
                    </button>
                    <button
                      onClick={() => {
                        setIsWordFlipped(false);
                        setCurrentWordIndex((prev) => (prev < sampleWords.length - 1 ? prev + 1 : 0));
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs cursor-pointer"
                    >
                      {lang === 'ja' ? '次の単語へ' : 'Next Word'} &rarr;
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. UPCOMING & DEVELOPING PROJECTS: Paralmeet (次世代SNS) & Tools */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-8 border-b border-slate-800">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                {lang === 'ja' ? '02. 次世代プロジェクト＆開発パイプライン（Upcoming / Developing）' : '02. Upcoming & Developing Projects'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'ja'
                  ? '現在開発を推進している次世代SNS『Paralmeet』および後続Webアプリケーション群です。'
                  : 'Upcoming applications currently in development at Qua LLC.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Paralmeet: Clean Name & Status Only (No Demo) */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-tech text-sky-400 font-semibold">
                    Upcoming · Developing
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Paralmeet
                </h4>
                <div className="text-xs font-medium text-slate-300 mb-3">
                  {lang === 'ja' ? '次世代SNS（Next-Gen Social Network）' : 'Next-Gen Social Network'}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {lang === 'ja'
                    ? '現在開発中の次世代ソーシャルネットワーキングサービス（次世代SNS）。（Upcoming / Developing）'
                    : 'Next-generation social networking service currently in active development. (Upcoming / Developing)'}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Next-Gen SNS</span>
                <span className="font-mono-tech text-slate-300">Developing</span>
              </div>
            </div>

            {/* Qua Spark Studio */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400">
                    Upcoming · Developing
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Qua Spark Studio
                </h4>
                <div className="text-xs font-medium text-slate-300 mb-3">
                  {lang === 'ja' ? 'Webデザイン・UIプロトタイプ制作支援' : 'Browser UI Prototyping Suite'}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {lang === 'ja'
                    ? 'ブラウザ上で画面構成やUIプロトタイプの設計・共有を行えるクリエイティブ制作支援ツール。（Upcoming / Developing）'
                    : 'Browser-based workspace for organizing UI wireframes and design components. (Upcoming / Developing)'}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Creator Tool</span>
                <span className="font-mono-tech text-slate-300">Developing</span>
              </div>
            </div>

            {/* Qua AI Workflow */}
            <div className="p-6 rounded-2xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400">
                    Upcoming · Developing
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-1">
                  Qua AI Workflow
                </h4>
                <div className="text-xs font-medium text-slate-300 mb-3">
                  {lang === 'ja' ? '業務タスク整理・AIドキュメント支援' : 'AI Workflow & Document Assistant'}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {lang === 'ja'
                    ? 'リサーチや仕様書作成、日常業務のタスク整理を段階的にサポートするビジネス支援Webツール。（Upcoming / Developing）'
                    : 'Multi-step AI workflow assistant for document structuring and business productivity. (Upcoming / Developing)'}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>AI Productivity</span>
                <span className="font-mono-tech text-slate-300">Developing</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CUSTOM APPLICATION DEVELOPMENT & ENGINEERING PROCESS */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0b1120] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono-tech text-sky-400 mb-1">
                CUSTOM SOFTWARE &amp; APPLICATION ENGINEERING
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {lang === 'ja' ? '03. 受託アプリケーション開発・システム構築体制' : '03. Custom Application Development & Engineering Process'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl">
                {lang === 'ja'
                  ? '自社プロダクト開発で培ったフロントエンド・バックエンド・AI組み込みの実装力を活かし、法人・個人事業主様のWebアプリケーション開発や業務システム構築を承っております。'
                  : 'Leveraging our in-house product engineering expertise, we build custom web applications, business dashboards, and AI-integrated tools for corporate clients.'}
              </p>
            </div>
            <button
              onClick={() => onOpenNotifyModal('受託アプリ開発・システム構築のご相談')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              {lang === 'ja' ? '開発の見積り・相談をする' : 'Request Development Consultation'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {developmentSteps.map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="p-5 rounded-xl bg-[#070b14] border border-slate-800/90 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono-tech font-bold text-sky-400">STEP {item.step}</span>
                      <StepIcon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">
                      {lang === 'ja' ? item.titleJa : item.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lang === 'ja' ? item.descJa : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="font-semibold text-slate-200">{lang === 'ja' ? '対応技術領域：' : 'Core Tech Stack:'}</span>
              <span>React / Next.js / TypeScript / Node.js / Python / RDBMS / 生成AI API連携</span>
            </div>
            <div className="text-slate-400">
              {lang === 'ja' ? '新規立ち上げ（MVP開発）から既存システムの改修まで対応' : 'From MVP builds to full enterprise system modernization'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
