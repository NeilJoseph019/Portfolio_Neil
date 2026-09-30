import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BackgroundWithoutParticles } from "@/app/_LayoutComponents/background"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { projectDetails } from "@/app/_Constants/data"

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
}

type PageProps = {
  params: {
    slug: string
  }
}

const projectDetailsPage = async({ params }: PageProps) => {

    const { slug } = await params

    console.log(slug)

    const project = projectDetails.find(
    (project) => slugify(project.title) === slug
  )

  if (!project) return notFound()

  return (
    <article className="min-h-screen p-4 sm:p-5 bg-background text-foreground/85 z-0 relative">

        <BackgroundWithoutParticles/>

        <div className="flex justify-between items-center mb-7">

            <button className="font-mono">
            <Link
            href={'/projects'}
            >
                ← Back
            </Link>
            </button>

            {/* Read More → */}

            <button className="font-mono">
            <Link
            href={'/'}
            >
                Home
            </Link>
            </button>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-2.5">

            <div className="lg:col-span-2 min-w-0 p-3 sm:p-5 border">
                <div className="px-9 py-4 sm:p-10 h-full w-full">
                    <Carousel>
                    <CarouselContent>
                        {
                            project.images.map((img, index)=>(
                                <CarouselItem key={index} className="flex justify-center items-center">
                                    <div className="relative w-full h-56 sm:h-70">
                                        <Image
                                        src={img}
                                        alt={`image-${index}`}
                                        sizes="(min-width: 1024px) 50vw, 90vw"
                                        fill
                                        className="object-contain"
                                        priority
                                        />
                                    </div>
                                </CarouselItem>
                            ) )
                        }
                    </CarouselContent>
                    <CarouselPrevious className="-left-8 sm:-left-12" />
                    <CarouselNext className="-right-8 sm:-right-12" />
                    </Carousel>
                </div>
            </div>
            <div className="min-w-0">
                <div className="border p-2.5">
                    <h5 className="font-mono m-1.5">Name:</h5>
                    <p>{project.title}</p>
                </div>
                <div className="border p-2.5">
                    <h5 className="font-mono m-1.5">Type:</h5>
                    { project.type.map((item, index)=> (
                        <Badge key={index} variant={"outline"} className="m-1">{item}</Badge>
                    )) }
                </div>
                <div className="border p-2.5">
                    <h5 className="font-mono m-1.5">Stack:</h5>
                    { project.stack.map((item, index)=> (
                        <Badge key={index} variant={"outline"} className="m-1">{item}</Badge>
                    )) }
                </div>
                <div className="border p-2.5">
                    <h5 className="font-mono m-1.5">Source Code:</h5>
                    <Link
                    href={`${project.sourceCode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline">
                        <p className="break-all">{project.sourceCode}</p>
                    </Link>
                </div>
                {
                    project.demo ? 
                    (
                    <div className="border p-2.5">
                        <h5 className="font-mono m-1.5">Demo:</h5>
                        <p>{project.demo}</p>
                    </div>
                    ):(
                        <div className="border p-2.5">
                            <h5 className="font-mono m-1.5">Demo:</h5>
                            <p>Not available yet.</p>
                        </div>
                    )
                }
                
            </div>

        </div>

        <div className="mt-3 min-w-0">
            <div className="border p-2.5">
                <h5 className="font-mono m-1.5">Overview:</h5>
                <p >{project.overview}</p>
            </div>
            <div className="border p-2.5">
                <h5 className="font-mono m-1.5">Purpose:</h5>
                <p >{project.purpose}</p>
            </div>
            <div className="border p-2.5">
                <h5 className="font-mono m-1.5">Thought Process:</h5>
                <p >{project.thoughtProcess}</p>
            </div>
            <div className="border p-2.5">
                <h5 className="font-mono m-1.5">Takeaways:</h5>
                <p >{project.takeaways}</p>
            </div>
        </div>

    </article>
  )
}

export default projectDetailsPage