import { useState } from "react";
// 💡 `skills` データと、カテゴリの日本語ラベルを定義したオブジェクトをインポート
import { skills, CATEGORY_LABELS } from "../Data/portfolio"; 
// 💡 下部で使用している個別スキル表示用のコンポーネントをインポート
import SkillCard from "./SkillCard";

// 👇 ここに型定義を追加します
interface SkillItem {
  name: string;
  category: string;
  icon?: string;  // 必要に応じてオプショナルで追加
  level?: string; // 必要に応じてオプショナルで追加
}

// 👇 CATEGORY_LABELS のキーが文字列であることを明示するための型キャスト用
const labels = CATEGORY_LABELS as Record<string, string>;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // 👇 skills を「SkillItemの配列」としてキャスト（明示）します
  const skillsData = skills as SkillItem[];

  // 👇 skills だった部分を skillsData に書き換えます
  const categories = ["all", ...new Set(skillsData.map((s) => s.category))];
  const filtered =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span>Skills</span>
        </h2>
        <p className="section-sub">技術スタック</p>
        <div className="skills-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {/* 👇 型安全にラベルを取得できるように修正 */}
              {labels[cat] ?? cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
