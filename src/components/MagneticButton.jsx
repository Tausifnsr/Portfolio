import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const move = e => {
    if (reduce || matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * .1}px, ${(e.clientY - rect.top - rect.height / 2) * .14}px)`
  }
  return <motion.button ref={ref} onMouseMove={move} onMouseLeave={() => { if (ref.current) ref.current.style.transform = '' }} whileTap={{ scale: .97 }} className={`button magnetic ${className}`} {...props}>{children}</motion.button>
}
