import Navbar from '../comps/Navbar'
import Header from '../comps/Header'
import About from '../comps/About'
import Experience from '../comps/Experience'
import Project from '../comps/Project'
import Contact from '../comps/Contact'
import Footer from '../comps/Footer'
import ParticleBackground from '../comps/ParticleBackground'

export default function Home() {
  return (
    <>
      <div className="relative bg-background-100 min-h-screen">
        <ParticleBackground />
        <Navbar/>
        <Header/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
