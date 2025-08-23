import { navlinks } from '@/data/navlinks';
import React from 'react'
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}
const MobileNav = ({ showNav, closeNav }: Props) => {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <div>
            {/* overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
            {/* navlinks */}
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                {/* close button */}
                <CgClose onClick={closeNav} className='absolute top-[1.7rem] right-[1.4rem] sw:w-8 sm:h-8 w-6 h-6' />


                {navlinks.map((item) => {
                    return (
                        <a 
                            key={item.id}
                            href={item.url}
                            onClick={closeNav}
                            className="navButtonStyleMap px-5 !text-white cursor-pointer">
                            {item.lable}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileNav