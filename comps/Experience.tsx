import { Element } from 'react-scroll'
import experience from "../data/experience.json"
import default_icon_company from "../media/default_icon_company.png"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ExperienceImage } from "../function/ExperienceImage";

const Experience = () => {
    useEffect(() => {
        AOS.init({duration: 1500});
    }, [])

    return (
        <Element name="Experience" className='px-1 md:px-[23vw] py-[12vw] text-white'>
            <div className="font-family_header2 text-[2rem]">Experience</div>
            <ul className="steps steps-vertical w-full">
                {experience.experience.map((experience) =>{
                    return(
                        <li data-aos="fade-zoom-in" data-content=" " className={experience.present ? "step step-accent py-2" : "step"} key={experience.name}>
                            <a href={experience.link} className='flex flex-col md:flex-row gap-[1rem+1vw] w-full hover:bg-background-300 rounded-lg px-5 py-2 cursor-pointer'>
                                <div className="avatar">
                                    <div className="w-32 mask mask-squircle">
                                        <Image src={ExperienceImage(experience.name)} width="256" height="256" alt=""/>
                                    </div>
                                </div>
                                <div className='flex flex-col text-left w-full'>
                                    <div className='flex flex-col md:flex-row justify-between'>
                                        <div className='font-family_header2 text-xl'>{experience.name}</div>
                                        <div className='flex gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg> <div className='font-family_body2 text-lg'>{experience.location}</div>
                                        </div>
                                        
                                    </div>
                                    <div className='flex flex-col md:flex-row justify-between'>
                                        <div className='font-family_header3 text-lg'>{experience.title}</div>
                                        <div className='flex gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg> <div className='font-family_body2 text-md'>{experience.time}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:flex-row justify-between'>
                                        <div className='flex flex-col md:flex-row gap-2 mt-2'>
                                            {experience.techs.map((tech) => {
                                            return(
                                                <span className="badge">{tech}</span>
                                            )
                                            })}
                                        </div>
                                        <div className='flex gap-1 text-zinc-400'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                            </svg>
                                            <div className='italic'>{experience.mode}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </Element>
    )
}
export default Experience;