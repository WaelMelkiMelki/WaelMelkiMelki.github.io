import { ArrowUpRight, ScanLine } from 'lucide-react'
import { projects, extraProject, profile } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { Section } from './Section'
export default function Projects() { return <Section id="projects" number="03" label="SELECTED WORK" title="Ideas, put into practice."><p className="section-description">A selection of projects across machine learning, data systems and wireless engineering.</p><div className="project-grid">{projects.map((project,index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div><a className="extra-project" href={extraProject.repo}><ScanLine size={28}/><div><span className="eyebrow">ALSO EXPLORING · COMPUTER VISION</span><h3>{extraProject.title}</h3><p>{extraProject.description}</p></div><ArrowUpRight className="extra-arrow"/></a><a className="text-link all-repos" href={profile.github + '?tab=repositories'}>Browse all repositories <ArrowUpRight size={17}/></a></Section> }
