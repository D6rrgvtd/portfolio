import { Profile } from "../data/portfolio"

export default function Footer()
{
    const year =new Date().getFullYear()

    return(
        <footer className="footer">
            <div className="container">
                <p>@ {year} {Profile.nameEn}</p>
            </div>
        </footer>
    )
}