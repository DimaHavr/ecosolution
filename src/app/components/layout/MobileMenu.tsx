'use client'

import useCustomScrollbarLock from '@/hooks/useCustomScrollbarLock'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useCallback, useRef } from 'react'
import React from 'react'
import { ArrowIcon, CloseIcon, FacebookIcon, InstagramIcon } from '../svgr'
import useGetHash from '@/hooks/useGetHash'

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
        className='fixed top-0 right-0 z-10 flex w-[365px] max-md:w-[320px] rounded-[25px] flex-col justify-between m-[30px] backdrop-blur-[12.5px] bg-bg-menu p-[24px] max-md:m-[20px] max-sm:w-[280px] max-sm:p-[14px]'
      >
        <div className='flex h-[80dvh] flex-col overflow-auto'>
          <div className='flex items-center text-white mb-[6px]'>
            <button
              className='group flex items-center '
              type='button'
              onClick={toggleMobileMenu}
            >
              <CloseIcon className='stroke-[1.5px] stroke-white transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
              <p className='transition-colors duration-300 ease-in-out group-hover:text-medium-green group-focus:text-medium-green'>
                close
              </p>
            </button>
          </div>
          <div className='border-b-[1px] text-grey w-full mb-[16px]'></div>
          <ul className='flex flex-col gap-[8px] justify-start'>
            <li>
              <Link
                className={`transition-colors duration-300 ease-in-out group hover:text-medium-green focus:text-medium-green text-xl flex items-center gap-[8px] ${
                  activeHash === 'main' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href={'#main'}
              >
                <p>Main</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`-rotate-45 w-[16px] h-[16px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
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
                className={`transition-colors duration-300 ease-in-out group hover:text-medium-green focus:text-medium-green text-xl flex items-center gap-[8px] ${
                  activeHash === 'about' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href={'#about'}
              >
                <p>About</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`-rotate-45 w-[16px] h-[16px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
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
                className={`transition-colors duration-300 ease-in-out group hover:text-medium-green focus:text-medium-green text-xl flex items-center gap-[8px] ${
                  activeHash === 'cases' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href={'#cases'}
              >
                <p>Cases</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`-rotate-45 w-[16px] h-[16px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
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
                className={`transition-colors duration-300 ease-in-out group hover:text-medium-green focus:text-medium-green text-xl flex items-center gap-[8px] ${
                  activeHash === 'faq' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href={'#faq'}
              >
                <p className='uppercase'>Faq</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`-rotate-45 w-[16px] h-[16px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
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
                className={`transition-colors duration-300 ease-in-out group hover:text-medium-green focus:text-medium-green text-xl flex items-center gap-[8px] ${
                  activeHash === 'contacts' ? 'text-white' : 'text-grey'
                }`}
                onClick={toggleMobileMenu}
                href={'#contacts'}
              >
                <p className='capitalize'> Contact us</p>
                <span className='rotate-180'>
                  <ArrowIcon
                    className={`-rotate-45 w-[16px] h-[16px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green ${
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
              className='text-xl'
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon className='stroke-[1.5px] stroke-white transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
            </a>
          </li>
          <li>
            <a
              className='text-xl'
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='stroke-[1.5px] stroke-white transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu
