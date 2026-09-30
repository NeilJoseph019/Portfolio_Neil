"use client"

import { useArticles } from "@/app/providers/articlesProvider"
import Link from "next/link"


const ArticleComponent = () => {

    const { sortedData } = useArticles()

  return (
    <>
        { sortedData.map((post, index) => (
            <article
              key={index}
              className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{post.frontmatter.Created}</span>
                  {/* <span>{post.readTime}</span> */}
                </div>

                <h3 className="text-lg sm:text-xl font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors duration-300">
                  {post.frontmatter.Title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{post.frontmatter.Description}</p>

                <Link
                href={`/articles/${post.slug}`}
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
            </article>
          ))}
    </>
  )
}

export default ArticleComponent