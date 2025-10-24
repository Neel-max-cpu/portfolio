import React, { JSX, useState } from 'react'
import { Button } from '../ui/button';
import { CodeXml, Database, FileText, GitBranch, Github, Rocket, Server } from 'lucide-react';
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { projects, skills } from '@/data/dataMaps';
import CustomizedTimeline from '../TimeLine/CustomizedTimeline';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import toast from 'react-hot-toast';
import { totalmem } from 'os';

const Hero = () => {
    const image = "/images/p1.jpg";

    const iconMap: Record<number, JSX.Element> = {
        1: <CodeXml className="w-6 h-6 text-blue-600" />,
        2: <Server className="w-6 h-6 text-green-600" />,
        3: <Database className="w-6 h-6 text-purple-600" />,
        4: <GitBranch className="w-6 h-6 text-orange-600" />
    };

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;
        setLoading(true);

        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { Accept: "application/json" },
            })
            if (response.ok) {
                toast.success("Thanks For contacting, will get back to you as soon as I can 😊");
                form.reset();
            }
            else {
                toast.error("Oops! There was a problem please try again 😥");
            }
        }
        catch (error: any) {
            toast.error("Network error, please try again 😥");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-full h-min-screen lg:p-30 p-5 pt-40 bg-[#E5E7EB] pl-10 pr-10">
            {/* main section divided into 2 parts flex - about */}
            <div id="about" className="flex flex-col lg:flex-row w-full space-y-5 lg:space-x-5">
                {/* left part */}
                <div className="w-full lg:w-3/5 lg:p-4">
                    {/* overlay */}
                    <h1 className="font-bold text-4xl mb-4">Hi, I'm Neel Bhattachaya</h1>
                    <p className="text-justify">
                        Hi, I'm a software developer who loves building things that are both useful
                        and enjoyable to use. I work across the full stack with React, Next.js, Angular,
                        Java Spring Boot, and Node.js, and I'm always excited about bringing ideas to life.
                        If you've got something cool in mind, let's create it together!
                    </p>
                    {/* button */}
                    <div className="mt-10 flex flex-wrap space-x-4 space-y-4">
                        <a
                            href="https://github.com/Neel-max-cpu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="button" className="bg-[#fac638] p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-[#fac638] hover:shadow-xl hover:translate-y-[-3px]">
                                <Github />
                                <span className="">View Projects</span>
                            </Button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/neelbhatta/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="button" className="bg-[#0a66c2] p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-[#0a66c2] hover:shadow-xl hover:translate-y-[-3px]">
                                <FaLinkedinIn className="text-white" />
                                <span className="text-white">LinkedIn</span>
                            </Button>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1AUS6aaGxChzT9bh0554-5oJISYE9-KiC/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="button" className="bg-white border-2 border-blue-600 p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-white hover:shadow-xl hover:translate-y-[-3px]">
                                <FileText  className="" />                                
                                <span className="text-blue-500">Resume</span>
                            </Button>
                        </a>
                    </div>

                </div>
                {/* right part */}
                <div className="w-full lg:flex-1 p-4 flex items-start justify-center">
                    <div className="rounded bg-white p-3 shadow-lg">
                        <img src={image} alt="" className="w-64 rounded" />
                    </div>
                </div>
            </div>

            {/* Featured Projects - projects */}
            <div id="projects" className="mt-10 w-full">
                <h1 className="text-2xl font-bold mb-5">Featured Projects</h1>
                {/* map the top 3 projects */}
                <div className="grid grid-col-1 gap-2 lg:grid-cols-3 space-x-5">
                    {projects.map((item, i) => {
                        return (
                            <div
                                key={item.id}
                                // className="grid grid-rows-4 space-y-4">
                                className="grid grid-rows-[auto_auto_2fr_auto_1fr] space-y-4"
                                data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 100}`}
                            >
                                <div className="rounded bg-white p-3 shadow-lg">
                                    <img src={item.image} alt="" className="rounded h-full w-full object-cover" />
                                </div>
                                <p className="font-medium text-lg">{item.heading}</p>
                                {/* <p className="text-justify text-sm text-[#998555]">{item.description}</p> */}
                                <ul className="list-disc text-justify list-inside text-sm text-gray-700 space-y-0.5">
                                    {item.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button type="button" className="w-2/5 bg-[#fac638] p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-[#fac638] hover:shadow-xl hover:translate-y-[-3px]">
                                        <Rocket />
                                        <span className="">Link</span>
                                    </Button>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Skills */}
            <div id="skills" className="mt-10 w-full">
                <h1 className="text-2xl font-bold   mb-5">Skills</h1>
                {/* map the skills */}
                <div className="grid grid-col-1 gap-2 lg:grid-cols-4 space-x-5">
                    {skills.map((item, i) => {
                        return (
                            <div
                                key={item.id}
                                className="border rounded-lg p-4 shadow-sm space-y-3 bg-white"
                                data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 100}`}
                            >
                                {iconMap[item.id]}
                                <h1 className="text-lg font-medium">{item.heading}</h1>
                                {/* <p className="text-sm text-[#0a169a]">{item.desc}</p> */}
                                <ul className="list-disc list-inside text-sm text-[#0a169a] space-y-1">
                                    {item.desc.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* Experience */}
            <div id="experience" className="mt-10 w-full">
                <h1 className="text-2xl font-bold mb-5">Experience</h1>
                {/* timeline */}
                <CustomizedTimeline />
            </div>

            {/* Contact me Section */}
            <form
                id="contactMe"
                // action="https://formspree.io/f/xpwlvenn"
                action={process.env.NEXT_PUBLIC_FORM}
                method="POST"
                className="mt-10 w-full"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold mb-5">Contact Me</h1>
                <div className="flex flex-col space-y-3">
                    <h1 className="font-medium">Email</h1>
                    <Input className="bg-white lg:w-2/6 h-10 border -ml-2" type="email" name="email" placeholder="yourmail@example.com" required />
                    <h1 className="font-medium">Message</h1>
                    <Textarea className="bg-white lg:w-2/6 h-24 border -ml-2" name="message" placeholder="Your Message" required />
                </div>
                <Button
                    type="submit"
                    className="bg-[#fac638] p-5 text-slate-900 shadow-lg hover:cursor-pointer hover:bg-[#fac638] hover:shadow-xl hover:translate-y-[-3px] mt-3 -ml-2 disabled:opacity-70"
                    disabled={loading}
                >
                    <span className="">{loading ? "Sending..." : "Contact Me"}</span>
                </Button>
            </form>
        </div>
    )
}

export default Hero