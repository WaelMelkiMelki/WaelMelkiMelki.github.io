import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
export function Section({ id, number, label, title, children }: { id: string; number: string; label: string; title: string; children: ReactNode }) {
 const reduced = useReducedMotion()
 return <motion.section id={id} className="section shell" initial={reduced ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.45 }}><div className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{title}</h2></div></div>{children}</motion.section>
}
