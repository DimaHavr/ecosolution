'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { casesData } from '@/utils/json/data'

import { ArrowIcon } from './svgr'

const CasesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex)
  }
  return (
    <section
      id='cases'
      className='pt-[120px] max-xl:pt-[100px] max-lg:pt-[35px]'
    >
      <div className='container flex flex-col gap-[120px] max-xl:gap-[38px] max-lg:gap-[24px]'>
        <div className='relative  flex justify-between max-lg:flex-col max-lg:gap-[24px]'>
          <p className=' w-[398px] text-start font-oswald text-[48px] uppercase leading-[48px] max-xl:w-[264px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:w-[264px] max-lg:text-[28px] max-lg:leading-[28px]'>
            Successful cases of our company
          </p>
          <div className='absolute left-1/2 top-0 h-full translate-x-1/2 border-l-[1px] text-medium-green max-lg:hidden' />
          <div className='flex items-end max-lg:justify-between  lg:gap-[125px] xl:gap-[131px]'>
            <p className='text-[28px] font-light'>
              {currentSlide < 9 ? `0${currentSlide + 1}` : currentSlide + 1}
              <span className=' text-mid-grey'>
                /
                {casesData.length < 10
                  ? `0${casesData.length}`
                  : casesData.length}
              </span>
            </p>
            <div className='flex gap-[24px] max-xl:gap-[12px] max-lg:gap-[10px]'>
              <button
                aria-label='Prev slide'
                type='button'
                className='slider-prev-cases-section-btn group rounded-full border-[1px] p-[24px] transition-colors duration-300 ease-in-out hover:border-medium-green focus:border-medium-green max-xl:p-[15px] max-sm:p-[8px]'
              >
                <ArrowIcon className='h-[36px] w-[36px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
              </button>
              <button
                aria-label='Next slide'
                type='button'
                className='slider-next-cases-section-btn group rounded-full border-[1px] p-[24px] transition-colors duration-300 ease-in-out hover:border-medium-green focus:border-medium-green max-xl:p-[15px] max-sm:p-[8px]'
              >
                <ArrowIcon className='h-[36px] w-[36px] rotate-180 stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          initialSlide={0}
          grabCursor
          loop
          spaceBetween={40}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
            },
            1560: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            nextEl: '.slider-next-cases-section-btn',
            prevEl: '.slider-prev-cases-section-btn',
          }}
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
        >
          {casesData.map(item => {
            return (
              <SwiperSlide key={item.id}>
                <Link href='/#' className='flex justify-center'>
                  <div className='group h-auto w-[596px] max-xl:w-[343px] max-lg:w-[320px] max-sm:w-full'>
                    <Image
                      className='h-[295px] w-full max-xl:h-[170px]'
                      src={item.img}
                      width={596}
                      height={294}
                      alt={item.imgAlt}
                    />
                    <div className='flex w-full flex-col gap-[33px] bg-light-grey px-[48px] pb-[36px] pt-[38px] max-xl:gap-[14px] max-xl:px-[12px] max-xl:pb-[12px]  max-xl:pt-[26px] max-lg:gap-[11px] max-lg:pb-[12px]'>
                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col max-xl:h-[72px] max-xl:max-w-[230px]'>
                          <p className='max-xl:tracking-tighter-[-0.8px] text-start text-xl  max-xl:text-lg max-lg:max-w-[175px] max-lg:text-md max-lg:leading-[20px] max-lg:tracking-[-0.72px]'>
                            {item.address}
                          </p>
                          <p className='max-xl:tracking-tighter-[-0.8px] text-start text-xl  max-xl:text-lg max-lg:max-w-[175px] max-lg:text-md max-lg:leading-[20px] max-lg:tracking-[-0.72px]'>
                            {item.company}
                          </p>
                        </div>
                        <div className='rotate-180 rounded-full bg-medium-green p-[16px] transition-colors duration-300 ease-in-out group-hover:bg-primary-green group-focus:bg-primary-green'>
                          <ArrowIcon className='h-[28px] w-[28px] -rotate-45 stroke-primary-green stroke-[2px] transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
                        </div>
                      </div>
                      <div className='flex flex-col gap-[24px] max-xl:gap-[13px]'>
                        <div className=' w-full border-b-[1px] text-medium-green' />
                        <div className='relative line-clamp-1 flex items-center justify-between max-xl:text-sm max-lg:text-xs'>
                          <p>{item.desc}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default CasesSection
