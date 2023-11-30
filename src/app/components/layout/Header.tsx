'use client'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import { BurgerMenuIcon, EcosolutionCenterIcon } from '../svgr'

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
        className='container flex w-full items-center xl:py-[24px] max-xl:pt-[36px] max-xl:pb-[24px] justify-between'
        aria-label='Global'
      >
        <Link
          href='/'
          className='flex group justify-center items-end gap-1 transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green'
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
        <div className='flex justify-center items-center gap-3'>
          <button
            onClick={toggleMobileMenu}
            className='flex justify-center p-[11px] items-center bg-light-green rounded-full transition-colors ease-in-out duration-300 hover:bg-medium-green focus:bg-medium-green'
          >
            <BurgerMenuIcon />
          </button>
          <Link
            href={'#contacts'}
            className='flex max-[515px]:hidden group items-center gap-[6px] transition-colors ease-in-out duration-300 hover:bg-primary-green focus:bg-primary-green bg-medium-green py-[10px] px-4 rounded-[500px]'
          >
            <span className='transition-colors ease-in-out duration-300 group-hover:text-medium-green group-focus:text-medium-green'>
              Get in touch
            </span>
            <span className='w-[14px] transition-colors ease-in-out duration-300 group-hover:bg-medium-green group-focus:bg-medium-green flex justify-center items-center -rotate-90  h-[14px] bg-primary-green rounded-full'>
              <Image
                src={'/icons/arrow-right.svg'}
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
