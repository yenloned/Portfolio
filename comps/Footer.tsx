import { Link } from "react-scroll"

const Footer = () => {
    return (
        <>
            <div className="bg-background-400 flex flex-col px-1 py-20 md:p-24 font-family_body3 text-lg text-zinc-600">
                <div className="flex justify-center">Copyright © 2023 Rudy Yen</div>
                <div className="flex justify-center">Last Update: 8 Jan 2023</div>
                <div className="flex justify-between text-white">
                    <div></div>
                    <Link activeClass="text-slate-50 inline-block align-top pb-2 text-center leading-6 text-white duration-300" to="NavBar" spy={true} smooth={true} offset={50} duration={500} className="font-family_header1 cursor-pointer">Back to Top</Link>
                </div>
            </div>
        </>
    )
}

export default Footer