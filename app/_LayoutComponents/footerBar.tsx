import React from 'react'

const FooterBar = () => {
  return (
    <div className='min-h-14 w-full py-4 border-t border-muted-foreground flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center text-center sm:text-left'>
        <h1 className='text-sm sm:text-base text-foreground'>© 2025 Neil Joseph | All Rights Reserved</h1>
        <div className="text-xs text-muted-foreground">Built using some interesting technologies by Neil J</div>
    </div>
  )
}

export default FooterBar