import React from 'react'
import { Button } from '../ui/button'
import { Instagram, Youtube } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hobbies = () => {
    const image = "/images/hobbies.png"
    return (
        <div className="w-full h-min-screen lg:p-30 p-5 pt-30 bg-[#231a10] text-white pl-10 pr-10">
            {/* pic responsive */}
            <div id="hobbies" className="relative w-full rounded-lg overflow-hidden">
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 rounded-lg"></div>
                {/* image */}
                <img 
                    src={image} 
                    alt="" 
                    // className="h-full w-full object-cover rounded-lg" 
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                />
                {/* text inside image */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-5 sm:px-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">My Hobbies</h1>
                    <p className="max-w-lg leading-relaxed text-sm sm:text-base md:text-lg">
                        I'm a passionate <span className="font-semibold">digital artist, and video editor</span> with experience
                        in <span className="font-semibold">Photoshop</span>, <span className="font-semibold">Canva</span>,
                        and <span className="font-semibold">Premier Pro</span>.
                        Creating visuals and editing videos is something I truly enjoy outside of coding 😊.
                    </p>
                    {/* buttons */}
                    <div className="flex space-x-3">
                        <a 
                            href="https://www.instagram.com/itzhippy.ok/"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button type="button" className="bg-[#fac638] mt-3 p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-[#fac638] hover:shadow-xl hover:translate-y-[-3px]">
                                <Instagram />
                                <span className="">Digital Arts</span>
                            </Button>
                        </a>
                        <a 
                            href="https://www.youtube.com/@itzhippy"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button type="button" className="bg-[#ff0033] mt-3 p-5 text-white shadow-lg hover:cursor-pointer hover:bg-[#ff0033] hover:shadow-xl hover:translate-y-[-3px]">
                                <Youtube />
                                <span className="">Youtube</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="text-[#8B745F] mt-10 border-t border-[#8B745F]/30 pt-6 pb-4 text-sm flex flex-col justify-center items-center">
                <p className="mb-2">
                    © {new Date().getFullYear()} Neel Bhattacharya. All rights reserved.
                </p>
                <div className="flex flex-col space-x-6 mt-3">
                    <p className="">Hope you learnt something about me 😊</p>
                </div>
                <div className="flex mt-8 space-x-5 items-center justify-center">
                    <a 
                        href="https://github.com/Neel-max-cpu"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-7 h-7 hover:cursor-pointer" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/neelbhatta/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-7 h-7 hover:cursor-pointer" />
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Hobbies