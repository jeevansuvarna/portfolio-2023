'use client'

import { VscGithubAlt } from "react-icons/vsc";
import { LuLinkedin, LuInstagram } from "react-icons/lu";


export default function Footer() {
    return (
        <div className="hidden mdl:flex gap-5 xl:hidden items-center justify-center w-full py-6 ">
            <a href="">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <VscGithubAlt />
                </span>
            </a>
            <a href="">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <LuLinkedin />
                </span>
            </a>
            <a href="">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <LuInstagram />
                </span>
            </a>
            <a href="">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <LuInstagram />
                </span>
            </a>
        </div>
    )
}