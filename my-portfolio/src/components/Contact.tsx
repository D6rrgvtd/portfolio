import { ReactNode } from 'react';
import { Profile } from '../data/portfolio';
import {FaEnvelope, FaGithub } from "react-icons/fa"; 
import { FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6'; 



export default function Contact({ profile }: ContactProps) {
    const links: LinkItem[] = [
        { label: 'Github', icon: <FaGithub />, href: profile.links.github },
        { label: 'X (旧Twitter)', icon: <FaXTwitter />, href: profile.links.twitter },
        { label: 'Email', icon: <FaEnvelope />, href: profile.links.email },
    ];

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="contact-inner">
                    <h2 className="section-title">
                        <span>Contact</span>
                    </h2>
                    <p className="section-sub">連絡先</p>

                    <p className="contact-desc">
                        連絡先はこちらになります。
                    </p>

                    <div className="contact-links">
                        {links
                            .filter((link): link is LinkItem & { href: string } => link.href !== null)
                            .map((link) => (
                                <a
                                    key={link.label} 
                                    href={link.href}
                                    className="contact-link-item"
                                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel="noreferrer"
                                >
                                    {link.icon}
                                    {link.label}
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
