
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import { markdownToHtml } from '@/app/_utils/getArticle'
import styles from './article.module.css'
import Link from "next/link"
import { BackgroundWithoutParticles } from "@/app/_LayoutComponents/background"

type slugProp = {
  params:  Promise<{
    slug: string
  }>
}

export async function generateStaticParams()  {
    const articlesDir = path.join(process.cwd(), "articles")
    const files = fs.readdirSync(articlesDir)
    return files.filter((file) => file.endsWith(".md")).map((file) => ({slug: file.replace(/\.md$/, "")}))
}

const ArticlePage = async ({params }: slugProp) => {

  const { slug } = await params

  const articlesDir = path.join(process.cwd(), "articles")
  const filesPath = path.join(articlesDir, `${slug}.md`)

  const fileContent =  fs.readFileSync(filesPath, "utf8")
  const { data: _, content } = matter(fileContent)
  const html = await markdownToHtml(content)

  

  return (
    <article className="min-h-screen p-4 sm:p-5 bg-background text-foreground/85 font-mono z-0 relative">

      <BackgroundWithoutParticles/>

      <div className="flex justify-between items-center">

        <button>
          <Link
          href={'/articles'}
          >
            ← Back
          </Link>
        </button>

          <button>
          <Link
          href={'/'}
          >
            Home
          </Link>
        </button>
      </div>


      <div className={`${styles.content} max-w-3xl mx-auto`} 
      dangerouslySetInnerHTML={{ __html: html }} />

    </article>
  )
}

export default ArticlePage