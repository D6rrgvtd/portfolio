import { Profile, Timeline } from "../data/portfolio";

export default function About(){
    return(
        <section className="section" id="about">
            <div className="container">
                <h2 className="section-title"><span>about</span></h2>
                <p className="section-sub">自己紹介</p>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Profile</h3>
                        7<p className="about-bio">
                            {Profile.bio}
                        </p>

                        <dl className="profile-school">
                            <div className="profile-schppl-row">
                                <dt>学校</dt>
                                <dd>{Profile.school}</dd>
                            </div>
                            <div className="profile-schppl-row">
                                <dt>学科</dt>
                                <dd>{Profile.department}</dd>
                            </div>
                            <div className="profile-schppl-row">
                                <dt>卒業</dt>
                                <dd className="profile-graduation">{Profile.graduationYear}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="about-card">
                        <h3>Timeline</h3>
                        <ul className="timeline">
                            {timeline.map((item,index)=>(
                                <li key={index}></li>
                             <p className="timeline-year">{item.year}</p>
                             <p className="timeliine-event">{item.event</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}