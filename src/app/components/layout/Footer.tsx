import Image from 'next/image'
import Link from 'next/link'

import {
  ArrowIcon,
  EcosolutionCenterIcon,
  FacebookIcon,
  InstagramIcon,
} from '../svgr'

const Footer = () => {
  return (
    <footer className=' pb-[40px] pt-[120px] max-xl:pt-[102px] max-lg:pb-[24px] max-lg:pt-[31px]'>
      <div className='container relative flex flex-col'>
        <div className='mb-[50px] w-full border-t-[1px] text-medium-green max-xl:mb-[32px]' />
        <div className='mb-[18px] flex justify-between max-lg:mb-[24pxi] max-lg:flex-col'>
          <div className='items-end max-lg:mb-[31px] max-lg:flex max-lg:justify-between'>
            <Link
              href='/'
              className='flex items-end justify-center gap-1 transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green'
            >
              <Image
                className='max-[345px]:w-[24px]'
                src='/icons/logo/ecosolution.svg'
                alt='Ecosolution logo'
                width={31}
                height={18}
                priority
              />
              <EcosolutionCenterIcon className='group' />
              <Image
                className='max-[345px]:w-[45px]'
                src='/icons/logo/ecosolution-end.svg'
                alt='Ecosolution text logo'
                width={60}
                height={18}
                priority
              />
            </Link>
            <Link
              href='#main'
              className='rounded-full bg-medium-green p-[8px] lg:hidden'
            >
              <ArrowIcon className='h-[16px] w-[16px] rotate-90 stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
            </Link>
          </div>
          <div className='flex justify-between max-xl:gap-[258px] max-lg:w-full max-lg:justify-center xl:w-[458px]'>
            <ul className='flex  gap-[8px]'>
              <li>
                <a
                  aria-label='Facebook link'
                  className='text-xl'
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
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
                  <InstagramIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
                </a>
              </li>
            </ul>
            <Link
              href='#main'
              className='group rounded-full bg-medium-green p-[8px] transition-colors duration-300 ease-in-out hover:bg-primary-green focus:bg-primary-green max-lg:hidden'
            >
              <ArrowIcon className='h-[16px] w-[16px] rotate-90 stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
            </Link>
          </div>
        </div>
        <div className='flex max-xl:gap-[55px] max-lg:flex-col max-lg:gap-[16px] lg:justify-between xl:gap-[165px]'>
          <a
            href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
            target='_blank'
            rel='noopener noreferrer'
            className='font-firaSans font-normal transition-colors duration-300  ease-in-out hover:text-medium-green focus:text-medium-green max-lg:text-center'
          >
            79005, Ukraine, Lviv street. Shota Rustaveli, 7
          </a>
          <div className='flex justify-between max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:gap-[16px] lg:gap-[55px] xl:gap-[165px]'>
            <a
              className='font-firaSans text-base text-primary-green transition-colors duration-300  ease-in-out hover:text-medium-green focus:text-medium-green'
              href='mailto:office@ecosolution.com'
            >
              office@ecosolution.com
            </a>
            <p>ecosolution © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
