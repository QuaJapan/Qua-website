import React, { useState } from 'react';
import { Language } from '../types';
import { OFFICIAL_CORPORATE_DATA } from '../data/corporateData';
import { 
  ShieldCheck, 
  Building2, 
  FileText, 
  CheckCircle, 
  FileCheck2, 
  X 
} from 'lucide-react';

interface CorporateRegistryProps {
  lang: Language;
}

export const CorporateRegistry: React.FC<CorporateRegistryProps> = ({ lang }) => {
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  return (
    <section id="corporate" className="py-20 sm:py-28 relative border-t border-slate-800/80 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono-tech text-sky-400 mb-2">
            COMPANY PROFILE &amp; STATUTORY REGISTRY
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
            {lang === 'ja' ? '会社概要・法人登記情報' : 'Company Profile & Corporate Registry'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed font-sans">
            {lang === 'ja'
              ? '法務局発行の現在事項全部証明書（商業・法人登記簿謄本）に基づく、Qua合同会社の公式企業概要および定款記載の事業目的です。'
              : 'Official corporate registration details and statutory business purposes of Qua LLC based on the commercial registry certified by the Ministry of Justice.'}
          </p>
        </div>

        {/* Corporate Overview & Governance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Formal Corporate Profile Table */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0b1120] border border-slate-800 p-6 sm:p-8 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    {lang === 'ja' ? OFFICIAL_CORPORATE_DATA.legalNameJa : OFFICIAL_CORPORATE_DATA.legalNameEn}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {lang === 'ja' ? '法人番号：0100-03-051369' : 'Corporate Number: 0100-03-051369'}
                  </div>
                </div>
              </div>

              <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'ja' ? '法務局登記済法人' : 'Registered Legal Entity'}</span>
              </span>
            </div>

            {/* Clean Structured Definition Table */}
            <dl className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '商号（会社名）' : 'Legal Name'}</dt>
                <dd className="sm:col-span-2 text-white font-semibold">
                  {lang === 'ja' ? 'Qua合同会社（英文表記：Qua LLC）' : 'Qua LLC (Qua合同会社)'}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '会社法人等番号' : 'Corporate Number'}</dt>
                <dd className="sm:col-span-2 text-white font-mono-tech tabular-nums">
                  {OFFICIAL_CORPORATE_DATA.corporateNumber}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '設立年月日' : 'Date of Incorporation'}</dt>
                <dd className="sm:col-span-2 text-white">
                  {lang === 'ja' ? OFFICIAL_CORPORATE_DATA.establishedDateJa : OFFICIAL_CORPORATE_DATA.establishedDateEn}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '代表者' : 'Representative'}</dt>
                <dd className="sm:col-span-2 text-white">
                  <div>{lang === 'ja' ? `代表社員・業務執行社員　${OFFICIAL_CORPORATE_DATA.representativeJa}` : `Representative Partner: ${OFFICIAL_CORPORATE_DATA.representativeEn}`}</div>
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '資本金' : 'Capital'}</dt>
                <dd className="sm:col-span-2 text-white font-mono-tech tabular-nums">
                  {lang === 'ja' ? OFFICIAL_CORPORATE_DATA.capital : OFFICIAL_CORPORATE_DATA.capitalEn}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '本店所在地（登記住所）' : 'Registered Address'}</dt>
                <dd className="sm:col-span-2 text-slate-200">
                  {lang === 'ja'
                    ? `〒103-0022 ${OFFICIAL_CORPORATE_DATA.headquartersJa} ${OFFICIAL_CORPORATE_DATA.buildingJa}`
                    : `${OFFICIAL_CORPORATE_DATA.buildingEn}, ${OFFICIAL_CORPORATE_DATA.headquartersEn}`}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '公告の方法' : 'Public Notice Method'}</dt>
                <dd className="sm:col-span-2 text-slate-300">
                  {lang === 'ja' ? OFFICIAL_CORPORATE_DATA.publicNoticeMethodJa : OFFICIAL_CORPORATE_DATA.publicNoticeMethodEn}
                </dd>
              </div>

              <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4">
                <dt className="text-slate-400 font-medium">{lang === 'ja' ? '公式連絡先' : 'Official Contact'}</dt>
                <dd className="sm:col-span-2 text-sky-400 font-mono-tech">
                  {OFFICIAL_CORPORATE_DATA.contactEmail}
                </dd>
              </div>
            </dl>

            <div className="pt-5 mt-2 border-t border-slate-800">
              <button
                onClick={() => setShowCertificateModal(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-sky-400" />
                <span>{lang === 'ja' ? '現在事項全部証明書（登記記録）の記載事項を確認する' : 'View Certified Corporate Registry Record'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Governance & Compliance Policy */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0b1120] border border-slate-800 p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-mono-tech text-sky-400 mb-2">
                CORPORATE GOVERNANCE &amp; OPERATIONS
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-4">
                {lang === 'ja' ? '透明性の高い企業運営と堅実なシステム開発' : 'Transparent Corporate Governance & Reliable Engineering'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {lang === 'ja'
                  ? 'Qua合同会社は、法令遵守（コンプライアンス）と情報開示の透明性を重視しています。登記情報・定款の事業目的をすべて正確に公開し、お取引先企業様およびアプリご利用者様が安心してサービスをご利用いただける体制を整えています。'
                  : 'Qua LLC prioritizes statutory compliance, transparent corporate disclosure, and dependable engineering practices so clients and users can engage with our services with complete confidence.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {lang === 'ja'
                  ? '自社Webアプリケーションの企画・開発・運営から、法人・個人事業主様向けの受託ソフトウェア開発、技術コンサルティングまで、一つひとつのプロジェクトに誠実に向き合います。'
                  : 'From operating our own web applications to delivering custom client software and technical consulting, we approach every project with rigor and accountability.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{lang === 'ja' ? '法務局における法人設立登記および官報公告規定に基づく適法な運営' : 'Legally incorporated in Japan with official gazette public notice compliance'}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{lang === 'ja' ? '自社Webアプリ（Paralmeet・EitangoNihongo）の継続的な開発・保守' : 'Continuous development and maintenance of in-house web applications'}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{lang === 'ja' ? '秘密保持契約（NDA）対応および明確な要件定義に基づく受託開発' : 'NDA-ready custom software development with clear specification management'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Statutory Corporate Purposes (定款記載の事業目的 全7号) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
            <h3 className="text-lg sm:text-xl font-display font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-sky-400" />
              <span>{lang === 'ja' ? '定款および登記簿記載の事業目的（全7号）' : 'Statutory Corporate Purposes (Articles 1–7)'}</span>
            </h3>
            <span className="text-xs text-slate-400">
              {lang === 'ja' ? '現在事項全部証明書「目的」欄より原文記載' : 'Official Articles of Incorporation'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFICIAL_CORPORATE_DATA.purposes.map((p) => (
              <div
                key={p.num}
                className="p-5 rounded-xl bg-[#0b1120] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-tech font-bold text-sky-400">
                      {lang === 'ja' ? `第${p.num}号` : `Clause 0${p.num}`}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {p.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {lang === 'ja' ? p.textJa : p.textEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Official Registry Certificate Modal */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b1120] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'ja' ? '現在事項全部証明書（登記記録）照合済' : 'Certified Corporate Registry Record'}</span>
              </span>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-xl font-display font-bold text-white">
              {lang === 'ja' ? 'Qua合同会社 法人登記記載事項' : 'Registered Corporate Information (Qua LLC)'}
            </h3>

            <div className="p-4 rounded-xl bg-[#070b14] border border-slate-800 font-mono-tech text-xs space-y-2.5 text-slate-200 leading-relaxed">
              <div><span className="text-slate-400">【商号】</span> Qua合同会社</div>
              <div><span className="text-slate-400">【会社法人等番号】</span> 0100-03-051369</div>
              <div><span className="text-slate-400">【本店】</span> 東京都中央区日本橋室町一丁目11番12号 日本橋水野ビル7階</div>
              <div><span className="text-slate-400">【会社成立の年月日】</span> 令和8年5月8日</div>
              <div><span className="text-slate-400">【公告をする方法】</span> 官報に掲載する方法により行う。</div>
              <div><span className="text-slate-400">【資本金の額】</span> 金10万円</div>
              <div><span className="text-slate-400">【業務執行社員・代表社員】</span> 神保 想叶 (Soya Jimbo)</div>
              <div><span className="text-slate-400">【目的】</span> ソフトウェア及びハードウェアの企画・研究・開発・設計・販売・保守・コンサルティング、インターネット等を利用した各種情報提供サービス、不動産コンサルティング、各種勉強会の開催、アウトソーシング事業の受託及び請負、広告代理業、附帯関連事業</div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer"
              >
                {lang === 'ja' ? '閉じる' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
