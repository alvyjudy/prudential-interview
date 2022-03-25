import Link from 'next/link'
import { useState, useEffect } from 'react'
import withErrorHandled from './ErrorHandler'

function MobileAccordion() {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        onClick={() => {
          setOpen(prev => !prev)
        }}
      >
        <HamburgerIcon />
      </button>
      {open ? <MobileVerticalNav /> : null}
    </div>
  )
}

function MobileVerticalNav() {
  return <nav className='flex flex-col items-center'>
    <NavItems/>
  </nav>
}

/**
 * reference: https://larainfo.com/blogs/tailwind-css-hamburger-menu-examples
 */
function HamburgerIcon() {
  return (
    <div className='p-4 space-y-2 bg-gray-600 rounded shadow w-16'>
      <span className='block w-8 h-0.5 bg-gray-100 animate-pulse'></span>
      <span className='block w-8 h-0.5 bg-gray-100 animate-pulse'></span>
      <span className='block w-8 h-0.5 bg-gray-100 animate-pulse'></span>
    </div>
  )
}

function DesktopAccordion() {
  return (
    <nav className='flex gap-10'>
      <NavItems />
    </nav>
  )
}

function NavItems({
  border=false
}) {
  return (
    <>
      <Link href='/'>首页</Link>
      <Link href='/'>下载APP</Link>
      <Link href='/'>会员</Link>
      <Link href='/'>IT技术</Link>
    </>
  )
}

function Adaptive() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false)
    }
  }, [])
  return isMobile ? <MobileAccordion /> : <DesktopAccordion />
}

export default withErrorHandled(Adaptive)
