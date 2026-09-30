import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import './about.css'

interface aboutProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}


const About = ({sectionsRef, index} : aboutProps) => {
  return (
    <div 
    id="About"
    ref={(el)=>{
        (sectionsRef.current[index] = el)}
    } 
    className="min-h-screen flex items-center py-16 sm:py-20 opacity-0 transition-opacity duration-700 z-0"
    >

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 w-full'>


            <div className='flex flex-col justify-center items-center gap-5'> 
                <h2 className="text-3xl sm:text-4xl font-light">About Me</h2>
                
                <div className='profile_animate w-56 h-56 sm:w-62.5 sm:h-62.5 shrink-0 flex items-center justify-center overflow-hidden'>
                <Image src={'/profile_pic_NJ.jpg'} alt='profile picture' width={350} height={350} className='w-full h-full object-cover'/>
                </div>
            </div>

            <div className='lg:col-span-2'>
                <p className="text-md mb-5 text-center">Meet the Code Whisperer: Translating Caffeine into Functioning solutions</p>
                <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed mb-2'>
                 
                    Some people fix problems. Some people build solutions. I do both.
                </p>    
                <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed mb-2'>
                    Whether it’s software engineering, making cloud services behave,or IT support
                    I’m the digital firefighter you never knew you needed. Armed with troubleshooting skills, clean code, 
                    and a knack for making technology behave, I thrive in turning tech chaos into seamless solutions! 
                </p>
                <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
                
                    I bring a mix of analytical thinking, creative problem-solving, 
                    and an unhealthy obsession with efficiency. Call me the Swiss Army knife of tech—versatile, efficient, 
                    and always ready to tackle the next challenge!
                
                </p>

            </div>
        </div>
    </div>
  )
}

export default About