'use client';
import { navlinks } from '@/data/navlinks';
import { Box } from 'lucide-react';
import React, { useState } from 'react'
import { LiaCloudSolid } from 'react-icons/lia';

type Props = {
    openNav: () => void
}
const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
    return (
        <div className={`${navBg ? "bg-blue-950 shadow-md" : "bg-white"} transition-all duration-200 h-[10vh] z-[1001] fixed w-full flex justify-between border-b border-gray-200`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* left */}
                <div className="space-x-5 p-3 flex items-center">
                    <Box strokeWidth={3} />
                    <p className="font-bold text-slate-950 text-xl">Personal Portfolio</p>
                </div>
                {/* right */}
                <div className="space-x-5 p-3 flex items-center ">
                    {navlinks.map((item) => {
                        return (
                            <p
                                key={item.id}
                                className="navButtonStyleMap cursor-pointer">
                                {item.lable}
                            </p>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Nav