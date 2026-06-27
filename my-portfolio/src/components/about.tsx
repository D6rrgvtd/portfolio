import React from 'react';
import '../styles/about.css';

export const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        <h3>About Me</h3>
        
        <p className="about-bio">
          ここに自己紹介の文章が入ります。{"\n"}
          Webフロントエンド開発を中心に、ReactやTypeScriptを学んでいます。{"\n"}
          ものづくりが好きで、使いやすさにこだわったUI設計を意識しています。
        </p>

        <div className="profile-school">
          <div className="profile-school-row">
            <span className="profile-label">学校名</span>
            <span className="profile-value">京都デザイン＆テクノロジー専門学校 ゲームワールド</span>
          </div>

          <div className="profile-school-row">
            <span className="profile-label">期間</span>
            <span className="profile-value">2024年4月 〜 現在在学中</span>
          </div>

          <div className="profile-school-row">
            <span className="profile-label">専攻</span>
            <span className="profile-value">ゲームプログラマー専攻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
