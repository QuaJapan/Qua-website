import React, { useState } from 'react';
import { Language, ActiveBrand } from '../types';
import { REANOW_DATA } from '../data/multiBrandData';
import { 
  Zap, 
  Mic, 
  Vote, 
  Building, 
  Swords, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  Globe2, 
  Sparkles, 
  Terminal, 
  Flame, 
  Check, 
  Sliders, 
  Cpu, 
  TrendingUp, 
  Send,
  Download,
  AlertTriangle,
  Play,
  RotateCw,
  Info,
  Layers
} from 'lucide-react';

interface ReanowPageProps {
  lang: Language;
  onNavigateBrand: (brand: ActiveBrand) => void;
  onOpenInquiry: (context: string) => void;
}

export const ReanowPage: React.FC<ReanowPageProps> = ({
  lang,
  onNavigateBrand,
  onOpenInquiry,
}) => {
  const [selectedFeature, setSelectedFeature] = useState<'speech' | 'election' | 'city' | 'diplomacy'>('speech');
  const [selectedFaction, setSelectedFaction] = useState(REANOW_DATA.factions[0]);
  const [preRegEmail, setPreRegEmail] = useState('');
  const [preRegSuccess, setPreRegSuccess] = useState(false);
  const [speechSentiment, setSpeechSentiment] = useState(68);
  const [simTaxRate, setSimTaxRate] = useState(25);
  const [simTechBudget, setSimTechBudget] = useState(40);
  const [activeSpeechSample, setActiveSpeechSample] = useState(0);

  const speechSamples = [
    { textJa: '「エネルギーの分散自動化を推進！透明なアルゴリズム議会による合意形成を目指す！」', sentimentGain: +14, applause: '仮想有権者リアクション: 賛同率 78%' },
    { textJa: '「市民インフラの即時減税と自由市場の開放！デジタル交易ルートを拡充せよ！」', sentimentGain: +9, applause: '仮想有権者リアクション: 賛同率 72%' },
    { textJa: '「危機管理体制を強化！重要サプライチェーンの防衛と戦略的備蓄の法制化を要求！」', sentimentGain: -4, applause: '仮想有権者リアクション: 賛否両論 (52%)' },
  ];

  const handleTestSpeech = (index: number) => {
    setActiveSpeechSample(index);
    const sample = speechSamples[index];
    setSpeechSentiment(Math.min(99, Math.max(30, 65 + sample.sentimentGain)));
  };

  const handlePreRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preRegEmail) return;
    setPreRegSuccess(true);
    setTimeout(() => {
      setPreRegSuccess(false);
      setPreRegEmail('');
    }, 4500);
  };

  // Calculated macro economy metrics
  const calculatedGdp = (100 + (simTechBudget * 0.8) - (simTaxRate * 0.4)).toFixed(1);
  const calculatedHappiness = Math.min(100, Math.max(20, 95 - simTaxRate * 1.1 + (simTechBudget * 0.35))).toFixed(0);

  return (
    <div className="relative z-10 font-sans text-slate-100 bg-[#05060d]">
      {/* Cyberpunk Neon Glow Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      {/* 1. HERO SECTION: Cyberpunk Neon Future Simulator - Clear Beta/Prototype Framing */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Cyberpunk Badge - Honest Phase Tag & Platform Mission */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider mb-6 shadow-lg shadow-cyan-500/10">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold text-white">{lang === 'ja' ? '民主主義のインフラをアップデートする' : 'UPDATING THE INFRASTRUCTURE OF DEMOCRACY'}</span>
            <span className="text-cyan-600">/</span>
            <span className="text-pink-400">{lang === 'ja' ? 'プロトタイプ開発中・事前登録受付' : 'In R&D · Pre-Reg Live'}</span>
          </div>

          {/* Main Glitch-Style Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white mb-6 uppercase leading-tight [text-wrap:balance]">
            {lang === 'ja' ? (
              <>
                <span className="block text-xl sm:text-3xl text-cyan-400 font-mono font-bold tracking-widest mb-3">
                  【もし君が国を動かすなら？】
                </span>
                模擬国家を創れ。演説で世論を動かせ。<br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                  民主主義のインフラをアップデートする
                </span>
                <br />
                <span className="text-xl sm:text-3xl text-slate-200 font-semibold tracking-normal block mt-2">
                  デジタル統治シミュレーション MMO-SNS
                </span>
              </>
            ) : (
              <>
                <span className="block text-xl sm:text-3xl text-cyan-400 font-mono font-bold tracking-widest mb-3">
                  [ WHAT IF YOU RAN THE NATION? ]
                </span>
                Build a Digital Nation. Lead with Deliberation.<br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                  Updating the Infrastructure of Democracy
                </span>
                <br />
                <span className="text-xl sm:text-3xl text-slate-200 font-semibold tracking-normal block mt-2">
                  The Geopolitical Simulation MMO
                </span>
              </>
            )}
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
            {lang === 'ja'
              ? '「ただ机上で民主主義を『考える』のではなく、ゲームの熱狂の中で民主主義のリアルを遊び倒し、検証する。」仮想議会での演説、改ざん耐性投票プロトコル、マクロ経済都市モデリング、条約交渉。プレイヤーがデジタル空間上に架空国家を立ち上げ、意思決定と合意形成の難しさと面白さを体感する、次世代のシビックテック＆エデュテインメント基盤『Reanow』。'
              : 'Moving beyond passive textbook theory into living digital deliberation. Reanow combines parliamentary speech arenas, cryptographic voting, macro-economic sandboxes, and multilateral diplomacy to update the core infrastructure of civic engagement through gamification.'}
          </p>

          {/* Boundaries Disclaimer */}
          <div className="max-w-2xl mx-auto mb-8 p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-left flex items-start gap-3 text-xs text-slate-300">
            <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-cyan-300">{lang === 'ja' ? '【重要：シミュレーション環境について】' : '[Simulation Boundary Notice] '}</span>
              {lang === 'ja'
                ? '本作における「国家」「条約」「防衛」「戦争」等の機能は、すべてデジタル上の架空のゲーム・数理シミュレーション空間内で完結するものです。現実の国際紛争、外交関係、実在の政治活動を操作・代行するものでは一切ありません。'
                : 'All in-game factions, treaty pacts, and defense simulations operate strictly within a digital sandbox environment. Reanow does not interact with or manipulate real-world geopolitical or military systems.'}
            </div>
          </div>

          {/* Registration Counter Banner - Clearly Defined as Target Scale */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl mb-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-left">
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                  {lang === 'ja' ? 'クローズドβ事前登録 目標マイルストーン' : 'Closed Beta Pre-Registration Goal'}
                </div>
                <div className="text-2xl sm:text-3xl font-mono font-black text-white flex items-center gap-2">
                  <span>目標 50,000名</span>
                  <span className="text-xs font-normal text-slate-400">（ローンチ想定規模）</span>
                </div>
              </div>
              <div className="w-full sm:w-48 text-left">
                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  開発ステータス: <span className="text-emerald-400 font-semibold">コアエンジン検証中</span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-fuchsia-500 rounded-full w-[45%]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>αテスト完了</span>
                  <span className="text-cyan-300">次回βテスト準備中</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Registration Form */}
          <div className="max-w-md mx-auto mb-14">
            <form onSubmit={handlePreRegSubmit} className="flex gap-2">
              <input
                type="email"
                value={preRegEmail}
                onChange={(e) => setPreRegEmail(e.target.value)}
                placeholder={lang === 'ja' ? 'メールアドレスで事前登録・最新情報を受け取る...' : 'Enter your email for beta updates...'}
                required
                className="flex-1 px-4 py-3.5 rounded-xl bg-slate-950/90 border border-cyan-500/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 shadow-inner"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>{preRegSuccess ? (lang === 'ja' ? '登録完了！' : 'Registered!') : (lang === 'ja' ? '事前登録' : 'Pre-Reg')}</span>
                <Zap className="w-4 h-4 fill-current" />
              </button>
            </form>
            <div className="text-[11px] text-slate-500 mt-2 font-mono">
              {lang === 'ja' ? '※iOS / Android / WebGL 対応予定・基本プレイ無料（Qua合同会社開発・IP保有）' : 'Planned for iOS, Android & WebGL. Free to play. Developed by Qua LLC.'}
            </div>
          </div>
        </div>
      </section>

      {/* 2. REANOW MISSION MANIFESTO: Updating the Infrastructure of Democracy */}
      <section className="py-14 bg-gradient-to-r from-cyan-950/40 via-slate-950 to-fuchsia-950/40 border-y border-cyan-500/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-mono text-xs mb-3 border border-cyan-500/40">
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? 'シビックテック ＆ エデュテインメント理念' : 'CIVIC-TECH & EDUTAINMENT MISSION'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight mb-3">
                {lang === 'ja'
                  ? '民主主義のインフラ（OS）を、デジタル空間からアップデートする'
                  : 'Updating the Infrastructure of Democracy from the Digital Sandbox'}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {lang === 'ja'
                  ? 'SNS上の分断や対立、若者の政治的無関心は、個人の意識の問題だけではなく「意思決定を体験し検証する仕組み（インフラ）の老朽化」に起因しています。Reanowは、誰もが「統治者」と「市民」双方の視点から、限られた予算の配分、世論の説得、外交の摩擦をゲームとして試行錯誤できる【次世代のシビックテック＆エデュテインメント基盤】を確立します。'
                  : 'Political polarization and civic disengagement stem from outdated participatory infrastructure. Reanow provides a mathematically sound, playful sandbox to test democratic trade-offs and consensus-building mechanisms.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto font-mono">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30">
                <div className="text-cyan-400 font-bold text-xs mb-1">01. 徹底した体験化</div>
                <div className="text-[11px] text-slate-300">「考える」にとどまらず、演説や投票で実際に世論を動かす</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-pink-500/30">
                <div className="text-pink-400 font-bold text-xs mb-1">02. 数理・透明性</div>
                <div className="text-[11px] text-slate-300">暗号集計とマクロ経済モデルによる、改ざん耐性のある制度検証</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                <div className="text-emerald-400 font-bold text-xs mb-1">03. エデュテインメント</div>
                <div className="text-[11px] text-slate-300">堅苦しい講義を排し、MMOゲームの熱狂の中で合意形成を学ぶ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE PILLARS: Interactive Feature Breakdown */}
      <section className="py-20 bg-slate-950/80 border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              CORE SIMULATION PILLARS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {lang === 'ja' ? '4つの模擬統治システム（ゲーム内設計）' : 'Four Pillars of Simulated Governance'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {lang === 'ja'
                ? '※すべて仮想ワールド内のシミュレーションメカニクスです。'
                : 'All mechanics operate within the digital sandbox world.'}
            </p>
          </div>

          {/* Pillars Navigation Buttons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {REANOW_DATA.features.map((feat) => {
              const isSelected = selectedFeature === feat.key;
              return (
                <button
                  key={feat.key}
                  onClick={() => setSelectedFeature(feat.key as any)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {feat.key === 'speech' && <Mic className="w-4 h-4 text-cyan-400" />}
                    {feat.key === 'election' && <Vote className="w-4 h-4 text-pink-400" />}
                    {feat.key === 'city' && <Building className="w-4 h-4 text-emerald-400" />}
                    {feat.key === 'diplomacy' && <Swords className="w-4 h-4 text-amber-400" />}
                    <span className="text-[11px] font-mono text-cyan-500 uppercase">{feat.tag}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {lang === 'ja' ? feat.titleJa.split('（')[0] : feat.titleEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Sandbox Showcase */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl">
            {selectedFeature === 'speech' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs mb-3">
                    <Mic className="w-3.5 h-3.5" />
                    <span>SYSTEM 01: VIRTUAL SPEECH ARENA</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {lang === 'ja' ? 'アバターで挑む、仮想議場スピーチ' : 'Avatar Speeches in the Virtual Parliamentary Chamber'}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'ja'
                      ? '仮想の議会ステージに登壇し、自らの政策構想をプレゼンテーション。AIによる自然言語解析とオーディエンス反応モデルが、聴衆アバターの賛否リアクションや支持率メーターをインタラクティブに変動させます。'
                      : 'Step onto the digital parliamentary stage. Your policy statements are processed via pedagogical AI sentiment engines, simulating constituency responsiveness in real time.'}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-mono text-slate-400">演説サンプルを選択（シミュレータの反応をテスト）:</div>
                    {speechSamples.map((sample, i) => (
                      <button
                        key={i}
                        onClick={() => handleTestSpeech(i)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                          activeSpeechSample === i
                            ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-medium text-slate-200">{sample.textJa}</div>
                        <div className="text-[10px] text-cyan-400 mt-1 font-mono">{sample.applause}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner font-mono text-xs">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                      <span className="text-cyan-400 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                        SPEECH TELEMETRY HUD (PROTOTYPE)
                      </span>
                      <span className="text-slate-500">SIMULATED CONSTITUENCY</span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>仮想民意指数 (SIMULATED SENTIMENT)</span>
                        <span className="font-bold text-cyan-300">{speechSentiment}%</span>
                      </div>
                      <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400 transition-all duration-700"
                          style={{ width: `${speechSentiment}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 space-y-1 text-[11px]">
                      <div>✓ 仮想オーディエンス共鳴度: <span className="text-emerald-400">HIGH ENGAGEMENT</span></div>
                      <div>✓ 模擬議案提出条件: <span className="text-cyan-300">達成 (支持度60%以上)</span></div>
                      <div>✓ シミュレーション予測獲得議席: <span className="text-amber-300">32議席 (+6)</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedFeature === 'election' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-pink-500/10 text-pink-400 font-mono text-xs mb-3">
                    <Vote className="w-3.5 h-3.5" />
                    <span>SYSTEM 02: VERIFIABLE ELECTIONS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {lang === 'ja' ? '改ざん耐性・模擬電子投票プロトコル' : 'Verifiable Civic Elections Simulator'}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'ja'
                      ? '中央集権的な不正操作を排除した暗号検証型プロトコルにより、模擬議会選挙や住民投票を実施。一票の集計プロセスや透明性の重要性を実体験できるシミュレーション機構です。'
                      : 'Cryptographic proof guarantees that every single mock ballot is verifiable and tamper-proof. Students observe the mathematical mechanics of verifiable democratic tabulation.'}
                  </p>
                  <div className="p-4 rounded-xl bg-pink-950/20 border border-pink-500/30 text-pink-200 text-xs">
                    ✔ 教育機関向け：主権者教育用「模擬住民投票シナリオ」実装
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="flex justify-between pb-2 border-b border-slate-800 text-slate-400">
                      <span>MOCK BALLOT: SCENARIO #9402</span>
                      <span className="text-pink-400">SIMULATION MODE</span>
                    </div>
                    <div className="text-white font-bold text-sm">「先端自動化都市におけるエネルギー移行計画」</div>
                    <div className="space-y-2 pt-2">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-cyan-400">賛成 (Ayes): 64.2%</span>
                          <span className="text-slate-400">1,284 模擬票</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                          <div className="bg-cyan-400 h-full w-[64%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-rose-400">反対 (Noes): 35.8%</span>
                          <span className="text-slate-400">716 模擬票</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                          <div className="bg-rose-500 h-full w-[36%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedFeature === 'city' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs mb-3">
                    <Building className="w-3.5 h-3.5" />
                    <span>SYSTEM 03: MACRO-ECONOMY SANDBOX</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {lang === 'ja' ? 'マクロ経済・財政トレードオフ学習環境' : 'Macro-Economic Nation Building Sandbox'}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'ja'
                      ? '税率、インフラ投資、クリーンエネルギー比率を配分。数理シミュレーションに基づき、市民満足度や財政収支のトレードオフを安全に観察できる学習環境です。'
                      : 'Balance fiscal budgets, industry subsidies, and clean energy mandates. Watch macroeconomic indicators shift dynamically with policy sliders.'}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                        <span>仮想法人・所得税率: {simTaxRate}%</span>
                        <span className="text-slate-500">(財政歳入)</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="60"
                        value={simTaxRate}
                        onChange={(e) => setSimTaxRate(Number(e.target.value))}
                        className="w-full accent-emerald-400 cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                        <span>技術・インフラ投資配分: {simTechBudget}%</span>
                        <span className="text-slate-500">(成長投資)</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="80"
                        value={simTechBudget}
                        onChange={(e) => setSimTechBudget(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-4">
                    <div className="text-emerald-400 font-bold border-b border-slate-800 pb-2">
                      SIMULATED NATION INDICATORS (MODEL)
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">想定GDP成長率指数</div>
                        <div className="text-2xl font-bold text-cyan-300 mt-1">+{calculatedGdp}%</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-[10px] text-slate-400">仮想市民満足度</div>
                        <div className="text-2xl font-bold text-emerald-400 mt-1">{calculatedHappiness} / 100</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      💡 投資比率を上げると短期的財政負担が増加しますが、中長期の都市成長指標が向上します。
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedFeature === 'diplomacy' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 text-amber-400 font-mono text-xs mb-3">
                    <Swords className="w-3.5 h-3.5" />
                    <span>SYSTEM 04: GEOPOLITICAL GAME THEORY</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {lang === 'ja' ? '多国間条約・模擬地政学シミュレーション' : 'Multilateral Treaties & Geopolitical Game Theory'}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {lang === 'ja'
                      ? '仮想国家間で通商協定の締結、資源関税の交渉、安全保障条約を締結。国際政治における相互依存と摩擦のメカニズムをゲーム理論的に検証します。※現実の軍事・安全保障とは関係のない架空の学習シナリオです。'
                      : 'Negotiate trade corridors, establish defensive treaties, and model supply chain shocks among fictional digital nations.'}
                  </p>
                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs">
                    ✔ ゲーム理論に基づく国家間交渉・同盟モデリングフレームワーク
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3">
                    <div className="text-amber-400 font-bold border-b border-slate-800 pb-2">
                      MOCK TREATY FRAMEWORK // CONTINENT A
                    </div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-white font-semibold">北部安全保障協定（架空シナリオ）</div>
                          <div className="text-[10px] text-slate-400">加盟国家間 相互防衛・危機対応モデリング</div>
                        </div>
                        <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">枠組み有効</span>
                      </div>

                      <div className="p-2.5 rounded bg-slate-900 border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="text-white font-semibold">再生可能資源・自由通商協定</div>
                          <div className="text-[10px] text-slate-400">クリーンテック関税ゼロ化協定</div>
                        </div>
                        <span className="text-cyan-400 text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">模擬批准済</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. THREE STARTING FACTIONS */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 mb-2">
              SIMULATED FACTIONS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              {lang === 'ja' ? '統治思想の比較検証（3つの架空陣営）' : 'Explore Governance Models (Three In-Game Factions)'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              {lang === 'ja'
                ? '国家の統治哲学や制度設計の違いを比較するために用意された、ゲーム内の架空モデルです。'
                : 'Fictional ideological archetypes designed to test differing governance philosophies within the simulation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REANOW_DATA.factions.map((fac) => {
              const isSelected = selectedFaction.id === fac.id;
              return (
                <div
                  key={fac.id}
                  onClick={() => setSelectedFaction(fac)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-400 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded bg-cyan-500 text-slate-950 text-[10px] font-mono font-bold uppercase">
                      SELECTED
                    </div>
                  )}

                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fac.color} p-0.5 mb-6 flex items-center justify-center`}>
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {lang === 'ja' ? fac.nameJa : fac.name}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mb-4">
                      {lang === 'ja' ? fac.ideologyJa : fac.ideology}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {lang === 'ja' ? fac.descriptionJa : fac.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">SIMULATION CHARACTERISTIC</div>
                    <div className="text-xs font-mono text-emerald-400 font-semibold">
                      {lang === 'ja' ? fac.bonusJa : fac.bonus}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BETA ROADMAP & REWARDS */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-[#060914] to-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            DEVELOPMENT ROADMAP
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
            {lang === 'ja' ? '開発ロードマップと先行テスター募集' : 'R&D Roadmap & Tester Milestones'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-12">
            {lang === 'ja'
              ? '現在プロトタイプ検証を進めており、事前登録いただいた方にクローズドβテストのご案内や先行テスター限定バッジを順次ご案内します。'
              : 'Our development team is refining the core simulation engine. Pre-register to receive invitations to private beta testing cohorts.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono">
            <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/40">
              <div className="flex items-center justify-between text-xs text-emerald-400 mb-2">
                <span>Phase 1</span>
                <span className="flex items-center gap-1 font-bold">✔ 完了</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">コア数理モデル検証</div>
              <div className="text-[11px] text-slate-400">マクロ経済・投票集計エンジンの内部プロトタイプ完成</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-cyan-500/80 shadow-lg shadow-cyan-500/10">
              <div className="flex items-center justify-between text-xs text-cyan-400 mb-2">
                <span>Phase 2 (現在)</span>
                <span className="font-bold text-cyan-300">進行中</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">UI/UX・仮想議会プロトタイプ</div>
              <div className="text-[11px] text-slate-400">クローズドβテスターおよび教育機関連携ヒアリング</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 opacity-80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Phase 3 (2026年予定)</span>
                <span>準備中</span>
              </div>
              <div className="text-sm font-bold text-slate-300 mb-1">オープンβ・マルチ展開</div>
              <div className="text-[11px] text-slate-400">Reach Todayサミット連動および一般公開</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CROSS LINKING & CORPORATE GOVERNANCE */}
      <section className="py-16 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase mb-1">CIVIC ALLIANCE & CORPORATE GOVERNANCE</div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {lang === 'ja'
                  ? 'Reanowは『Reach Today』主権者教育イニシアティブの公式学習基盤です'
                  : 'Reanow serves as the educational simulation engine for Reach Today'}
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                {lang === 'ja'
                  ? '教育現場で議論された政策モデルが、Reanow内で学術的に検証されます。また、親会社であるQua合同会社が技術基盤と知的財産（IP）を保有・健全に運営しています。'
                  : 'Debated policy proposals are modeled inside Reanow for educational inquiry. Qua LLC holds the underlying intellectual property and technology infrastructure.'}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onNavigateBrand('reach-today')}
                className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>{lang === 'ja' ? 'Reach Today 公式サイトへ' : 'Visit Reach Today'}</span>
              </button>

              <button
                onClick={() => onNavigateBrand('qua')}
                className="flex-1 md:flex-initial px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all cursor-pointer"
              >
                <span>{lang === 'ja' ? '運営会社 Qua合同会社' : 'Qua LLC Corporate'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
