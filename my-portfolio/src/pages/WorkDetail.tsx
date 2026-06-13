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
            </div>
        </div>
    )
}