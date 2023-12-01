'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { BurgerMenuIcon, EcosolutionCenterIcon } from '../svgr'
import MobileMenu from './MobileMenu'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const storedScrollState = window.localStorage.getItem('isScrolled')
    if (storedScrollState) {
      setIsScrolled(JSON.parse(storedScrollState))
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0

      if (isScrolled !== isScroll) {
        setIsScrolled(isScroll)
        window.localStorage.setItem('isScrolled', JSON.stringify(isScroll))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setIsScrolled, isScrolled])

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  return (
    <header
      id='header'
      className={`padding-lock fixed left-0 top-0 z-50 flex w-full items-center transition-colors ${
        isScrolled && ' bg-[#fff]'
      }`}
    >
      <nav
        className='container flex w-full items-center justify-between max-xl:pb-[24px] max-xl:pt-[36px] xl:py-[24px]'
        aria-label='Global'
      >
        <Link
          href='/'
          className='group flex items-end justify-center gap-1 transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green'
        >
          <Image
            src='/icons/logo/ecosolution.svg'
            alt='Ecosolution logo'
            width={31}
            height={18}
            priority
          />
          <EcosolutionCenterIcon className='group max-sm:w-[120px]' />
          <Image
            src='/icons/logo/ecosolution-end.svg'
            alt='Ecosolution text logo'
            width={60}
            height={18}
            priority
          />
        </Link>
        <div className='flex items-center justify-center gap-3'>
          <button
            aria-label='Toggle burger menu'
            type='button'
            onClick={toggleMobileMenu}
            className='flex items-center justify-center rounded-full bg-light-green p-[11px] transition-colors duration-300 ease-in-out hover:bg-medium-green focus:bg-medium-green'
          >
            <BurgerMenuIcon />
          </button>
          <Link
            href='#contacts'
            className='group flex items-center gap-[6px] rounded-[500px] bg-medium-green px-4 py-[10px] transition-colors duration-300 ease-in-out hover:bg-primary-green focus:bg-primary-green max-[515px]:hidden'
          >
            <span className='transition-colors duration-300 ease-in-out group-hover:text-medium-green group-focus:text-medium-green'>
              Get in touch
            </span>
            <span className='flex h-[14px] w-[14px] -rotate-90 items-center justify-center rounded-full bg-primary-green transition-colors duration-300  ease-in-out group-hover:bg-medium-green group-focus:bg-medium-green'>
              <Image
                src='/icons/arrow-right.svg'
                width={10}
                height={10}
                alt='Arrow bottom'
              />
            </span>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
      </AnimatePresence>
    </header>
  )
}
