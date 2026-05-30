export interface Profile{
    name: string//名前漢字表記.
    nameEn: string//名前英語表記.
    role: string//ロール.
    school: string//学校名.
    department: string//専攻名.
    graduationYear: String//卒業年度.
    bio: string//自己紹介文.
    motto: string//モットー、座右の銘.
    avatar: string//顔写真の画像パス.
    links: {
        github: string//github.
        twitter: string | null//x.
        email: string//メールアドレス.
    }
} 

export interface Skill{
    name:string//名前.
    versiion: string | null//バージョン情報.
    level: number//スキルレベル.
    category: string//カテゴリ.
    capabilities: string//できること.
    note: string | null//実装経験.
}

export interface Venue{
    name:string//名前.
    data:string//日時.
}

export interface Work{
    id : number //連番.
    title: string//　タイトル.
    genre: String //ジャンル.
    cateory: string//カテゴリ.
    thumbnail: String//サムネイル.
    screenshots: string[]//スクショ
    description:string //作品の概要説明.
    tags: string[] //タグ.
    platform: string// 期間.
    team: string// 製作チーム情報.
    role: string//実装担当箇所.
    github: string//GithubのURl.
    like : String | null//ゲーム公開リンク
    venues: Venue[] //出展・公開先.
    techPoints: string | null//技術ポイント.
    designNots: string | null//設計上の工夫.
    implementationTheme: string | null//詰まった問題と解決策.
    troublesootting: string | null// 詰まった問題と解決策.
    preformance : string | null // パフォーマンス改善の工夫.
    
}
//ゲームジャム
export interface Gamejam
{
     name:string//名前.
    data : String //日時.
    theme : string//情報.
    description : string//作品詳細.
    platform : string//プラットフォーム.
    role : string//担当箇所.
    team: string//チーム情報.
    result : string//結果.
    url : string//URL.
    reflection : string//学び,振り返り.

}

export type　CestStatus = "取得済み" |  "受験予定" | "取得予定"  | "学習中"

export interface Certification{
    name:string//名前.
    data : String //日時.
    category : string//カテゴリー
    score : string | null //スコア
    status : CestStatus //取得状況
}



export interface TimelineItem {
    year : string//年.
    event:string //イベント.
}

export const Profile: Profile = {
    name: "",
    nameEn: "",
    role: "",
    school: "",
    department: "",
    graduationYear: "",
    bio: "",
    motto: "",
    avatar: "",
    links: {
        github: "",
        twitter: null,
        email: ""
    }
}

export const Skills: Skill = {
    name: "",
    versiion: null,
    level: 0,
    category: "",
    capabilities: "",
    note: null
}
 
export const Works: Work[] = [
    {
        id: 0,
        title: "",
        genre: "",
        cateory: "",
        thumbnail: "",
        screenshots: [],
        description: "",
        tags: [],
        platform: "",
        team: "",
        role: "",
        github: "",
        like: null,
        venues: [],
        techPoints: null,
        designNots: null,
        implementationTheme: null,
        troublesootting: null,
        preformance: null
    }
]

export const Gamejams: Gamejam[] = [
    {
        name: "",
        data: "",
        theme: "",
        description: "",
        platform: "",
        role: "",
        team: "",
        result: "",
        url: "",
        reflection: ""
    }
]

export const Certifications: Certification[] = [
    {
        name: "",
        data: "",
        category: "",
        score: null,
        status: "取得済み"
    }
]

export const Timeline: TimelineItem[] = [
    {
        year: "",
        event: ""
    }
]

