import { useEffect } from 'react'

export default function useMouseGlow() {
  useEffect(() => {
    const move = e => { document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`); document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
}
