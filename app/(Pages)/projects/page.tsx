import { projects } from '@/app/_Constants/data'
import { BackgroundWithoutParticles } from '@/app/_LayoutComponents/background'
import Link from 'next/link'

type projectsType = {
  title: string,
  description: string,
  tech:string[],
  year:string
}


function getAllDatesLatestToOldest(posts: projectsType[]): projectsType[] {
  return [...posts].sort((a, b) => {
    return new Date(b.year).getTime() - new Date(a.year).getTime()
  })
}


const projectPage = () => {

    const sortedData = getAllDatesLatestToOldest(projects)

    const slugify = (text: string) => text.toLowerCase().trim().replace(/ /g, "-")

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:px-16 bg-background text-foreground z-0 relative">
        
        <BackgroundWithoutParticles/>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
          <h2 className="text-3xl sm:text-4xl font-light">List of all projects</h2>
          <Link
          href={'/'}
          >
            <button className='cursor-pointer border hover:border-emerald-600/50 rounded-xl p-2 text-center text-muted-foreground hover:text-foreground'>
              Back
            </button>
          </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {
            sortedData.map((data, index) => (

            <article
            key={index}
            className="group min-w-0 p-5 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >

            <div className='gap-3.5'>
                <div className="space-y-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>
                    {data.year}
                    </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors duration-300">
                    {data.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{data.description}</p>

                <div className="flex flex-wrap gap-2">
                    { data.tech.map((tech, index) => (
                    <span
                    key={index}
                    className="px-2 py-1.5 text-sm text-center border border-border rounded-xs hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                        {tech}
                    </span>
                    ))}
                </div>

                <Link
                href={`/projects/${slugify(data.title)}`}
                >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <span>Read more</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                    </div>
                </Link>
                
                </div>
            </div>

            </article>
        ))
        }
      </div>
    </div>
  )
}

export default projectPage