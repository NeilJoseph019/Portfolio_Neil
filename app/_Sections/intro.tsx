import React from 'react'

interface introProps {
    sectionsRef: React.RefObject<(HTMLElement | null)[]>
    index: number
}

const Intro = ({sectionsRef,index } : introProps) => {
  return (
    <header
    id="Intro"
    ref={(el)=>{
        (sectionsRef.current[index] = el)}
    } 
    className="min-h-screen flex items-center py-16 opacity-0 transition-opacity duration-700 z-0"
    >
        <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-2">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                        Neil
                        <br />
                        <span className="text-muted-foreground">Joseph</span>
                    </h1>
                </div>

                <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Computer Engineer fueled by curiosity, crafting innovative
                    <span className="text-foreground"> full-stack solutions</span>,<span className="text-foreground"> cloud technology & architectures</span>,
                    and
                    <span className="text-foreground">  creative code </span>
                    that makes ideas come alive.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Available for work
                    </div>
                    <div> - Dublin, Ireland</div>
                </div>
                </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                    <div className="text-foreground">Full-Stack Developer</div>
                </div>
                </div>

                <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                    {["Python","Django", "React", "TypeScript", "Node.js", "Cloud Services", "C programming", "Troubleshooting"].map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Intro


