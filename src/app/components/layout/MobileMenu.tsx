'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useCallback, useRef } from 'react'

import useCustomScrollbarLock from '@/hooks/useCustomScrollbarLock'
import useGetHash from '@/hooks/useGetHash'

import { ArrowIcon, CloseIcon, FacebookIcon, InstagramIcon } from '../svgr'

interface MobileMenuProps {
  toggleMobileMenu: () => void
}
const MobileMenu: React.FC<MobileMenuProps> = ({ toggleMobileMenu }) => {
  const activeHash = useGetHash()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const onBackdropCloseMobileMenu = useCallback(
    (event: { target: any; currentTarget: any }) => {
      if (event.target === event.currentTarget) {
        toggleMobileMenu()
      }
    },
    [toggleMobileMenu],
  )

  const handleEscKeyPressContent = useCallback(
    (event: { code: string }) => {
      if (event.code === 'Escape') {
        toggleMobileMenu()
      }
    },
    [toggleMobileMenu],
  )

  useCustomScrollbarLock({ handleEscKeyPressContent })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ transition: { duration: 0.1 } }}
      ref={mobileMenuRef}
      onClick={onBackdropCloseMobileMenu}
      className='absolute left-0 top-0 z-10 h-[100dvh] w-full overflow-y-auto overflow-x-hidden bg-bg-overlay backdrop-blur-[2px] '
    >
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0, transition: { duration: 0.3 } }}
        exit={{ x: 500, transition: { duration: 0.3 } }}
        className='fixed right-0 top-0 z-10 m-[30px] flex w-[365px] flex-col justify-between rounded-[25px] bg-bg-menu p-[24px] backdrop-blur-[12.5px] max-md:m-[20px] max-md:w-[320px] max-sm:w-[280px] max-sm:p-[14px]'
      >
        <div className='flex h-[80dvh] flex-col overflow-auto'>
          <div className='mb-[6px] flex items-center text-white'>
            <button
              className='group flex items-center '
              type='button'
              onClick={toggleMobileMenu}
            >
              <CloseIcon className='stroke-white stroke-[1.5px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
              <p className='transition-colors duration-300 ease-in-out group-hover:text-medium-green group-focus:text-medium-green'>
                close
              </p>
            </button>
          </div>
          <div className='mb-[16px] w-full border-b-[1px] text-grey' />
          <ul className='flex flex-col justify-start gap-[8px]'>
            <li>
              <Link
                className={`group flex items-center gap-[8px] text-xl transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green ${
                  activeHash === 'main' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href='#main'
              >
                <p>Main</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`h-[16px] w-[16px] -rotate-45 transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
                      activeHash === 'main'
                        ? 'stroke-white'
                        : 'stroke-primary-green'
                    }`}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`group flex items-center gap-[8px] text-xl transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green ${
                  activeHash === 'about' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href='#about'
              >
                <p>About</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`h-[16px] w-[16px] -rotate-45 transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
                      activeHash === 'about'
                        ? 'stroke-white'
                        : 'stroke-primary-green'
                    }`}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`group flex items-center gap-[8px] text-xl transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green ${
                  activeHash === 'cases' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href='#cases'
              >
                <p>Cases</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`h-[16px] w-[16px] -rotate-45 transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
                      activeHash === 'cases'
                        ? 'stroke-white'
                        : 'stroke-primary-green'
                    }`}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`group flex items-center gap-[8px] text-xl transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green ${
                  activeHash === 'faq' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href='#faq'
              >
                <p className='uppercase'>Faq</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`h-[16px] w-[16px] -rotate-45 transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
                      activeHash === 'faq'
                        ? 'stroke-white'
                        : 'stroke-primary-green'
                    }`}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`group flex items-center gap-[8px] text-xl transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green ${
                  activeHash === 'contacts' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href='#contacts'
              >
                <p className='capitalize'> Contact us</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`h-[16px] w-[16px] -rotate-45 transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
                      activeHash === 'contacts'
                        ? 'stroke-white'
                        : 'stroke-primary-green'
                    }`}
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <ul className='flex  gap-[8px]'>
          <li>
            <a
              aria-label='Facebook link'
              className='text-xl'
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon className='stroke-white stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
            </a>
          </li>
          <li>
            <a
              aria-label='Instagram link'
              className='text-xl'
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='stroke-white stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu
