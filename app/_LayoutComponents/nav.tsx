import React from 'react'

interface NavProps {
  activeSection : string,
}


export const navSections = ["Intro", "About", "Skills", "Projects", "Career", "Journals", "Contact"]

const Navigator = ({activeSection} : NavProps) => {

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
        <div className="flex flex-col gap-4">
            {navSections.map((section, index) => (
            <button
                key={index}
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`w-2 h-8 rounded-full cursor-pointer transition-all duration-500 relative ${
                activeSection === section ? "bg-white" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Navigate to ${section}`}
            > 
              {
                activeSection === section && (
                  <span className='text-foreground absolute left-3.75 top-0.5'>
                    {activeSection}
                  </span>
                )
              }
            
            </button>
            ))}
        </div>
    </nav>
  )
}

export default Navigator




