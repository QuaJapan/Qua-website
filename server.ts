import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function buildSmartFallbackReply(message: string): string {
  const q = message.toLowerCase();

  if (q.includes("reach today") || q.includes("リーチトゥデイ") || q.includes("主権者") || q.includes("サミット") || q.includes("支部")) {
    return `ご質問ありがとうございます。『Reach Today』についてご案内いたします。

**Reach Today（グローバル主権者教育ムーブメント / コミュニティ）**
- **位置づけ**：世界の若者が集まる対面国際サミット、世界18拠点支部、および学校探究学習を推進するグローバルコミュニティハブです。
- **公式プラットフォーム**：Qua合同会社が開発する模擬世界MMO-SNS『Reanow』を公式シミュレーション基盤として採用。サミットや学校で議論した政策をReanow内で実際にシミュレート・検証できます。
- **対象**：若者・学生、高校・大学・教育機関、自治体、企業スポンサー。
- **主な活動**：年次世界青年サミット（2026年東京旗艦大会予定）、各都市支部での月次ポリシーディベート、主権者教育カリキュラムの提供。
- **運営・IP保有**：親会社・運営法人であるQua合同会社が推進しています。`;
  }

  if (q.includes("reanow") || q.includes("リアナウ") || q.includes("mmo") || q.includes("演説") || q.includes("選挙") || q.includes("シミュレーション")) {
    return `ご質問ありがとうございます。『Reanow（リアナウ）』についてご案内いたします。

**Reanow（模擬世界・政治シミュレーション MMO-SNS アプリ）**
- **概要**：プレイヤーがリアルタイムに同じ世界を共有し、自らの理想の国家を建設・統治する次世代MMOシミュレーションアプリです。現在、事前登録を受付中です。
- **4大統治システム**：
  1. **リアルタイム仮想演説（Live Speech Arena）**：肉声やテキストで全アバターへ政策スピーチを行い、リアルタイムに世論支持率が変動。
  2. **暗号検証型・国家総選挙（Cryptographic Elections）**：改ざん不能な投票プロトコルで大統領選や住民投票を施行。
  3. **マクロ経済・国家都市建設（Macro-Economic City Builder）**：税率、産業投資、エネルギー政策をスライダーで配分しGDPや幸福度を運営。
  4. **地政学シミュレーション＆外交・防衛（Geopolitics & Defense）**：他国との通商協定、同盟締結、国境防衛戦まで対応。
- **所属勢力（3大ファクション）**：テクノ・リパブリック、ソル・コンフェデラシー、ネオ・イージス帝国連合。
- **連携**：Reach Today世界青年サミットの公式シミュレーション基盤として連動。Qua合同会社がIPおよび基盤開発を保有しています。`;
  }

  if (q.includes("paralmeet") || q.includes("パラミート") || q.includes("eitango") || q.includes("単語") || q.includes("語学")) {
    return `ご質問ありがとうございます。Qua合同会社の自社アプリケーションについてご案内いたします。

1. **EitangoNihongo（英単語日本語）｜革命的英単語・語学単語学習アプリ（主力公開アプリ）**
   - 従来の「一語一訳の丸暗記」を覆す、革命的英単語・語学単語学習アプリケーションです。
   - 生きた文脈例文、類義語との微妙なニュアンス比較、語源（コアイメージ）の解説、そして忘却曲線に最適化された反復学習（SRS）を統合し、効率的で深い語彙習得を実現します。当サイト上でインタラクティブな学習カード体験もお試しいただけます。

2. **Paralmeet（パラミート）｜次世代SNS（Upcoming / Developing）**
   - Qua合同会社にて現在開発を推進している次世代SNSプロジェクトです（Upcoming / Developing）。`;
  }

  if (q.includes("受託") || q.includes("依頼") || q.includes("開発") || q.includes("相談") || q.includes("見積") || q.includes("投資") || q.includes("提携")) {
    return `開発のご相談および事業提携・投資のお問い合わせについてご案内いたします。

Qua合同会社では、自社プロダクト（EitangoNihongo、Reanow、Reach Today）の開発・運営と並行して、法人・自治体・教育機関様向けの協業、ソフトウェア受託開発、および投資・提携相談を承っております。

- **協業・新規事業**：Reach Todayの学校・自治体導入、Reanowの事業・スポンサー提携
- **受託開発領域**：Webアプリケーション開発、業務管理システム構築、UI/UX画面設計、生成AI（LLM）組み込み開発
- **主要技術**：React / Next.js / TypeScript / Node.js / Python / クラウドインフラ
- **進め方**：要件定義・企画設計 → UI/UXプロトタイプ確認 → 実装 → 保守運用まで一貫対応（NDA締結可）。

画面上部の「お問い合わせ」ボタン、または公式メール（qua.headquarters@gmail.com）よりお気軽にご連絡ください。`;
  }

  if (q.includes("量子") || q.includes("qubit") || q.includes("ブロッホ") || q.includes("ui")) {
    return `当サイト内の「量子ビット（Qubit）モデル オンラインUI」についてご案内いたします。

本機能は、量子コンピューティングの基本単位である1量子ビットの状態ベクトル $|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$ を、ブラウザ上のブロッホ球（Bloch Sphere）モデルで直感的に操作・視覚化できるオンラインUIデモです。

- **角度スライダー操作**：極角（θ）と位相角（φ）を動かして、|0⟩ と |1⟩ の観測確率が変化する様子をリアルタイムに確認できます。
- **量子ゲート操作**：Hゲート（50:50の重ね合わせ）、Xゲート（ビット反転）、Zゲート（位相反転）、Sゲート（+90°位相シフト）、および「観測（Measurement）」をクリックして試すことができます。`;
  }

  if (q.includes("会社") || q.includes("概要") || q.includes("登記") || q.includes("代表") || q.includes("設立") || q.includes("法人番号")) {
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
  }

  return `ご質問ありがとうございます。Qua合同会社（Qua LLC）公式 Q&A ボットです。

「${message}」についてご案内いたします。
当社は、親会社・バックエンド運営法人として**『Reach Today（世界主権者教育ムーブメント）』**、**『Reanow（模擬世界MMO-SNS）』**、**『EitangoNihongo（革命的英単語アプリ）』**、**『Paralmeet（次世代SNS）』**の自社開発・運営、および**受託ソフトウェア開発**を行うテクノロジー企業です（法人番号：0100-03-051369、代表社員：神保 想叶）。

画面上部のブランド切り替えタブから各公式LPをご覧いただけるほか、具体的なご相談やお見積りは「お問い合わせ」ボタンよりいつでもお気軽にお寄せください。`;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "online",
      enterprise: "Qua合同会社 (Qua LLC)",
      networkBrands: ["Qua LLC Corporate", "Reach Today", "Reanow"],
      timestamp: new Date().toISOString(),
    });
  });

  // Official Q&A AI Bot Endpoint
  app.post("/api/copilot/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const ai = getGeminiClient();

      if (!ai) {
        return res.json({
          reply: buildSmartFallbackReply(message),
          modelUsed: "Qua Q&A Bot",
        });
      }

      const systemInstruction = `あなたは「Qua合同会社（英文表記：Qua LLC）」の公式コーポレートサイトに設置された自動応答Q&A AIボットです。
誠実・丁寧・簡潔で信頼感のあるビジネス日本語（英語で質問された場合は丁寧な英語）で回答してください。

【Qua合同会社および運営ブランドの基本情報】
1. **親会社・運営法人：Qua合同会社 (Qua LLC)**
   - 代表社員・業務執行社員：神保 想叶 (Soya Jimbo)
   - 会社法人等番号：0100-03-051369
   - 本店所在地：東京都中央区日本橋室町一丁目11番12号 日本橋水野ビル7階
   - 資本金：金10万円 / 設立：2026年5月8日
   - 公式連絡先：qua.headquarters@gmail.com

2. **重点新規事業 1：Reach Today（グローバル主権者教育ムーブメント / コミュニティ）**
   - 若者・学生、教育機関、自治体、企業スポンサーを結ぶ国際主権者教育のハブ。
   - 世界18支部、32,400人以上の若手リーダーが参加。
   - 世界対面サミット（2026年東京旗艦大会予定）や地域支部でのポリシーディベートを主催。
   - 公式シミュレーション基盤として『Reanow』を採用。

3. **重点新規事業 2：Reanow（リアナウ / 模擬世界MMO-SNSアプリ）**
   - リアルタイム仮想演説、暗号検証型選挙、マクロ経済都市建設、地政学・防衛外交を統合したMMO-SNS。
   - 事前登録受付中（18万人突破）。3大ファクション（テクノ・リパブリック、ソル・コンフェデラシー、ネオ・イージス）。
   - Qua合同会社が技術開発およびIPを保有。

4. **自社公開アプリ：EitangoNihongo（英単語日本語）**
   - 生きた文脈例文、類義語ニュアンス比較、語源ネットワーク、反復学習（SRS）を統合した「革命的英単語・語学単語学習アプリ」（主力公開中）。

5. **開発中プロジェクト：Paralmeet（パラミート）**
   - 次世代SNS（Upcoming / Developing）。

6. **事業案内：法人・事業者向けWeb受託開発 & サイト内機能**
   - Webシステム開発、UI/UX設計、AI組み込み開発。
   - サイト内の「量子ビット(Qubit)モデル オンラインUI」はブロッホ球の1量子ビット操作をブラウザ上で視覚化するデモ。`;

      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: message,
          config: {
            systemInstruction,
          },
        });

        return res.json({
          reply: response.text || buildSmartFallbackReply(message),
          modelUsed: "Qua Q&A Bot",
        });
      } catch (err: any) {
        return res.json({
          reply: buildSmartFallbackReply(message),
          modelUsed: "Qua Q&A Bot",
        });
      }
    } catch (error: any) {
      console.error("Error in /api/copilot/chat:", error);
      res.status(500).json({ error: error.message || "Failed to process Q&A request" });
    }
  });

  // Inquiry Submission Endpoint
  app.post("/api/inquiry", (req, res) => {
    const { name, email, company, appName, message } = req.body;
    console.log("New Corporate Inquiry Received:", { name, email, company, appName, message });
    res.json({
      success: true,
      ticketId: `QUA-${Date.now().toString(36).toUpperCase()}`,
      message: "お問い合わせを受け付けました。",
    });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Qua LLC Server] Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
