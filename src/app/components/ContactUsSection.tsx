import React from 'react'

import ContactUsForm from './ContactUsForm'
import { CallIcon, FacebookIcon, InstagramIcon, MapIcon, SmsIcon } from './svgr'

const ContactUsSection = () => {
  return (
    <section
      id='contacts'
      className='overflow-x-hidden pt-[120px] max-xl:pt-[100px] max-lg:pt-[34px]'
    >
      <div className='container flex flex-col items-center justify-center gap-[120px]  max-xl:gap-[42px] max-lg:gap-[24px]'>
        <p className=' w-[491px] text-center font-oswald text-[48px] uppercase leading-[48px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:w-[131px] max-lg:text-[28px] max-lg:leading-[28px]'>
          Contact us
        </p>
        <div className=' flex w-full justify-between max-xl:gap-[12px] max-lg:flex-col max-lg:gap-[24px]'>
          <div className='flex flex-col gap-[32px] max-xl:gap-[24px] '>
            <div className='flex flex-col justify-start gap-[16px] max-xl:gap-[8px]'>
              <p>Phone:</p>
              <ul className='flex flex-col gap-[12px] '>
                <li className='flex items-center justify-start gap-[8px]'>
                  <a
                    className='group flex items-center justify-start gap-[8px]'
                    href='tel:380931234567'
                  >
                    <CallIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                    <span className='text-xl max-xl:text-lg'>
                      38 (098) 12 34 567
                    </span>
                  </a>
                </li>
                <li className='flex items-center justify-start gap-[8px]'>
                  <a
                    className='group flex items-center justify-start gap-[8px]'
                    href='tel:380931234567'
                  >
                    <CallIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                    <span className='text-xl max-xl:text-lg'>
                      38 (098) 12 34 567
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col justify-start  gap-[16px] max-xl:gap-[8px]'>
              <p>E-mail:</p>
              <a
                className='group flex items-center justify-start gap-[8px]'
                href='mailto:office@ecosolution.com'
              >
                <SmsIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                <span className='text-xl max-xl:text-lg'>
                  office@ecosolution.com
                </span>
              </a>
            </div>
            <div className='flex flex-col justify-start gap-[16px] max-xl:gap-[8px]'>
              <p>Address:</p>
              <a
                className='group flex items-center justify-start gap-[8px]'
                href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MapIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                <span className='text-xl max-xl:w-[220px] max-xl:text-lg max-lg:w-[210px]'>
                  79005, Ukraine, Lviv street. Shota Rustaveli, 7
                </span>
              </a>
            </div>
            <div className='flex flex-col justify-start gap-[16px] max-xl:gap-[8px]'>
              <p>Social Networks:</p>
              <ul className='flex gap-[8px] max-xl:gap-[40px]  max-xl:p-[10px]'>
                <li>
                  <a
                    aria-label='Facebook link'
                    className='text-xl max-xl:text-lg'
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FacebookIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green group-focus:stroke-medium-green' />
                  </a>
                </li>
                <li>
                  <a
                    aria-label='Instagram link'
                    className='text-xl max-xl:text-lg'
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <InstagramIcon className='stroke-primary-green stroke-[1.5px] transition-colors duration-300 ease-in-out hover:stroke-medium-green group-focus:stroke-medium-green' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ContactUsForm />
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
