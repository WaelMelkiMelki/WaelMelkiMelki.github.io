import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowDown, Code2, Link, Download, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import NetworkArt from './NetworkArt'
export default function Hero() {
 const reduced = useReducedMotion()
 return <section id="home" className="hero shell"><div className="hero-grid"><motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}><p className="eyebrow hero-eyebrow"><span className="status-dot"/> AI · DATA · CONNECTIVITY</p><h1>Wael Melki<span>Intelligence meets<br/><em>engineering.</em></span></h1><p className="hero-role">{profile.role}</p><p className="hero-description">{profile.introduction}</p><div className="hero-actions"><a className="button primary" href="#projects">View projects <ArrowRight size={18}/></a><a className="button secondary" href="#contact">Contact me <ArrowRight size={17}/></a></div><div className="social-links"><a href={profile.github}><Code2 size={17}/> GitHub profile</a>{profile.linkedin && <a href={profile.linkedin}><Link size={17}/>LinkedIn</a>}{profile.resume && <a href={profile.resume} download><Download size={17}/> Download resume</a>}<span><MapPin size={15}/> Tunisia</span></div></motion.div><NetworkArt/></div><div className="hero-footer"><p>BUILT ON CURIOSITY. <span>GROUNDED IN ENGINEERING.</span></p><a href="#about">Explore my work <ArrowDown size={15}/></a></div></section>
}
