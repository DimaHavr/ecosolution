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
    <footer className=' pt-[120px] max-xl:pt-[102px] max-lg:pt-[31px] pb-[40px] max-lg:pb-[24px]'>
      <div className='container relative flex flex-col'>
        <div className='border-t-[1px] text-medium-green w-full mb-[50px] max-xl:mb-[32px]'></div>
        <div className='flex justify-between max-lg:mb-[24pxi] mb-[18px] max-lg:flex-col'>
          <div className='max-lg:flex max-lg:justify-between max-lg:mb-[31px] items-end'>
            <Link
              href='/'
              className='flex justify-center items-end gap-1 transition-colors duration-300 ease-in-out hover:text-medium-green focus:text-medium-green'
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
              href={'#main'}
              className='p-[8px] bg-medium-green rounded-full lg:hidden'
            >
              <ArrowIcon className='rotate-90 w-[16px] h-[16px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
            </Link>
          </div>
          <div className='flex justify-between xl:w-[458px] max-xl:gap-[258px] max-lg:w-full max-lg:justify-center'>
            <ul className='flex  gap-[8px]'>
              <li>
                <a
                  className='text-xl'
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FacebookIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
                </a>
              </li>
              <li>
                <a
                  className='text-xl'
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <InstagramIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out hover:stroke-medium-green focus:stroke-medium-green' />
                </a>
              </li>
            </ul>
            <Link
              href={'#main'}
              className='group p-[8px] bg-medium-green rounded-full max-lg:hidden transition-colors duration-300 ease-in-out hover:bg-primary-green focus:bg-primary-green'
            >
              <ArrowIcon className='rotate-90 w-[16px] h-[16px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
            </Link>
          </div>
        </div>
        <div className='flex lg:justify-between max-lg:flex-col max-xl:gap-[55px] xl:gap-[165px] max-lg:gap-[16px]'>
          <a
            href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
            target='_blank'
            rel='noopener noreferrer'
            className='font-firaSans font-normal transition-colors ease-in-out  duration-300 hover:text-medium-green focus:text-medium-green max-lg:text-center'
          >
            79005, Ukraine, Lviv street. Shota Rustaveli, 7
          </a>
          <div className='flex justify-between max-lg:w-full lg:gap-[55px] xl:gap-[165px] max-lg:flex-col max-lg:items-center max-lg:gap-[16px]'>
            <a
              className='text-base text-primary-green font-firaSans transition-colors ease-in-out  duration-300 hover:text-medium-green focus:text-medium-green'
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
