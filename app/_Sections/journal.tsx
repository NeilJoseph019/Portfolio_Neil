import React from 'react'
import { Button } from '@/components/ui/button'
import ArticleComponent from './_Components/articleComponent'
import Link from 'next/link'

interface journalProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}

const Journal = ({sectionsRef, index} : journalProps) => {

  return (
    <section
      id="Journals"
      ref={(el) =>{
        (sectionsRef.current[index] = el)
      }} 
      className="min-h-screen py-20 sm:py-32 opacity-0 transition-opacity duration-700 z-0"
    >
      <div className="space-y-12 sm:space-y-16">

        <div className='flex justify-between items-center gap-4'>
            <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>
            <Link href={"/articles"}>
              <Button variant={'outline'} className='text-muted-foreground font-mono font-light cursor-pointer'>
                  View All
              </Button>
            </Link>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <ArticleComponent/>
        </div>
      </div>
    </section>
  )
}

export default Journal


