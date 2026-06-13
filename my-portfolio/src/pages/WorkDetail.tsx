import { Navigate, useParams } from "react-router-dom";
import {Works} from "../data/portfolio";
import SafeImg from "../components/SafeIng";
import type { ReactNode } from "react";


export default function WorkDetail(){

    const {id} =useParams
    const Work = WorkDetail.find((w)=> w.id === Number(id))

    if (!Work) return <Navigate to="/" replace />

    return (
        <div className="Wd-page">
            <div className="comntainer">
                <Link to="/#works" className="Wd-back">
                  ←作品一覧に戻る
                </Link>

                <div className="Wd-hero">
                    <div className="wd-hero-thumbnail">
                        <SafeImg
                        src={Work.thumbnail}
                        alt={Work.title}
                        fallback="No Image..."
                        />
                    </div>

                </div>


                <Section title="基本情報">
                    <dl className="wd-meta-grid">
                        <MetaRow label="製作期間" value={Work.period}/>
                    </dl>
                </Section>
            </div>
        </div>
    )
}