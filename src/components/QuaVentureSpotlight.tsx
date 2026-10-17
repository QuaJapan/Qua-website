import React from 'react';
import { Language, ActiveBrand } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  Globe2, 
  Zap, 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Layers, 
  Vote, 
  Flame,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface QuaVentureSpotlightProps {
  lang: Language;
  onNavigateBrand: (brand: ActiveBrand) => void;
  onOpenInquiry: (context: string) => void;
}

export const QuaVentureSpotlight: React.FC<QuaVentureSpotlightProps> = ({
  lang,
  onNavigateBrand,
  onOpenInquiry,
}) => {
  return (
    <section id="ventures" className="py-20 relative bg-[#070d1a] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ja' ? 'Qua合同会社 · 新規事業ポートフォリオ（研究開発フェーズ）' : 'Flagship R&D Ventures · Qua LLC'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              {lang === 'ja' ? (
                <>次代の社会基盤を創る、<span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">2つの重点新規事業</span></>
              ) : (
                <>Two Strategic Growth Ventures <br /><span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">Pioneered by Qua LLC</span></>
              )}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-4 md:mt-0 leading-relaxed">
            {lang === 'ja'
              ? 'Qua合同会社は、高品質な受託開発・語学アプリケーション等の実績の上に、次世代主権者教育イニシアティブ『Reach Today』と、模擬統治シミュレーションMMO『Reanow』の研究開発を推進しています。'
              : 'Built upon our rigorous software engineering standards, Qua LLC acts as the legal holding and technology foundation for Reach Today and Reanow.'}
          </p>
        </div>

        {/* 2 Flagship Venture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Venture 1: Reach Today */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0a1428] to-[#060c18] border border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ja' ? '主権者教育イニシアティブ / 若者コミュニティ' : 'Youth Civics Initiative & Network'}</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  実証準備フェーズ
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                Reach Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {lang === 'ja'
                  ? '高校や大学の探究学習・主権者教育と連携し、机上の暗記にとどまらない「政策立案と合意形成の実践」を推進するプログラム。2027年開催構想（日程・会場・想定規模はすべて未定、東京都内）に向けた実証準備を進めています。'
                  : 'An educational initiative connecting student assemblies, municipal civics projects, and inquiry coursework with experiential policy debates in Tokyo (2027 concept, all details TBD).'}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 font-mono text-center">
                <div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">東京</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? '活動拠点（実証中）' : 'Base: Tokyo'}</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-teal-300">未定</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? '想定規模（調整中）' : 'Scale TBD'}</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-sky-400">2027年</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? 'サミット構想（未定）' : 'Summit (TBD)'}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{lang === 'ja' ? '高等学校「公共」・大学の講義・探究学習向け教材として設計' : 'Designed for accredited high school & college civics inquiry'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{lang === 'ja' ? '2027年開催構想（日程・都内会場未定）に向けた共同パートナー募集' : 'Actively seeking 2027 Tokyo institutional & municipal partners'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-800/80">
              <button
                onClick={() => onNavigateBrand('reach-today')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'ja' ? 'Reach Today サイト（構想詳細）を見る' : 'Explore Reach Today LP'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenInquiry('Reach Today 教育機関・自治体連携の問合せ')}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
              >
                {lang === 'ja' ? '教育機関・提携相談' : 'Institutional Inquiry'}
              </button>
            </div>
          </div>

          {/* Venture 2: Reanow */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#100e26] to-[#070612] border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-16 -top-16 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wide">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{lang === 'ja' ? '模擬統治シミュレーション MMO-SNS' : 'Geopolitical Simulation MMO-SNS'}</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  プロトタイプ開発中
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Reanow（リアナウ）
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {lang === 'ja'
                  ? '仮想議場での演説、改ざん耐性投票プロトコル、マクロ経済都市建設、条約交渉を数理モデルで統合したシミュレーションアプリ。現実の政治・軍事とは切り離された安全な学習・エンターテインメント環境を提供します。'
                  : 'An open-world geopolitical simulation game where users deliver parliamentary speeches, participate in cryptographic mock elections, and allocate fiscal resources within a digital sandbox.'}
              </p>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 font-mono text-center">
                <div>
                  <div className="text-base sm:text-lg font-bold text-cyan-400">クローズドβ</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? '事前登録受付中' : 'Pre-Reg Open'}</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-pink-400">数理モデル</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? '政策経済試算' : 'Economic Engine'}</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-amber-300">3 Factions</div>
                  <div className="text-[10px] text-slate-400">{lang === 'ja' ? '仮想統治陣営' : 'Ideologies'}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{lang === 'ja' ? 'Reach Today公式学習シミュレーション基盤として研究開発' : 'Serves as the digital simulation engine for Reach Today'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{lang === 'ja' ? 'マルチプラットフォーム展開予定（iOS / Android / WebGL）' : 'Multi-platform release planned for mobile & WebGL'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-800/80">
              <button
                onClick={() => onNavigateBrand('reanow')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'ja' ? 'Reanow 開発プレビューを見る' : 'Explore Reanow Product LP'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenInquiry('Reanow 投資・VC・事業提携の相談')}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
              >
                {lang === 'ja' ? '投資・事業提携相談' : 'Investor / Partner Inquiry'}
              </button>
            </div>
          </div>
        </div>

        {/* Value Proposition for Investors, Universities & Partners */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {lang === 'ja' ? '投資家・VC・インパクトファンドへ' : 'For Investors & Impact Funds'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ja'
                  ? 'ゲーミフィケーションと教育テック（EdTech）を融合した高成長モデル。技術基盤と知的財産（IP）をQua合同会社が包括管理し、堅実なロードマップに基づいて進捗させています。'
                  : 'A high-leverage convergence of youth gamification and civic education markets, anchored by sound engineering discipline.'}
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {lang === 'ja' ? '大学・高校・教育委員会関係者へ' : 'For Universities & High Schools'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ja'
                  ? '一方通行の講義では伝えにくい「税収と公共サービスのトレードオフ」「意見が対立したときの合意形成」を、学生が自発的に試行錯誤できる安全な学習環境を提供します。'
                  : 'Provides a safe, mathematically grounded simulation environment for students to observe policy trade-offs and practice consensus-building.'}
              </p>
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {lang === 'ja' ? '自治体・提携企業パートナーへ' : 'For Municipalities & Enterprises'}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'ja'
                  ? '地域の若者世代との意見交換や、SDGs・脱炭素施策の周知・理解促進を、サミット構想や教育プログラムを通じて誠実かつ透明に共創できます。'
                  : 'Engage youth demographics in authentic civic dialogue and pilot education initiatives with verifiable transparency.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
