import { motion } from 'framer-motion'
import { Cloud, Container, Database, PanelsTopLeft, Radio, ServerCog } from 'lucide-react'

const nodes = [
  ['ReactJS / React Native', PanelsTopLeft, 'Responsive product interfaces and mobile experiences'],
  ['REST API', Radio, 'Secure communication between applications and services'],
  ['Django / Node.js', ServerCog, 'Business logic, permissions and backend APIs'],
  ['PostgreSQL / Firebase', Database, 'Reliable relational and realtime data'],
  ['Docker + Nginx', Container, 'Containerized, production-ready infrastructure'],
  ['Cloud / Production', Cloud, 'Deployed and monitored on live environments'],
]

export default function ArchitectureDiagram({ horizontal = false }) {
  return <div className={`architecture ${horizontal ? 'architecture-horizontal' : ''}`}>{nodes.map(([title, Icon, tip], i) => <motion.div className="architecture-unit" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} key={title}><div className="architecture-node" tabIndex="0"><Icon/><span>{title}</span><small>{tip}</small></div>{i < nodes.length - 1 && <div className="connector"><i /></div>}</motion.div>)}</div>
}
