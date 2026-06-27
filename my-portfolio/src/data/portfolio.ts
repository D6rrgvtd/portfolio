// src/data/portfolio.ts の作成例

// portfolio.ts の正しい書き方例
export const profile = {
  name: "山田 太郎",
  nameEn: "Taro Yamada",
  role: "Frontend Developer",
  motto: "Keep it simple",
};

export const CATEGORY_LABELS: Record<string, string> = {
  all: "すべて",
  frontend: "フロントエンド",
  backend: "バックエンド",
  tool: "ツール",
};

export const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Git", category: "tool" },
];
export const works = [
  {id: 1,
    Title: "MURAWA",

  }
];
