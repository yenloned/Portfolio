import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Element } from "react-scroll";
import project from "../data/project.json"
import { ProjectImage } from "../function/ProjectImage";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
    const [finding_tag, setFinding_tag] = useState("")

        useEffect(() => {
            AOS.init({duration: 800});
        }, [])

    let all_tags_map = new Map();
    project.project.map((project) => {
        project.tags.map((tag) => {
            all_tags_map.set(tag, tag)
        })
    })

    const all_tags_array = Array.from(all_tags_map, ([key, value]) => (value))

    const ifFound = (array:any[], target:any) => {
        if(target == "") return true;
        array.forEach((temp) => {
            if(temp == target){
                console.log("yes")
                return true;
            }
        })
        return false;
    }


    return(
    <Element name="Project" className='px-[12vw] pt-[6vw] pb-[12vw] bg-background-200'>
        <div className="font-family_header2 text-[2rem] text-center">Projects</div>
        <div className='my-[3vw] mx-[5vw] flex gap-3 flex-wrap'>
        {all_tags_array.map((tag) => {
            return(
                <button className='cursor-pointer px-2 py-1 border-2 border-slate-900 rounded-sm bg-slate-800 hover:bg-slate-900 focus:bg-slate-900' onClick={() => setFinding_tag(tag)}>{tag}</button>
            )
        })}
        </div>
        <div className="flex flex-wrap gap-[3vw] justify-center">
            {project.project.map((project) => {
                
                return(
                    <div data-aos="zoom-in" className="card w-[26rem] bg-base-100 shadow-lg shadow-background-100 hover:shadow-black duration-300" key={project.name}>
                        <figure><Image src={ProjectImage(project.name)} width="512" height="512" alt=""/></figure>
                        <div className="card-body">
                            <div className="card-title font-family_body1">
                            {project.name}
                            </div>
                            <div className="card-actions font-family_body3">
                                {project.techs.map((tech) => {
                                    return(<div className="badge">{tech}</div> )
                                })}
                            </div>
                            <div className='flex flex-col justify-evenly h-full gap-2'>
                                <div className='text-justify text-[0.95rem] font-family_body2'>{project.description}</div>
                                <div className="mt-1 card-actions font-family_body3">
                                    {project.tags.map((tag) => {
                                        return(<div className="badge badge-outline">{tag}</div>)
                                    })}
                                </div>
                            </div>
                            {project.demo_link ? 
                                <div className='flex justify-center mt-2 gap-5'>
                                    <a href={project.github_link} className="bg-slate-900 py-1 px-2 flex gap-2 rounded-lg border-2 hover:bg-slate-800 cursor-pointer w-[95px] justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg> Github
                                    </a>
                                    <a href={project.demo_link} className="bg-slate-900 py-1 px-2 flex gap-1 rounded-lg border-2 hover:bg-slate-800 cursor-pointer w-[95px] justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg> Demo
                                    </a>
                                </div>
                            :
                                <div className='flex justify-center mt-2'>
                                    <a href={project.github_link} className="bg-slate-900 py-1 px-2 flex gap-2 rounded-lg border-2 hover:bg-slate-800 cursor-pointer w-[95px] justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg> Github
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                )
            })}
            
        </div>
        <div className='mt-[4vw] text-center font-family_header2 text-3xl'>More Projects Coming Up...</div>
    </Element>
    )
}

export default Project;