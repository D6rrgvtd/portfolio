// プロフィール情報定義.
// ここに乗っている情報はすべてダミーです。

export interface Profile{
    name: string // 名前漢字表記.
    nameEn: string // 名前ローマ字表記.
    role: string // ロール.
    school: string // 学校名.
    department: string // 専攻名.
    graduationYear: string // 卒業年度.
    bio: string // 自己紹介文.
    motto: string // モットー、座右の銘.
    avatar: string // 顔写真の画像パス.
    links:{
        github:string // githubのURL.
        twitter: string | null // X(旧Twitter).
        email: string // メールアドレス.
    }
}

// スキル.
export interface Skill {
    name: string // 名前.
    version: string | null // バージョン情報(null許容).
    level: number // スキルレベル.
    category: string // カテゴリ.
    capabilities : string[] // 出来ること.
    note: string | null // 実装経験.
}

// 詳細要素情報.
export interface Venue{
    name: string // 名前.
    date: string // 日時.
}

// 作品カード.
export interface Work{
    id: number // 連番.
    title: string // タイトル.
    genre: string // ジャンル.
    category: string // カテゴリ.
    thumbnail: string // サムネイル.
    screenshots: string[] // スクショ.
    description : string // 作品の概要説明.
    tags: string[] // タグ.
    platform: string[] // プラットフォーム.
    period: string // 期間.
    team: string // 制作チーム情報.
    role: string // 実装担当箇所.
    github: string // Github のURL.
    link: string | null // ゲーム公開リンク.
    venues: Venue[] // 出展・公開先.
    techPoints: string | null // 技術ポイント.
    designNotes: string | null // 設計上の工夫.
    implementationTheme: string | null // 実装解説テーマ.
    troubleshooting: string | null // 詰まった問題と解決策.
    performance: string | null // パフォーマンス改善の工夫.
}

// ゲームジャム.
export interface GameJam {
    name: string // 名前.
    date: string // 日時.
    theme: string // 情報.
    description: string // 作品詳細.
    platform: string[] // プラットフォーム.
    role: string // 担当箇所.
    team: string // チーム情報.
    result: string | null // 結果.
    url: string | null // URL.
    reflection: string // 学び・ふりかえり.
}

export type CertStatus = "取得済み" | "受験予定" | "取得予定" | "学習中";

// 資格情報.
export interface Certification{
    name: string // 資格名.
    date: string // 日時.
    category: string // カテゴリ.
    score: string | null // スコア.
    status: CertStatus // ステータス.
}

// 年表.
export interface TimelineItem {
    year: string // 年.
    event: string // イベント.
}

export const profile: Profile = {
    name: "内田涼介",
    nameEn: "utida ryousuke",
    role: "",
    school: "京都デザイン&テクノロジー専門学校",
    department: "ゲームプログラマー専攻",
    graduationYear: "2027年3月卒業見込み",
    bio: "自己PR私の強みは、物事を最後まで継続してやり遂げる力です。専門学校では、Unityを用いたゲーム制作に取り組み、5ヶ月間のチーム制作において魔法処理や時間管理などの実装を担当しました。制作期間中は、動作不具合の修正や調整作業にも継続して取り組み、最後までプロジェクトを完成させることができました。また、アルバイトでは約3年間勤務を続ける中で、任された業務を責任を持って遂行し、周囲のサポートにも積極的に取り組んできました。これらの経験で培った継続力と責任感を活かし、入社後も技術習得と業務に真摯に取り組み、ゲーム開発を通じて貴社に貢献していきたいと考えています。",
    motto: "死んでも生きる",
    avatar: "/images/profile.jpg",
    links: {
        github: "https://github.com/D6rrgvtd",
        twitter: "",
        email: "ryousuke2005uchi@gmail.com"
    }
}

export const skills: Skill[] = [
  {
    name: 'Unity',
    version: '',
    level: 50,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration'],
    note: '基本的にすべての機能を実装済',
  },
  {
    name: 'Unreal Engine',
    version: '5',
    level: 30,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration', 'バーチャルスタジオ構築'],
    note: 'プロシージャル迷宮生成・A*経路探索を実装済み',
  },
  {
    name: 'C#',
    version: '',
    level: 50,            // 0〜100（後述）
    category: 'language',    // フィルター用カテゴリ
    capabilities: [],
    note: null,
  },
]

// 作品カードの内容.
export const works: Work[] = [
  {
    id: 1,                              // 連番（詳細ページのURLに使う）
    title: 'トレジャーマジック',
    genre: '3Dアクション',
    category: 'game',
    thumbnail: "/images/games/tech_thumb.png",                    // '/images/work1.png'
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '作品の概要説明...',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年5月〜2025年10月（5ヶ月）',
    team: 'チーム製作（6人）',
    role: 'プログラマー ',
    github: '',
    link: '',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 卒業制作展示会', date: '2026年2月' },
    ],
    techPoints: 'こだわった技術ポイント...',
    designNotes: '設計上の工夫...',
    implementationTheme: '実装解説テーマ（1文）',
    troubleshooting: '詰まった問題と解決策...',
    performance: 'バグのないように',
  },
 {
    id: 2,                              // 連番（詳細ページのURLに使う）
    title: 'MURWA',
    genre: '3Dアクション',
    category: 'game',
    thumbnail: "",                    // '/images/work1.png'
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '敵を倒しつつ次のマップに行き、ゴールを目指すゲームです。',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年10月〜2026年2月（4ヶ月）',
    team: '個人制作',
    role: 'プログラマー / レベルデザイナー（全工程）',
    github: 'https://github.com/D6rrgvtd/MURWA',
    link: '',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 合同ゲーム製作', date: '2026年2月' },
    ],
    techPoints: '飛ぶたびにマップが変わる',
    designNotes: 'ランダム生成',
    implementationTheme: 'ローグライク要素を入れたかった',
    troubleshooting: 'ほかの要素',
    performance: null,
  },
]




export const certifications: Certification[] = [
  {
    name: 'MOS Excel',
    date: '2025年2月合格',
    category: '民間資格',
    score: '957点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
]

export const timeline: TimelineItem[] = [
  {
    year: "2024年3月",
    event: "京都府洛陽総合高等学校 卒業",
  },
  {
    year: "2024年4月",
    event: "京都デザイン&テクノロジー専門学校 入学",
  },
  {
    year: "2024年7月",
    event: "初めてUnityで2Dアクションゲームを個人制作",
  },
  {
    year: "2025年10月",
    event: "Unityを用いた3Dアクションゲームを完成",
  },
  {
    year: "2026年2月",
    event: "個人製作3Dアクションゲームを製作",
  },
  {
    year: "2027年3月",
    event: "京都デザイン&テクノロジー専門学校 卒業見込み",
  },
]