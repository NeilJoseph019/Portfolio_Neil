'use client'

import React, { useEffect, useState } from 'react'
import { navSections } from './nav'

interface MobileNavProps {
  activeSection: string,
}

const MobileNav = ({ activeSection }: MobileNavProps) => {

  const [open, setOpen] = useState(false)

  // Close on Escape and lock page scroll while the menu is open
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const goTo = (section: string) => {
    setOpen(false)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        className="fixed right-4 top-4 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur cursor-pointer"
      >
        <span className="relative block h-3.5 w-5">
          <span className={`absolute left-0 h-0.5 w-5 rounded bg-foreground transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
          <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute left-0 h-0.5 w-5 rounded bg-foreground transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
        </span>
      </button>

      <nav
        id="mobile-nav-menu"
        aria-label="Sections"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {navSections.map((section) => (
          <button
            key={section}
            type="button"
            tabIndex={open ? 0 : -1}
            onClick={() => goTo(section)}
            className={`w-full max-w-xs cursor-pointer rounded-lg px-6 py-3 text-center text-2xl font-light transition-colors duration-300 ${
              activeSection === section
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeSection === section && (
              <span className="mr-3 inline-block size-2 rounded-full bg-emerald-500 align-middle" />
            )}
            {section}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default MobileNav
