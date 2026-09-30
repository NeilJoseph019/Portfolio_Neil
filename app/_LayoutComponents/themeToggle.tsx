'use client'

import React from 'react'
import { useTheme } from 'next-themes'

// Both icons are always rendered and swapped with the `dark:` variant, so the
// server and client HTML match and there is no flash or hydration mismatch.
const ThemeToggle = () => {

  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 left-4 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors duration-300 hover:border-muted-foreground/50 cursor-pointer"
    >
      <span className="sr-only">Toggle light and dark mode</span>

      {/* Sun: shown in dark mode (click for light) */}
      <svg
        aria-hidden="true"
        className="hidden size-5 dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon: shown in light mode (click for dark) */}
      <svg
        aria-hidden="true"
        className="block size-5 dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}

export default ThemeToggle
