// SkillCard.tsx の簡易実装例
interface Skill {
  name: string;
  category: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{skill.name}</h3>
    </div>
  );
}
