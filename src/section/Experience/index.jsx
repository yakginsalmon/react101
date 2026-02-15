import {  faGit, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FormattedDate from "../../components/FomattedDate";
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";
import picExp from '../../assets/Expic1.png'
import picExp2 from '../../assets/Expic2.png'

import { useState } from "react";
const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    return (
        <div className="">
            <div className="text-primaryAccent font-medium">Experience</div>
           
            <div className={`grid grid-cols-[25%_75%]  rounded px-2 py-6 transition-all ${isMouseEnter['exp2'] ? "bg-gray-200" : ""}`}
                onMouseEnter={() => setIsMouseEnter({ 'exp2': true })}
                onMouseLeave={() => setIsMouseEnter({ 'exp2': false })}
            >
                <div>
                     <span className={`text-sm ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>
                        2024-202
                    </span>
                    <div>
                        <img src={picExp2} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>Fullstack</div>
                    <div className="flex gap-4 text-xl">
                        <a href="https://github.com/suriyapi/react101" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.youtube.com/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`rounded-md bg-black text-white px-4 py-1 ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>React</div>
                        <div className={`rounded-md bg-black text-white px-4 py-1 ${isMouseEnter['exp2'] ? "text-primaryAccent" : ""}`}>Next</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;