import React from 'react';

// 1. profileの型（構造）を定義してエラーを解消
interface ProfileType {
    avatar?: string;
    name?: string;
    nameEn?: string;
    role?: string;
    motto?: string;
}

interface HeroProps {
    profile: ProfileType;
}

// 2. SafeImageが見つからない場合のフォールバック（代わりの画像表示）を作成してエラーを解消
const SafeImage = ({ src, alt, fallback }: { src?: string; alt?: string; fallback: string }) => {
    if (!src) {
        return <div className="avatar-fallback" style={{ width: 150, height: 150, borderRadius: '50%', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#fff', margin: '0 auto 20px' }}>{fallback}</div>;
    }
    return <img src={src} alt={alt} className="avatar-img" style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', display: 'block' }} />;
};

export default function Hero({ profile }: HeroProps) {
    // profileが渡されなかった場合のフォールバック（エラー防止）
    if (!profile) return null;

    return (
        <section className="hero section" id="hero">
            <div className="container">

                {/* アバター画像表示 */}
                <SafeImage
                    src={profile.avatar}
                    alt={profile.name}
                    fallback={profile.name ? profile.name.charAt(0) : "T"}
                />
                
                <p className="hero-eyebrow">Portfolio</p>

                {/* 名前表示 */}
                <h1 className="hero-name">
                    <span className="gradient">{profile.name}</span>
                    <span className="hero-name-en">{profile.nameEn}</span>
                </h1>

                <p className="hero-role">{profile.role}</p>

                {/* モットー(座右の銘)表示 */}
                {profile.motto && (
                    <blockquote className="hero-motto">
                        <span className="hero-motto-mark">"</span>
                        {profile.motto}
                        <span className="hero-motto-mark">"</span>
                    </blockquote>
                )}

                <div className="hero-actions">
                    <a href="#works" className="btn btn-primary">制作物を見る</a>
                    <a href="#contact" className="btn btn-outline">連絡する</a>
                </div>

            </div>
            <div className="hero-scroll">Scroll</div>
        </section>
    );
}
