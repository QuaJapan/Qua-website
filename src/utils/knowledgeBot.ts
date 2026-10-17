// Client-side fallback knowledge bot for static deployments (e.g. GitHub Pages)

export function getClientQAReply(message: string, lang: 'ja' | 'en' = 'ja'): string {
  const q = message.toLowerCase();

  if (
    q.includes('reach today') ||
    q.includes('リーチトゥデイ') ||
    q.includes('主権者') ||
    q.includes('サミット') ||
    q.includes('支部') ||
    q.includes('sovereignty')
  ) {
    if (lang === 'ja') {
      return `ご質問ありがとうございます。『Reach Today』についてご案内いたします。

**Reach Today（主権者教育ムーブメント / コミュニティ）**
- **概要**：探究学習と連動し、若者が政策や民主主義を自ら考え議論する主権者教育プログラムです。
- **公式プラットフォーム**：Qua合同会社が開発する模擬世界MMO『Reanow』をシミュレーション学習環境として連動活用。
- **現在の状況**：現在は東京を実証拠点として構想・カリキュラム開発を推進中。2027年以降に東京でのフラッグシップサミット（日程・規模未定）を計画しています。
- **運営・IP保有**：親会社・運営法人であるQua合同会社が推進しています。`;
    } else {
      return `Thank you for your inquiry about Reach Today.

**Reach Today (Civic Education Movement / Community)**
- **Overview**: An EdTech initiative empowering youth to explore public policy, governance, and civic participation.
- **Platform**: Powered by Reanow simulation environment developed by Qua LLC.
- **Current Status**: Based in Tokyo for pilot testing and curricular validation, with planning underway for a 2027 concept summit in Tokyo (dates and scale TBD).
- **Operated by**: Qua LLC.`;
    }
  }

  if (
    q.includes('reanow') ||
    q.includes('リアナウ') ||
    q.includes('mmo') ||
    q.includes('演説') ||
    q.includes('選挙') ||
    q.includes('シミュレーション') ||
    q.includes('speech') ||
    q.includes('election')
  ) {
    if (lang === 'ja') {
      return `ご質問ありがとうございます。『Reanow（リアナウ）』についてご案内いたします。

**Reanow（デジタル模擬世界・政治シミュレーション MMO-SNS アプリ）**
- **概要**：プレイヤーがデジタル仮想国家を舞台に、演説・選挙・経済政策・外交をシミュレーション体験できる次世代アプリです。現在、事前登録を受付中です。
- **主なシミュレーション機能**：
  1. **仮想演説アリーナ（Virtual Speech Arena）**：政策スピーチを行い、模擬世論支持率の変動を体験。
  2. **暗号検証型・模擬選挙（Simulation Elections）**：透明性の高い投票プロトコルによる模擬大統領選や住民投票。
  3. **マクロ経済・国家都市ビルド（Macro-Economic City Builder）**：税率、予算配分、産業投資でGDPや幸福度を管理。
  4. **地政学シミュレーション（Geopolitics & Diplomacy）**：模擬同盟や通商協定などの外交判断。
- **安心・健全な設計**：現実の選挙や政治活動を直接誘導するものではなく、純粋な学習・娯楽用デジタルシミュレーション環境です。
- **運営・IP保有**：Qua合同会社が開発・権利保有。`;
    } else {
      return `Thank you for your question regarding Reanow.

**Reanow (Simulated World & Geopolitics MMO-SNS)**
- **Concept**: A digital simulation MMO app exploring governance, speech arena, elections, city building, and macro-economics.
- **Status**: Currently accepting pre-registration for pilot cohorts.
- **Developed by**: Qua LLC.`;
    }
  }

  if (
    q.includes('paralmeet') ||
    q.includes('パラミート') ||
    q.includes('eitango') ||
    q.includes('単語') ||
    q.includes('語学') ||
    q.includes('english')
  ) {
    if (lang === 'ja') {
      return `ご質問ありがとうございます。Qua合同会社の自社アプリケーションについてご案内いたします。

1. **EitangoNihongo（英単語日本語）｜革命的英単語・語学単語学習アプリ（主力公開アプリ）**
   - 従来の「一語一訳の丸暗記」を覆す、革命的英単語・語学単語学習アプリケーションです。
   - 生きた文脈例文、類義語とのニュアンス比較、語源（コアイメージ）の解説、忘却曲線に最適化された反復学習（SRS）を統合し、効率的で深い語彙習得を実現します。

2. **Paralmeet（パラミート）｜次世代SNS（Upcoming / Developing）**
   - Qua合同会社にて現在開発を推進している次世代SNSプロジェクトです（Upcoming / Developing）。`;
    } else {
      return `Thank you for asking about Qua LLC's in-house software products:

1. **EitangoNihongo (English Vocabulary Learning)**: Revolutionary language vocabulary acquisition app with contextual nuance, etymological mental models, and spaced repetition.
2. **Paralmeet**: Next-generation social networking platform (Upcoming / Developing).`;
    }
  }

  if (
    q.includes('受託') ||
    q.includes('依頼') ||
    q.includes('開発') ||
    q.includes('相談') ||
    q.includes('見積') ||
    q.includes('投資') ||
    q.includes('提携') ||
    q.includes('contact') ||
    q.includes('rfp')
  ) {
    if (lang === 'ja') {
      return `開発のご相談および事業提携・投資のお問い合わせについてご案内いたします。

Qua合同会社では、自社プロダクト（EitangoNihongo、Reanow、Reach Today）の開発・運営と並行して、法人・自治体・教育機関様向けの協業、ソフトウェア受託開発、および投資・提携相談を承っております。

- **協業・新規事業**：Reach Todayの探究学習導入、Reanowの事業・スポンサー提携
- **受託開発領域**：Webアプリケーション開発、業務管理システム構築、UI/UX設計、生成AI（LLM）組み込み開発
- **主要技術**：React / Next.js / TypeScript / Node.js / Python / クラウドインフラ
- **進め方**：要件定義・企画設計 → UI/UXプロトタイプ確認 → 実装 → 保守運用まで一貫対応（NDA締結可）。

画面上部の「お問い合わせ」ボタン、または公式メール（qua.headquarters@gmail.com）よりお気軽にご連絡ください。`;
    } else {
      return `Qua LLC provides custom web application engineering, system architecture, and partnership collaborations alongside our in-house products. Contact us via qua.headquarters@gmail.com.`;
    }
  }

  if (
    q.includes('量子') ||
    q.includes('qubit') ||
    q.includes('ブロッホ') ||
    q.includes('ui') ||
    q.includes('quantum')
  ) {
    if (lang === 'ja') {
      return `当サイト内の「量子ビット（Qubit）モデル オンラインUI」についてご案内いたします。

本機能は、量子コンピューティングの基本単位である1量子ビットの状態ベクトル $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$ を、ブラウザ上のブロッホ球（Bloch Sphere）モデルで直感的に操作・視覚化できるオンラインUIデモです。

- **角度スライダー操作**：極角（θ）と位相角（φ）を動かして、|0⟩ と |1⟩ の観測確率が変化する様子をリアルタイムに確認できます。
- **量子ゲート操作**：Hゲート（50:50の重ね合わせ）、Xゲート（ビット反転）、Zゲート（位相反転）、Sゲート（+90°位相シフト）、および「観測（Measurement）」をクリックして試すことができます。`;
    } else {
      return `The Online Qubit Model Interactive UI on our corporate site simulates a single-qubit state on the Bloch Sphere with real-time statevector rendering, probability calculation, and quantum gate operations (Hadamard, Pauli-X, Pauli-Z, Phase S, Measurement).`;
    }
  }

  if (
    q.includes('会社') ||
    q.includes('概要') ||
    q.includes('登記') ||
    q.includes('代表') ||
    q.includes('設立') ||
    q.includes('法人番号') ||
    q.includes('corporate')
  ) {
    if (lang === 'ja') {
      return `Qua合同会社（Qua LLC）の公式企業情報は以下の通りです。

- **商号**：Qua合同会社（英文表記：Qua LLC）
- **会社法人等番号**：0100-03-051369（法務局登記済）
- **設立年月日**：令和8年5月8日（2026年5月8日）
- **代表者**：代表社員・業務執行社員 神保 想叶（Soya Jimbo）
- **資本金**：金10万円
- **本店所在地**：〒103-0022 東京都中央区日本橋室町一丁目11番12号 日本橋水野ビル7階
- **主な事業内容**：
  1. グローバル主権者教育ムーブメント『Reach Today』の運営
  2. 模擬世界MMO-SNSアプリ『Reanow』の企画・開発・IP保有
  3. 革命的英単語・語学単語学習アプリ『EitangoNihongo』の提供
  4. 次世代SNS『Paralmeet』（Upcoming / Developing）の開発
  5. ソフトウェア受託開発、ITコンサルティング
- **公式連絡先**：qua.headquarters@gmail.com`;
    } else {
      return `Qua LLC official corporate registry details:
- Name: Qua LLC (Qua合同会社)
- Corporate Number: 0100-03-051369
- Headquarters: Nihonbashi Mizuno Bldg 7F, 1-11-12 Nihonbashi-Muromachi, Chuo-ku, Tokyo, Japan
- Representative: Soya Jimbo (Managing Partner)
- Core Ventures: Reach Today, Reanow, EitangoNihongo, Paralmeet, and Custom Software Development.`;
    }
  }

  if (lang === 'ja') {
    return `ご質問ありがとうございます。Qua合同会社（Qua LLC）公式 Q&A ボットです。

「${message}」についてご案内いたします。
当社は、親会社・バックエンド運営法人として**『Reach Today（世界主権者教育ムーブメント）』**、**『Reanow（模擬世界MMO-SNS）』**、**『EitangoNihongo（革命的英単語アプリ）』**、**『Paralmeet（次世代SNS）』**の自社開発・運営、および**受託ソフトウェア開発**を行うテクノロジー企業です（法人番号：0100-03-051369、代表社員：神保 想叶）。

画面上部のブランド切り替えタブから各公式LPをご覧いただけるほか、具体的なご相談やお見積りは「お問い合わせ」ボタンよりいつでもお気軽にお寄せください。`;
  } else {
    return `Thank you for contacting Qua LLC. We are a Tokyo-based technology and software development holding company managing Reach Today, Reanow, EitangoNihongo, and Paralmeet. Please feel free to reach out to qua.headquarters@gmail.com for inquiries.`;
  }
}
