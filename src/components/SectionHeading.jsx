import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
  return <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} className={`section-heading ${align === 'center' ? 'text-center mx-auto' : ''}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </motion.header>
}
