import React, { useState } from 'react';
import { Language, ActiveBrand } from '../types';
import { REACH_TODAY_DATA } from '../data/multiBrandData';
import { 
  Globe2, 
  Sparkles, 
  Users, 
  Building2, 
  Calendar, 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Flame, 
  Shield, 
  GraduationCap, 
  Send,
  ExternalLink,
  Award,
  BookOpen,
  Vote,
  HeartHandshake,
  AlertCircle
} from 'lucide-react';

interface ReachTodayPageProps {
  lang: Language;
  onNavigateBrand: (brand: ActiveBrand) => void;
  onOpenInquiry: (context: string) => void;
}

export const ReachTodayPage: React.FC<ReachTodayPageProps> = ({
  lang,
  onNavigateBrand,
  onOpenInquiry,
}) => {
  const [selectedAudienceTab, setSelectedAudienceTab] = useState<'youth' | 'school' | 'sponsor'>('youth');
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <div className="relative z-10 font-sans text-slate-100">
      {/* 1. HERO SECTION: Visionary, Honest, Educational Movement */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/15 to-blue-600/15 blur-[130px] pointer-events-none -z-10 rounded-full" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold">{lang === 'ja' ? '民主主義を「考える」から「自ら動かす」へ' : 'From "Studying Democracy" to Practicing Governance'}</span>
            <span className="text-emerald-500">|</span>
            <span className="text-slate-300">{lang === 'ja' ? '次世代主権者教育 ＆ 若者コミュニティ構想' : 'Youth Civic Empowerment'}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.18] [text-wrap:balance]">
            {lang === 'ja' ? (
              <>
                民主主義を、「考える」から「実践する」へ。<br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  自ら社会のルールを設計する実践体験
                </span>
              </>
            ) : (
              <>
                From Thinking to Action:<br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 bg-clip-text text-transparent">
                  Youth-Led Governance & Deliberation
                </span>
              </>
            )}
          </h1>

          {/* Subtitle - Honest positioning */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
            {lang === 'ja'
              ? 'Reach Todayは、「民主主義って何だろう？」と教科書を暗記するだけにとどまらず、政策ディベート・模擬国家シミュレーション（Reanow）・対面サミットを通じて、若者が社会課題の当事者として意思決定と合意形成の難しさを学び、自ら動かす力を育む主権者教育イニシアティブです。'
              : 'Reach Today moves beyond rote civics textbooks into hands-on deliberation. Through policy sandboxes, youth assemblies, and prospective regional summits, we empower young people to actively shape the institutions of tomorrow.'}
          </p>

          {/* Transparency Disclaimer Notice */}
          <div className="max-w-2xl mx-auto mb-8 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-left flex items-start gap-3 text-xs text-slate-300 backdrop-blur-md">
            <AlertCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-300">{lang === 'ja' ? 'プロジェクトの現在位置：' : 'Current Project Status: '}</span>
              {lang === 'ja'
                ? '現在、パイロット校での試験導入および2027年開催構想（日程・東京都内会場・想定規模は未定）を進めている準備・実証フェーズです。教育機関・自治体・生徒会の皆様とのパートナーシップおよび先行参加エントリーを受け付けています。'
                : 'Currently in the pilot development and institutional partnership phase. Actively accepting co-creation partners and student pilot entries for our planned 2027 Tokyo programs (TBD).'}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => onOpenInquiry('Reach Today 先行コミュニティ参加・支部開設申請')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-base shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{lang === 'ja' ? '先行参加・支部開設エントリー（無料）' : 'Apply for Pilot Membership (Free)'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateBrand('reanow')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-sky-300 border border-sky-500/30 hover:border-sky-400/60 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'ja' ? '学習用シミュレータ「Reanow」を見る' : 'Explore Simulator: Reanow'}</span>
            </button>

            <button
              onClick={() => onOpenInquiry('Reach Today 学校・自治体・企業スポンサー相談')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700/60 text-sm font-medium transition-colors cursor-pointer"
            >
              <span>{lang === 'ja' ? '教育機関・自治体のご相談' : 'Institutional Partnerships'}</span>
            </button>
          </div>

          {/* Honest Roadmap Goals Bar */}
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 text-center">
              {lang === 'ja' ? '現在の活動拠点 ＆ 2027年構想計画（東京）' : 'Current Tokyo Base & 2027 Concept Planning'}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 mb-1">{lang === 'ja' ? '東京' : 'Tokyo'}</div>
                <div className="text-[11px] text-slate-400">{lang === 'ja' ? '現在の実証準備拠点' : 'Current Pilot Base'}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold text-teal-300 mb-1">{lang === 'ja' ? '2027年' : '2027'}</div>
                <div className="text-[11px] text-slate-400">{lang === 'ja' ? 'サミット構想（未定）' : 'Summit Concept (TBD)'}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold text-sky-400 mb-1">{lang === 'ja' ? '未定' : 'TBD'}</div>
                <div className="text-[11px] text-slate-400">{lang === 'ja' ? '想定規模（計画中）' : 'Projected Scale (TBD)'}</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-slate-950/40 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-bold text-indigo-300 mb-1">{lang === 'ja' ? '準備中' : 'In Prep'}</div>
                <div className="text-[11px] text-slate-400">{lang === 'ja' ? '都内実証パートナー募集中' : 'Pilot Partners Open'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SECTION: Redefining Civic Sovereignty */}
      <section className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              {lang === 'ja' ? '教育的意義とミッション' : 'Our Mission & Pedagogical Framework'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-6">
              {lang === 'ja' ? (
                <>教科書の知識を、<br /><span className="text-emerald-400">「現実の社会課題を解決する思考力」</span>へ昇華させる</>
              ) : (
                <>Moving Beyond Rote Knowledge into <span className="text-emerald-400">Collaborative Deliberation</span></>
              )}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ja'
                ? '選挙権が18歳に引き下げられた今、教育現場に最も求められているのは、対立する意見をすり合わせ、限られた予算のトレードオフを理解し、合意を形成する実践的な経験です。Reach Todayは、安全な模擬空間と対話の場を通じて、次世代の健全な主権者意識の醸成を支援します。'
                : 'Lowering the voting age requires modern civics education to equip young citizens with hands-on skills in policy deliberation, fiscal trade-off analysis, and democratic compromise.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-emerald-500/20 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Vote className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {lang === 'ja' ? '01. 体験型主権者学習カリキュラム' : '01. Experiential Civics Inquiry'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'ja'
                  ? '税率、インフラ投資、環境規制、社会保障。単なる暗記ではなく、政策選択がもたらす長期的な影響をシミュレーション上で比較検証する学習プログラム。'
                  : 'Deliberate fiscal trade-offs, public healthcare funding, and energy transition within structured, simulated policy frameworks.'}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'ja' ? '高等学校「公共」・総合的な探究の時間に対応' : 'Aligned with inquiry curricula'}
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-teal-500/20 hover:border-teal-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {lang === 'ja' ? '02. 東京対面サミット構想（2027年・未定）' : '02. Tokyo Dialogue & 2027 Summit Concept'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'ja'
                  ? '現在は東京都内を拠点に実証準備を進めており、学生や教育関係者との対話や勉強会を企画。2027年に向けた東京サミット構想（日程・会場・想定規模はすべて未定）の具体化を目指しています。'
                  : 'Currently based exclusively in Tokyo for pilot preparations, organizing preliminary discussions with students and educators while shaping the 2027 Tokyo summit concept (all dates, venue, and scale unfinalized).'}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'ja' ? '東京都内で実証準備中' : 'Pilot preparation in Tokyo'}
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-sky-500/20 hover:border-sky-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {lang === 'ja' ? '03. Reanowデジタル模擬環境連携' : '03. Reanow Simulation Sandbox'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'ja'
                  ? 'Qua合同会社が研究開発する模擬環境『Reanow』を公式学習プラットフォームとして採用。議論でまとめた政策法案をシミュレータ上で即座に検証可能です。'
                  : 'Seamlessly linked to the Reanow simulation sandbox, allowing students to turn policy proposals into interactive digital tests.'}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'ja' ? 'Qua合同会社 共同研究開発' : 'R&D by Qua LLC'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POWERED BY REANOW: Pedagogical Synergy */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-[#0d1627] to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{lang === 'ja' ? 'EdTech シミュレーション連携' : 'EdTech Simulation Platform'}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 leading-tight">
                  {lang === 'ja' ? (
                    <>議論した政策法案を、<br /><span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">デジタル模擬国家「Reanow」で即座に検証</span></>
                  ) : (
                    <>From In-Class Debate into <br /><span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Digital Sandbox Validation</span></>
                  )}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {lang === 'ja'
                    ? 'Reach Todayでの政策ディベートやワークショップの成果は、デジタル学習アプリ「Reanow」の模擬議会やマクロ経済モデリングへ持ち込むことができます。自分たちの提案が税収や雇用、環境指標にどのような影響を与えるかを、安全なデジタル空間の中で数値として体感できます。'
                    : 'Debate transcripts and legislative drafts authored during Reach Today workshops are tested inside Reanow’s macroeconomic sandbox, letting students observe quantifiable policy trade-offs.'}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
                    {lang === 'ja' ? '🎤 模擬議会プレゼンテーション' : '🎤 Mock Speech Arena'}
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
                    {lang === 'ja' ? '🗳️ 改ざん耐性・模擬電子投票' : '🗳️ Verifiable Mock Elections'}
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-medium">
                    {lang === 'ja' ? '🏙️ マクロ経済・財政トレードオフ学習' : '🏙️ Economic Budgeting'}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onNavigateBrand('reanow')}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'ja' ? 'Reanow 開発プレビューを見る' : 'Explore Reanow Preview'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400">
                    {lang === 'ja' ? '※Qua合同会社 共同開発・IP保有' : 'Governed by Qua LLC'}
                  </span>
                </div>
              </div>

              {/* Sample pedagogical simulation mockup */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl relative">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400">REANOW // CLASSROOM SANDBOX</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                      <div className="text-[10px] text-slate-500 mb-1">【授業演習シナリオ】高校生探究カリキュラム</div>
                      <div className="font-semibold text-white">「地方都市における再エネ導入と企業誘致税制」</div>
                      <div className="text-emerald-400 mt-1">✔ 模擬投票結果: 賛成 68% / 慎重 32%</div>
                    </div>

                    <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-cyan-200">
                      <div className="text-[10px] text-cyan-400 mb-1">SIMULATION FEEDBACK METRICS</div>
                      <div>再生可能エネルギー比率: +22%</div>
                      <div>短期的財政負担: -3.4%（5年後回収モデル）</div>
                      <div className="text-xs text-sky-300 mt-1">※教育用数理モデルによる試算表示</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL CHAPTERS & SUMMIT EVENTS: Honest Roadmap */}
      <section className="py-20 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                {lang === 'ja' ? '対面サミット構想 ＆ 設立準備中支部' : 'Prospective Summits & Chapter Network'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {lang === 'ja' ? '2027年開催構想プログラム（日程・会場・想定規模は未定 / エントリー受付中）' : '2027 Flagship Summit Plans (TBD) & Pilot Hubs'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-3 md:mt-0 max-w-md">
              {lang === 'ja'
                ? '現時点では東京都内での開催構想（日程・会場・想定規模は未定）を中心に、教育機関や学生発起人と協働でパイロット勉強会や準備を進めています。'
                : 'Developing prospective 2027 summits in Tokyo (TBD, venue/scale unfinalized) and regional pilot roundtables with academic partners.'}
            </p>
          </div>

          {/* Summits Highlight Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {REACH_TODAY_DATA.summits.map((summit) => (
              <div
                key={summit.id}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                      {lang === 'ja' ? summit.statusJa : summit.status}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {summit.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {lang === 'ja' ? summit.titleJa : summit.title}
                  </h3>

                  <div className="text-xs text-emerald-400/90 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'ja' ? summit.venueJa : summit.venue}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {lang === 'ja' ? summit.descriptionJa : summit.description}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 mb-6">
                    {summit.noteJa}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 font-medium">
                    {summit.attendees}
                  </span>
                  <button
                    onClick={() => onOpenInquiry(`サミット構想エントリー：${summit.titleJa}`)}
                    className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === 'ja' ? '参加エントリー / 相談' : 'Register Interest'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tokyo Pilot Hub Showcase (All activity currently in Tokyo) */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>{lang === 'ja' ? '実証準備拠点：東京都内（準備室）' : 'Current Pilot Hub: Tokyo (Preparatory Desk)'}</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'ja'
                    ? '現在の活動・実証はすべて東京都内のみで進めています。日程・会場・参加規模はすべて未定であり、教育機関や学生発起人との対話を重ねながら具体化しています。'
                    : 'All current activities and pilot preparations are strictly based in Tokyo. Specific dates, venues, and scales remain unfinalized.'}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold whitespace-nowrap self-start md:self-auto">
                {lang === 'ja' ? '東京拠点・実証準備中' : 'Tokyo Pilot Office'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-1">
                  {lang === 'ja' ? '活動地域' : 'Location'}
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {lang === 'ja' ? '東京都内（日本）' : 'Tokyo, Japan'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ja'
                    ? '現在は東京都内のみに活動を絞り、教育現場での実証カリキュラム検証と初期発起人メンバーの募集を行っています。'
                    : 'Activities are currently focused exclusively in Tokyo for pilot curriculum validation and initial member onboarding.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-mono text-teal-400 font-semibold mb-1">
                  {lang === 'ja' ? 'サミット構想' : 'Summit Timeline'}
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {lang === 'ja' ? '2027年 開催構想（未定）' : '2027 Concept (TBD)'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ja'
                    ? '2027年内の開催構想として準備中。具体的な開催日程、会場、想定参加規模はいずれも未定（調整中）です。'
                    : 'Targeted for 2027; exact dates, Tokyo venue, and participant capacity remain completely unfinalized.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <div className="text-xs font-mono text-sky-400 font-semibold mb-1">
                  {lang === 'ja' ? '共同参画・相談' : 'Collaboration'}
                </div>
                <div className="text-base font-bold text-white mb-2">
                  {lang === 'ja' ? '実証校・学生発起人 募集中' : 'Accepting Pilot Inquiries'}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ja'
                    ? '模擬世界シミュレータ『Reanow』を活用した授業やワークショップに関心のある教育機関・学生を募集しています。'
                    : 'Welcoming high school teachers, university researchers, and student leaders to co-create pilot workshops.'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  {lang === 'ja'
                    ? '※架空の海外支部や実績等の誇大表記は一切行わず、現時点での実態（東京拠点・2027年構想・日程規模未定）を誠実に開示しています。'
                    : 'Transparently disclosing our current early stage: Tokyo-only pilot, 2027 roadmap TBD.'}
                </span>
              </div>
              <button
                onClick={() => onOpenInquiry('東京パイロット拠点への参加・相談')}
                className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                {lang === 'ja' ? '東京拠点への参加・相談' : 'Contact Tokyo Pilot Desk'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MULTI-STAKEHOLDER ONBOARDING SECTION */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-[#040812]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
            {lang === 'ja' ? 'パートナーシップ ＆ 参加方法' : 'Collaborative Participation'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4">
            {lang === 'ja' ? '学校・学生・自治体とともに創る主権者教育' : 'Building Tomorrow’s Civics Together'}
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            {lang === 'ja'
              ? '生徒会や学生団体での先行導入、高校・大学での探究学習カリキュラム連携、自治体・企業による次世代支援など、目的に合わせた参画を受け付けています。'
              : 'Whether you are a student leader, an educator designing civic curriculum, or an enterprise championing youth education—join our co-creation community.'}
          </p>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mb-8">
            <button
              onClick={() => setSelectedAudienceTab('youth')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedAudienceTab === 'youth'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'ja' ? '学生・若者（個人・生徒会）' : 'Students & Youth'}
            </button>
            <button
              onClick={() => setSelectedAudienceTab('school')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedAudienceTab === 'school'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'ja' ? '高校・大学・教育委員会' : 'Schools & Faculty'}
            </button>
            <button
              onClick={() => setSelectedAudienceTab('sponsor')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedAudienceTab === 'sponsor'
                  ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'ja' ? '自治体・議員事務所・企業' : 'Municipalities & Sponsors'}
            </button>
          </div>

          {/* Dynamic Tab Content */}
          <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 text-left max-w-2xl mx-auto shadow-xl">
            {selectedAudienceTab === 'youth' && (
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {lang === 'ja' ? '学生・若者向けエントリー' : 'For Students & Young Leaders'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'ja'
                    ? '政策ディベートや模擬選挙、Reanow学習シミュレーターのクローズド検証に参加できます。同じ志を持つ同世代の仲間と議論を深めましょう。'
                    : 'Access policy debate groups, mock voting sandboxes, and early Reanow learning tests. Free to join for all students.'}
                </p>
                <button
                  onClick={() => onOpenInquiry('Reach Today 学生・個人エントリー')}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ja' ? '学生先行エントリー（参加費無料）' : 'Apply for Student Pilot (Free)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {selectedAudienceTab === 'school' && (
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {lang === 'ja' ? '高校・大学・教育機関向け導入相談' : 'For Schools & Faculty'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'ja'
                    ? '「公共」や総合探究、大学のゼミ・講義で活用できる体験型シミュレーション教材や、出前ディベートワークショップのご相談を受け付けています。'
                    : 'Curriculum modules and classroom simulation sandboxes tailored for high school social studies and university political science courses.'}
                </p>
                <button
                  onClick={() => onOpenInquiry('Reach Today 教育機関向けカリキュラム相談')}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ja' ? '教育カリキュラム・授業導入の相談' : 'Inquire for School Curriculum'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {selectedAudienceTab === 'sponsor' && (
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {lang === 'ja' ? '自治体・議員事務所・企業協賛' : 'For Municipalities & Sponsors'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'ja'
                    ? '若年層の投票率向上・主権者意識向上プロジェクトや、2027年サミット構想（未定）への共催・後援、CSR/次世代育成プログラムとしての連携をご案内します。'
                    : 'Collaborate on youth civic awareness initiatives, public policy hearings, or co-sponsor the planned 2027 Tokyo programs (TBD).'}
                </p>
                <button
                  onClick={() => onOpenInquiry('Reach Today 自治体・企業パートナー相談')}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{lang === 'ja' ? '自治体・協賛パートナーの相談' : 'Partner with Reach Today'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
