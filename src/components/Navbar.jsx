'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({ currentPage = 'Home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work/1' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (itemName) => {
    return currentPage === itemName
  }

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'top-4 px-4' : 'top-0 px-0'}`}>
      <nav className={`mx-auto transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'w-[90%] max-w-4xl rounded-full backdrop-blur-md bg-white/90 shadow-lg py-2 px-6' 
          : 'w-full backdrop-blur-sm bg-transparent py-2 px-4 md:px-10'
      }`}>
        <div className='flex items-center justify-between w-full'>
          {/* Logo Section */}
          <div className='flex items-center text-black'>
            {/* <Image src="/logo.png" alt="logo" width={32} height={32} className='md:w-[40px] md:h-[40px]' /> */}
            <h1 className='font-medium ml-2 text-base'>Krish Jain</h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`font-medium text-xs py-3 px-5 rounded-2xl transition-all duration-200 block ${
                      isActive(item.name)
                        ? 'bg-black text-white drop-shadow-lg' 
                        : 'cursor-pointer hover:bg-black/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative'
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Desktop Right Spacer */}
          <div className='hidden md:block'></div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden'
            onClick={closeMenu}
          ></div>
        )}
      </nav>

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex flex-col h-full'>
          {/* Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-200'>
            <div className='flex items-center text-black'>
              {/* <Image src="/logo.png" alt="logo" width={32} height={32} /> */}
              <h1 className='text-sm font-medium ml-2'>Krish Jain</h1>
            </div>
            <button
              onClick={closeMenu}
              className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200'
              aria-label="Close menu"
            >
              <span className='text-2xl text-gray-600'>×</span>
            </button>
          </div>

          {/* Items */}
          <div className='flex-1 py-6'>
            <ul className='space-y-2 px-6'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`font-medium text-base py-4 px-6 rounded-2xl transition-all duration-200 block ${
                      isActive(item.name)
                        ? 'bg-black text-white drop-shadow-lg' 
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
