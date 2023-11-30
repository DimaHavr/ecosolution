import React from 'react'
import ContactUsForm from './ContactUsForm'
import { CallIcon, FacebookIcon, InstagramIcon, MapIcon, SmsIcon } from './svgr'

const ContactUsSection = () => {
  return (
    <section
      id='contacts'
      className='pt-[120px] overflow-x-hidden max-lg:pt-[34px] max-xl:pt-[100px]'
    >
      <div className='container flex flex-col justify-center items-center gap-[120px]  max-xl:gap-[42px] max-lg:gap-[24px]'>
        <p className=' uppercase text-[48px] leading-[48px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:text-[28px] max-lg:leading-[28px] font-oswald w-[491px] max-lg:w-[131px] text-center'>
          Contact us
        </p>
        <div className=' flex justify-between w-full max-lg:flex-col max-lg:gap-[24px] max-xl:gap-[12px]'>
          <div className='flex flex-col gap-[32px] max-xl:gap-[24px] '>
            <div className='flex flex-col gap-[16px] max-xl:gap-[8px] justify-start'>
              <p>Phone:</p>
              <ul className='flex flex-col gap-[12px] '>
                <li className='flex justify-start items-center gap-[8px]'>
                  <a
                    className='group flex justify-start items-center gap-[8px]'
                    href='tel:380931234567'
                  >
                    <CallIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                    <span className='text-xl max-xl:text-lg'>
                      38 (098) 12 34 567
                    </span>
                  </a>
                </li>
                <li className='flex justify-start items-center gap-[8px]'>
                  <a
                    className='group flex justify-start items-center gap-[8px]'
                    href='tel:380931234567'
                  >
                    <CallIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                    <span className='text-xl max-xl:text-lg'>
                      38 (098) 12 34 567
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-[16px]  max-xl:gap-[8px] justify-start'>
              <p>E-mail:</p>
              <a
                className='group flex justify-start items-center gap-[8px]'
                href='mailto:office@ecosolution.com'
              >
                <SmsIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                <span className='text-xl max-xl:text-lg'>
                  office@ecosolution.com
                </span>
              </a>
            </div>
            <div className='flex flex-col gap-[16px] max-xl:gap-[8px] justify-start'>
              <p>Address:</p>
              <a
                className='group flex justify-start items-center gap-[8px]'
                href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MapIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                <span className='text-xl max-xl:text-lg max-xl:w-[220px] max-lg:w-[210px]'>
                  79005, Ukraine, Lviv street. Shota Rustaveli, 7
                </span>
              </a>
            </div>
            <div className='flex flex-col gap-[16px] max-xl:gap-[8px] justify-start'>
              <p>Social Networks:</p>
              <ul className='flex max-xl:gap-[40px] max-xl:p-[10px]  gap-[8px]'>
                <li>
                  <a
                    className='text-xl max-xl:text-lg'
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FacebookIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out hover:stroke-medium-green group-focus:stroke-medium-green' />
                  </a>
                </li>
                <li>
                  <a
                    className='text-xl max-xl:text-lg'
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <InstagramIcon className='stroke-[1.5px] stroke-primary-green transition-colors duration-300 ease-in-out hover:stroke-medium-green group-focus:stroke-medium-green' />
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
