import { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import about from '../data/about.json'

const About = () =>{
    // Initialize question_num based on the actual number of questions in the JSON file
    const [question_num, setQuestion_num] = useState<number>(Math.floor(Math.random() * about.about.length));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Function to generate a random question number within the valid range
    const generateRandomQuestion = () => {
        setQuestion_num(Math.floor(Math.random() * about.about.length));
    };

    return(
        <Element name="About" className='relative py-20 px-4 md:px-8 lg:px-16 animated-bg'>
            {/* Dynamic Background Elements */}
            <div className="gradient-mesh"></div>
            <div className="floating-orbs">
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
                <div className="orb"></div>
            </div>
            <div className="glowing-dots">
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
                <div className="glowing-dot"></div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-500/20 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="gradient-text font-family_header2 text-4xl md:text-5xl font-bold mb-4">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* About Me Card */}
                    <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                        <h3 className="font-family_header2 text-2xl font-bold text-white mb-6">
                            Who I Am
                        </h3>
                        <p className="font-family_body2 text-lg text-gray-300 leading-relaxed mb-8">
                            Hi there! I am Rudy, a passionate software engineer with a strong foundation in computer science and a passion for building innovative solutions.
                            Feel free to look around to know more about me!
                        </p>
                        
                        {/* Skills & Languages */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Languages</div>
                                    <div className="text-gray-400">Cantonese, English, Mandarin</div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Interests</div>
                                    <div className="text-gray-400">Singing, Music Production, Workout</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                        <h3 className="font-family_header2 text-2xl font-bold text-white mb-6">
                            Education Path
                        </h3>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                            
                            <div className="space-y-6">
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full border-4 border-background-100 z-10 mt-2"></div>
                                    <div className="flex-1 ml-2">
                                        <div className="text-sm text-blue-400 font-semibold">2022 - 2025</div>
                                        <div className="text-white font-medium">
                                            BEng in Computer Science @
                                            <a href="https://hkust.edu.hk/" className='text-blue-400 hover:text-blue-300 transition-colors ml-1 underline decoration-blue-400/50 hover:decoration-blue-300'>
                                                HKUST
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full border-4 border-background-100 z-10 mt-2"></div>
                                    <div className="flex-1 ml-2">
                                        <div className="text-sm text-purple-400 font-semibold">2020 - 2022</div>
                                        <div className="text-white font-medium">
                                            Higher Diploma in Information Security @
                                            <a href="https://www2.hkuspace.hku.hk/cc/" className='text-purple-400 hover:text-purple-300 transition-colors ml-1 underline decoration-purple-400/50 hover:decoration-purple-300'>
                                                HKUSPACE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="relative flex items-start gap-4">
                                    <div className="w-3 h-3 bg-pink-500 rounded-full border-4 border-background-100 z-10 mt-2"></div>
                                    <div className="flex-1 ml-2">
                                        <div className="text-sm text-pink-400 font-semibold">2020</div>
                                        <div className="text-white font-medium">
                                            Hong Kong Diploma of Secondary Education Examination
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Q&A Section */}
                <div className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
                    <div className="text-center mb-8">
                        <h3 className="font-family_header2 text-2xl font-bold text-white mb-2">
                            Get to Know Me Better
                        </h3>
                        <p className="text-gray-400">Click the refresh button to discover random facts about me</p>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="bg-background-300 rounded-2xl p-4 flex-1">
                                    <p className="text-white font-medium">{about.about[question_num].question}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 justify-end">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 flex-1">
                                    <p className="text-white font-medium">{about.about[question_num].answer}</p>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-8">
                            <button 
                                onClick={generateRandomQuestion}
                                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 glow"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    Ask Another Question
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About;