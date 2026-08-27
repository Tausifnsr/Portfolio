import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProductVisual from './ProductVisual'

export default function ProjectShowcase({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [18,-18])
  const tilt = e => {
    if (matchMedia('(pointer: coarse)').matches) return
    const el = e.currentTarget, r = el.getBoundingClientRect(), rx = ((e.clientY-r.top)/r.height-.5)*-4, ry=((e.clientX-r.left)/r.width-.5)*4
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  return <motion.article ref={ref} className={`project-showcase ${index % 2 ? 'project-reverse' : ''}`} initial="hidden" whileInView="show" viewport={{once:true,margin:'-10%'}} variants={{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.09}}}}>
    <div className="project-copy">
      <motion.span variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}} className="project-number">0{index+1}</motion.span>
      <motion.p variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}} className="eyebrow">{project.category}</motion.p>
      <motion.h3 variants={{hidden:{opacity:0,y:22},show:{opacity:1,y:0}}}>{project.title}</motion.h3>
      <motion.p variants={{hidden:{opacity:0,y:20},show:{opacity:1,y:0}}} className="project-description">{project.description}</motion.p>
      <motion.div variants={{hidden:{opacity:0},show:{opacity:1}}} className="chips">{project.technologies.slice(0,6).map((x,i)=><motion.span initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} transition={{delay:i*.04}} viewport={{once:true}} key={x}>{x}</motion.span>)}</motion.div>
      <motion.div variants={{hidden:{opacity:0,y:15},show:{opacity:1,y:0}}} className="project-actions"><Link to={`/work/${project.slug}`}>View case study <ArrowUpRight/></Link><span>Role: {project.involvement.slice(0,2).join(' · ')}</span></motion.div>
    </div>
    <motion.div style={{y}} className="project-visual-wrap"><div onMouseMove={tilt} onMouseLeave={e => e.currentTarget.style.transform=''} className="project-tilt"><ProductVisual project={project}/><div className="visual-reflection"/></div></motion.div>
  </motion.article>
}
