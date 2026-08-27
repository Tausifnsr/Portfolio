import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Search, X } from 'lucide-react'

export default function CommandPalette({ open, setOpen }) {
  useEffect(() => { const handler = e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(v => !v) } if (e.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [setOpen])
  const items = ['Home','Work','Experience','Skills','Contact']
  const go = id => { document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'}); setOpen(false) }
  return <AnimatePresence>{open && <motion.div className="palette-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={() => setOpen(false)}><motion.div className="palette" initial={{scale:.96,y:-15}} animate={{scale:1,y:0}} exit={{scale:.96,y:-15}} onMouseDown={e => e.stopPropagation()} role="dialog" aria-modal="true"><div className="palette-head"><Search/><span>Jump to a section…</span><button onClick={() => setOpen(false)}><X size={16}/></button></div>{items.map((x,i) => <button onClick={() => go(x)} key={x}><span>0{i+1}</span>{x}<ArrowUpRight size={15}/></button>)}</motion.div></motion.div>}</AnimatePresence>
}
