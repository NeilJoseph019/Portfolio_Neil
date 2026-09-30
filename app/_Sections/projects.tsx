import React from 'react'
import { Button } from '@/components/ui/button'
import { projects } from '../_Constants/data'
import Link from 'next/link'

interface projectProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}

type projectsType = {
  title: string
  description: string
  tech:string[]
  year:string
}

function getAllDatesLatestToOldest(posts: projectsType[]): projectsType[] {
  return [...posts].sort((a, b) => {
    return new Date(b.year).getTime() - new Date(a.year).getTime()
  })
}


const Projects = ({sectionsRef, index} : projectProps) => {

    const sortedData = getAllDatesLatestToOldest(projects).slice(0,3)
    
    const slugify = (text: string) => text.toLowerCase().trim().replace(/ /g, "-")

  return (
    <section
    id="Projects"
    ref={(el) => {
        (sectionsRef.current[index] = el)
    }}
    className="min-h-screen py-20 sm:py-32 opacity-0 transition-opacity duration-700 z-0"
    >
        <div className="space-y-12 sm:space-y-16">

            <div className='flex justify-between items-center gap-4'>
                <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
                <Link href={"/projects"}>
                    <Button variant={'outline'} className='text-muted-foreground font-mono font-light cursor-pointer'>
                        View All
                    </Button>
                </Link>
            </div>

            <div className="space-y-8 sm:space-y-12">
                { sortedData.map((project, index) => (
                <article
                    key={index}
                    className="group min-w-0 p-5 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500"
                >
                    <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                            <h3 className="text-xl sm:text-2xl font-medium group-hover:text-emerald-500 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-xs text-muted-foreground font-mono">{project.year}</p>
                        </div>
                        <Link
                        href={`/projects/${slugify(project.title)}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                            <span className="hidden sm:inline">View</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </Link>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-mono border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects