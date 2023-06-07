import { useState } from 'react'
import { Element } from 'react-scroll'
import about from '../data/about.json'

const About = () =>{
    const [question_num, setQuestion_num] = useState<number>(4);

    return(
        <Element name="About" className='px-1 md:px-[18vw] py-[12vw] bg-background-200 text-white'>
            <div className="flex flex-col justify-center gap-[3vw] md:flex-row">
                <div className='p-5'>
                    <div className="font-family_header2 text-[2rem]">About Me</div>
                    <div className="font-family_body2 text-xl max-w-[545px] text-justify mt-2 mb-5">Hi there! I am Rudy, a local student at The Hong Kong University of Science and Technology. I aspire to deepen my strength and competence in problem-solving, technology and leadership. Feel free to look around to know more about me!</div>
                    <div className="flex gap-3 font-family_body2 text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                        </svg>
                        <div className="flex gap-2"><div>Language: </div><div>Cantonese, English, Mandarin</div></div>
                    </div>
                    <div className="flex gap-3 font-family_body2 text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                        </svg>
                        <div className="flex gap-2"><div>Interest: </div><div>Singing, Workout, Tchoukball</div></div>
                    </div>
                </div>

                <div className="bg-stone-900 p-5 rounded-2xl shadow-xl">
                    <div className="font-family_header2 text-[2rem]">Education Path</div>
                    <ul className="steps steps-vertical">
                        <li data-content=" " className="step step-accent">
                            <div className='flex'>
                                <div className='w-[95px] text-left'>2022 - 2025</div>
                                BEng in Computer Science @<a href="https://hkust.edu.hk/" className='text-blue-500 hover:text-blue-400'>HKUST</a>
                            </div>
                        </li>
                        <li data-content=" " className="step">
                            <div className='flex'>
                                <div className='w-[95px] text-left'>2020 - 2022</div>
                                Higher Dioplma in Information Security @<a href="https://www2.hkuspace.hku.hk/cc/" className='text-blue-500 hover:text-blue-400'>HKUSPACE</a>
                            </div>
                        </li>
                        <li data-content=" " className="step">
                            <div className='flex'>
                                <div className='w-[45px] text-left'>2020</div>
                                Hong Kong Diploma of Secondary Education Examination
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='justify-center px-[2vw] pb-[3vw] mx-[8vw] mt-8 text-xl border-b-2'>
                <div className='flex gap-2 font-family_body2 text-xl justify-left mt-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <div>More About Me</div>
                </div>
                <div className="chat chat-start mt-[3vw] min-h-[80px]">
                    <div className="chat-bubble chat-bubble-accent">{about.about[question_num].question}</div>
                </div>
                <div className="chat chat-end min-h-[80px]">
                    <div className="chat-bubble chat-bubble-accent">{about.about[question_num].answer}</div>
                </div>
            </div>
            <div className='cursor-pointer flex justify-center mt-2' onClick={()=> {setQuestion_num(Math.floor(Math.random() * 16))}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn bg-background-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

            </div>
            

        </Element>
    )
}

export default About;