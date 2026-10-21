import { useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
const links = [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills']] as const
export default function Navbar() {
 const [open, setOpen] = useState(false)
 const trigger = useRef<HTMLButtonElement>(null)
 return <header className="header"><nav className="shell nav" aria-label="Main navigation"><a className="brand" href="#home" aria-label="Wael Melki home"><span className="brand-mark">w<span>.</span></span><span>wael<span className="muted">melki</span></span></a><div className="desktop-nav">{links.map(([label, id]) => <a key={id} href={'#' + id}>{label}</a>)}</div><a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={16}/></a><button ref={trigger} className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></nav>{open && <div id="mobile-menu" className="mobile-menu" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() } }}>{[...links, ['Contact', 'contact']].map(([label, id]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}</div>}</header>
}
