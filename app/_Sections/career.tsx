import React, { useEffect } from 'react'
import {qualificationData} from "@/app/_Constants/data"

interface careerProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}

const Career = ({sectionsRef, index} : careerProps) => {


  return (
    <section
      id="Career"
      ref={(el) => {
        sectionsRef.current[index] = el
      }}
      className="min-h-screen py-8 sm:py-10 opacity-0 transition-opacity duration-700 z-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Education & Experiences</h2>
          <div className="text-sm text-muted-foreground font-mono">2012 — 2025</div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {qualificationData.map((entry, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b-2"
            >
              <div className="lg:col-span-2">
                <div className="text-lg sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {entry.period}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{entry.title}</h3>
                  <hr className='m-3'/>
                  <p className="text-foreground/85 leading-relaxed max-w-lg wrap-break-word">{entry.description}</p>
                  <hr className='m-3'/>
                  <div className="text-muted-foreground mt-2">{entry.location}</div>
                </div>

                <div className="mt-1">
                  { entry.type === 'education' ? (
                    <span className="inline-flex items-center px-2 py-1 gap-2 rounded-full text-xs font-medium bg-gray-100/85 text-gray-800">
                      <img src="/education.svg" alt="Education Icon" className="w-4 h-4" /> Education
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 gap-2 rounded-full text-xs font-medium bg-gray-100/85 text-gray-800">
                      <img src="/experience.svg" alt="Education Icon" className="w-4 h-4" /> Experience
                    </span>
                  )
                  }
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {entry.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-foreground/80 font-mono rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career


