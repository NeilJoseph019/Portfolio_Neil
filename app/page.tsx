"use client"

import {useEffect, useState, useRef } from "react"

import Intro from "@/app/_Sections/intro"
import Navigator from "./_LayoutComponents/nav"
import MobileNav from "./_LayoutComponents/mobileNav"
import About from "./_Sections/about"
import Background from "./_LayoutComponents/background"
import Contact from "./_Sections/contact"
import FooterBar from "./_LayoutComponents/footerBar"
import Skills from "./_Sections/skills"
import Career from "./_Sections/career"
import Journal from "./_Sections/journal"
import Projects from "./_Sections/projects"

export default function Home() {

  
  // const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  
  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },{
        threshold : 0.2,
        rootMargin : "0px 0px -12% 0px"
      }
    )

    sectionsRef.current.forEach((section)=>{
      if(section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }

  },[])

  return (
    <div className="min-h-screen bg-background text-foreground z-0 relative">

      <Background/>

      <Navigator activeSection={activeSection} />

      <MobileNav activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">

        <Intro sectionsRef={sectionsRef} index={0}/>

        <About sectionsRef={sectionsRef} index={1}/>
        
        <Skills sectionsRef={sectionsRef} index={2}/>

        <Projects sectionsRef={sectionsRef} index={3}/>

        <Career sectionsRef={sectionsRef} index={4}/>

        <Journal sectionsRef={sectionsRef} index={5}/>

        <Contact sectionsRef={sectionsRef} index={6}/>

        <FooterBar/>

      </main>
    </div>
  );
}
