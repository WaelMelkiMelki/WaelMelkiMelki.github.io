import { ArrowUp } from 'lucide-react'
export default function Footer() { return <footer className="shell footer"><p>© {new Date().getFullYear()} Wael Melki</p><span>Thoughtfully engineered. Always learning.</span><a href="#home" aria-label="Back to top"><ArrowUp size={17}/> Back to top</a></footer> }
