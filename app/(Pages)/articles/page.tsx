import Link from 'next/link'
import Image from 'next/image'
import { getMetaData } from '@/app/_utils/getArticle'
import { BackgroundWithoutParticles } from '@/app/_LayoutComponents/background'

interface ArticleMeta {
  slug: string
  frontmatter: {
    Title: string
    Created: string
    Tags: string[]
    Description: string
    Image: string
  }
}

function getAllDatesLatestToOldest(posts: ArticleMeta[]): ArticleMeta[] {
  return [...posts].sort((a, b) => {
    return new Date(b.frontmatter.Created).getTime() - new Date(a.frontmatter.Created).getTime()
  })
}

const articlePage = () => {

  const mkData = getMetaData()
  const sortedData = getAllDatesLatestToOldest(mkData)
  

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:px-16 bg-background text-foreground z-0 relative">

      <BackgroundWithoutParticles/>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
          <h2 className="text-3xl sm:text-4xl font-light">List of all articles</h2>
          <Link
          href={'/'}
          >
            <button className='cursor-pointer border hover:border-emerald-600/50 rounded-xl p-2 text-center text-stone-300 hover:text-white '>
              Back
            </button>
          </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
          
          {
            sortedData.map((data, index) => (

              <article
              key={index}
              className="group w-full max-w-4xl p-5 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
              >

                <div className='grid md:grid-cols-3 gap-3.5'>
                  <div className="space-y-5 md:col-span-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>
                        {data.frontmatter.Created}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-emerald-500 transition-colors duration-300">
                      {data.frontmatter.Title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{data.frontmatter.Description}</p>

                    <div className="flex flex-wrap gap-2">
                      { data.frontmatter.Tags.map((tag, index) => (
                        <span
                        key={index}
                        className="px-2 py-1.5 text-sm text-center border border-border rounded-xs hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                    href={`/articles/${data.slug}`}
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
                  <div className='flex justify-center items-center'>
                    <Image
                      src={`/${data.frontmatter.Image}`}
                      alt='image'
                      height={400}
                      width={400}
                      className='w-full max-w-50 sm:max-w-xs md:max-w-full h-auto object-contain'
                      />
                  </div>

                </div>

              </article>
            ))
          }
          
      </div>
    </div>
  )
}

export default articlePage