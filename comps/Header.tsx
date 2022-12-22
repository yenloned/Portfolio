import Image from 'next/image'
import demo_me from "../media/demo_me.jpg"
import { Typewriter, useTypewriter, Cursor, TypewriterHelper } from 'react-simple-typewriter'
import { Link } from 'react-scroll'


const Header = () => {
    return(
        <>
            <div className='mx-1 my-[10vw] md:mx-[22vw] text-white'>
                <div className="flex flex-col justify-around md:flex-row">
                    <div className="flex flex-col">
                        <div className='flex gap-1 text-2xl p-1 text-green-500'>
                            <div className='text-zinc-50'>&#x3e;&#x3e; </div><Typewriter words={['std::cout << "Hello World!";',
                                                'print(\"Hello World!\")',
                                                'console.log(\"Hello World!\")',
                                                'echo \"Hello World!\";',
                                                'System.out.println(\"Hello World!\");',
                                                ]}
                                        loop={0}
                                        typeSpeed={35}
                                        deleteSpeed={10}
                                        cursor
                                        cursorBlinking={false}
                            />
                        </div>
                        <div className="font-family_header2 italic text-[4rem]">Rudy Yen</div>
                        <div className="font-family_body2 text-xl max-w-[500px]">Computer Science Undergrad Student @<a href="https://www.ust.hk/" className='text-blue-500 hover:text-blue-400'>HKUST</a></div>
                        <div className="mockup-code mt-5 text-lg ">
                            <div className="flex gap-[10px]">
                                <div className='text-green-500 pl-6'>user@user-PC</div> <div className='text-purple-700'>MINGW64</div><div className='text-yellow-400'>~/Desktop/rudyyen.info</div>
                            </div>
                            <pre data-prefix="$" className='mb-4'><code>npm install rudy-yen-portfolio</code></pre>
                            <pre data-prefix=" ">added 1 package, and audited 0 packages in 0s</pre> 
                            <pre data-prefix=" ">1337 packages are looking for funding</pre>
                            <pre data-prefix=" ">  run `npm fund` for details</pre>
                            <pre data-prefix=" " className='flex'>found <div className="text-green-400">0</div> vulnerabilities </pre>
                        </div>
                    </div>
                    <div className='scale-100 shadow-inner flex justify-center'>
                        <Image src={demo_me} width="300" height="408" alt=""/>
                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <Link activeClass="text-slate-50 duration-200" to="About" spy={true} smooth={true} offset={50} duration={500}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="animate-bounce w-16 h-16 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default Header;