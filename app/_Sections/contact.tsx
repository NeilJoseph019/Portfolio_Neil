import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React, { useState } from 'react'

interface contactProps {
  sectionsRef: React.RefObject<(HTMLElement | null)[]>
  index: number
}

const Contact = ({sectionsRef, index} : contactProps) => {
  
  const email = "neiljoseph.125@gmail.com" 

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset "Copied!" text after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }

  return (
    <section 
    id="Contact" 
    ref={(el) =>{ 
      (sectionsRef.current[index] = el)
    }} 
    className="py-20 sm:py-32 opacity-0 transition-opacity duration-700 z-0">

      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Slide Into My Inbox (Professionally, Of Course) …or Just Stare at This Page Mysteriously
            </p>

            <div className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2 p-3 rounded-md border border-muted-foreground/60 bg-foreground/5 w-full max-w-md">
                    <span className="text-sm font-mono flex-1 truncate">{email}</span>
                    <Button variant="outline" size="sm" onClick={copyToClipboard} aria-label="Copy email to clipboard">
                      {copied ? "Copied!" : <img src="/copyToClipboard.svg" alt="Copy to clipboard" className="w-4 h-4 dark:invert" />}
                    </Button>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "GitHub", handle: "@NeilJoseph019", url: "https://github.com/NeilJoseph019" },
              { name: "LinkedIn", handle: "neil-joseph2020", url: "https://www.linkedin.com/in/neil-joseph2020" },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
              >
                <div className="space-y-2">
                  <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {social.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{social.handle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact