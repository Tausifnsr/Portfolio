import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import useMouseGlow from './hooks/useMouseGlow'
import { About, Architecture, Contact, Experience, GithubSection, Hero, Process, Services, Skills, Snapshot, Statement, TechMarquee, Work } from './sections/HomeSections'

const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))

function Home(){return <><Navbar onCommand={()=>window.dispatchEvent(new Event('open-command'))}/><Hero/><Snapshot/><About/><Statement/><Work/><TechMarquee/><Experience/><Process/><Skills/><Architecture/><Services/><GithubSection/><Contact/><Footer/></>}

export default function App(){const location=useLocation();const [palette,setPalette]=useState(false);const [top,setTop]=useState(false);const {scrollYProgress}=useScroll();const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:25});useMouseGlow();useEffect(()=>{const command=()=>setPalette(true),scroll=()=>setTop(window.scrollY>window.innerHeight*.8);window.addEventListener('open-command',command);window.addEventListener('scroll',scroll,{passive:true});return()=>{window.removeEventListener('open-command',command);window.removeEventListener('scroll',scroll)}},[]);return <><motion.div className="scroll-progress" style={{scaleX}}/><div className="cursor-glow"/><CommandPalette open={palette} setOpen={setPalette}/><Suspense fallback={<div className="page-loader">Loading product story…</div>}><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<Home/>}/><Route path="/work/:slug" element={<CaseStudyPage/>}/></Routes></AnimatePresence></Suspense><AnimatePresence>{top&&<motion.button initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.8}} className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp/></motion.button>}</AnimatePresence></>}
