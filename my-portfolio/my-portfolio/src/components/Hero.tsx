import {Profile} from "../data/portfolio";

export default function Hero()
{
    return(
      <section className="hero section" id="hero">
        <div className="conttainer">

            <div className="avatar-placeholder">T</div>
            <p className="hero-eyebrow">Portfolio</p>

            <h1 className="hero-name">
                <span className="gradient">{Profile.name}</span>
                <span className="hero-name-en">{Profile.nameEn}</span>
            </h1>

            <p className="hero-role">{Profile.role}</p>

            {Profile.motto &&(
                <blockquote className="hero-motto">
                    <span className="hero-motto-mark"></span>
                    {Profile.motto}
                    <span className="hero-motto-mark"></span>
                </blockquote>
            )}
            <div className="hero-actions">
                
            </div>
        </div>
      </section>



    )
}