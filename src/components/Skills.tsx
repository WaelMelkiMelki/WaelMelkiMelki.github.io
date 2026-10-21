import { skills } from '../data/portfolio'
import { Section } from './Section'
export default function Skills() { return <Section id="skills" number="04" label="TECHNICAL TOOLKIT" title="The tools behind the work."><div className="skills-list">{skills.map((group,i) => <div className="skill-row" key={group.title}><h3><span className="mono">0{i+1}</span>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></Section> }
