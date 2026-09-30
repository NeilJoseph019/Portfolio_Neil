import React from 'react'
import { softSkills, techSkills } from '../_Constants/data'



interface skillProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}

const Skills = ({sectionsRef, index} : skillProps) => {

  return (
    <section
    id='Skills'
    ref={(el)=>{
      (sectionsRef.current[index] = el)}
    }
    className="min-h-screen py-20 sm:py-32 opacity-0 transition-opacity duration-700 z-0"
    >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
            <h2 className="text-3xl sm:text-4xl font-light">Skills & Expertise</h2>
            <div className="text-sm text-muted-foreground font-mono">TECHNICAL TOOLKIT</div>
        </div>

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 min-w-0">

          {
            techSkills.map((techS, index)=>(
              
              <article
              key={index}
              className="group min-w-0 p-6 sm:p-8 border border-muted-foreground rounded-lg cursor-pointer space-y-6"
              >
                  <h3 className="text-sm font-medium font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wider">
                      {techS.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    { techS.skill.map((skill) => (
                      <span
                      key={skill}
                      className="px-3 py-1.5 text-sm text-center border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
              </article>

            ))
          }

        </div>

        <div className='flex flex-wrap lg:flex-col gap-3 sm:gap-5 items-center lg:self-start min-w-0 group border border-muted-foreground rounded-lg p-6 sm:p-8'>

          <h3 className="text-sm font-medium font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wider">
              SOFT SKILLS
          </h3>
          {
            softSkills.map((item, index) => (
              <span
              key={index}
              className="px-3 py-1.5 text-sm text-center border border-border rounded-full hover:border-muted-foreground/50 hover:text-emerald-500 transition-colors duration-300"
              >
                {item}
              </span>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default Skills