import Link from 'next/link'
import { useState, useEffect } from 'react'
import withErrorHandled from './ErrorHandler'
import Searchbox from './Searchbox'

function MobileAccordion() {
  const [open, setOpen] = useState(false)
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
  return (
    <nav className='flex flex-col items-center'>
      <NavItemsOne />
      <Searchbox />
      <NavItemsTwo />
    </nav>
  )
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
    <nav className='flex gap-10 items-center justify-between'>
      <div className='flex gap-3 items-center'>
        <NavItemsOne />
        <Searchbox />
      </div>
      <div className='flex items-center gap-3 justify-end'>
        <NavItemsTwo />
      </div>
    </nav>
  )
}

function NavItemsTwo() {
  return (
    <>
      <span className=''>
        <Link href='/login'>登录</Link>
      </span>
      <span className='border-2 rounded-2xl py-1 px-3 border-orange-400 text-orange-400'>
        <Link href='/register'>注册</Link>
      </span>
      <span className='rounded-2xl py-1 px-8 bg-orange-700 text-neutral-200'>
        <Link href='/compose'>写文章</Link>
      </span>
    </>
  )
}

function NavItemsOne({ border = false }) {
  let isOnHomePage 
  try {
    if (location.pathname === '/') isOnHomePage = true
  } catch {}
  
  return (
    <>
      <span className={isOnHomePage && 'text-orange-400'}>
        <Link href='/'>首页</Link>
      </span>
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
  return (
    <>
      <div className='block md:hidden'>
        <MobileAccordion />
      </div>
      <div className='hidden md:block'>
        <DesktopAccordion />
      </div>
    </>
  )
}

export default withErrorHandled(Adaptive)
