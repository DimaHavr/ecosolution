'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
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
      className='pt-[120px] max-lg:pt-[35px] max-xl:pt-[100px]'
    >
      <div className='container flex flex-col gap-[120px] max-xl:gap-[38px] max-lg:gap-[24px]'>
        <div className='relative  flex justify-between max-lg:flex-col max-lg:gap-[24px]'>
          <p className=' uppercase text-[48px] max-lg:text-[28px] max-lg:leading-[28px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:w-[264px] leading-[48px] font-oswald max-xl:w-[264px] w-[398px] text-start'>
            Successful cases of our company
          </p>
          <div className='absolute top-0 left-1/2 translate-x-1/2 border-l-[1px] text-medium-green h-full max-lg:hidden'></div>
          <div className='flex items-end lg:gap-[189px]  max-lg:justify-between xl:gap-[131px]'>
            <p className='text-[28px] font-light'>
              {currentSlide < 9 ? `0${currentSlide + 1}` : currentSlide + 1}
              <span className=' text-mid-grey'>
                /
                {casesData.length < 10
                  ? `0${casesData.length}`
                  : casesData.length}
              </span>
            </p>
            <div className='flex gap-[24px] max-lg:gap-[10px] max-xl:gap-[12px]'>
              <button className='slider-prev-cases-section-btn group p-[24px] max-sm:p-[8px] max-xl:p-[15px] border-[1px] rounded-full transition-colors ease-in-out duration-300 hover:border-medium-green focus:border-medium-green'>
                <ArrowIcon className='w-[36px] h-[36px] stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
              </button>
              <button className='group slider-next-cases-section-btn p-[24px] max-sm:p-[8px] max-xl:p-[15px] border-[1px] rounded-full transition-colors ease-in-out duration-300 hover:border-medium-green focus:border-medium-green'>
                <ArrowIcon className='w-[36px] h-[36px] rotate-180 stroke-primary-green transition-colors duration-300 ease-in-out group-hover:stroke-medium-green group-focus:stroke-medium-green' />
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
              <SwiperSlide key={item.date}>
                <div className='flex justify-center'>
                  <div className='w-[596px] max-lg:w-[320px] max-xl:w-[343px] max-sm:w-full'>
                    <Image
                      className='w-full h-[295px] max-xl:h-[170px]'
                      src={item.img}
                      width={596}
                      height={294}
                      alt='Maximize circle'
                    />
                    <div className='w-full bg-light-grey pt-[38px] max-lg:gap-[11px] px-[48px] pb-[36px] max-xl:gap-[14px] max-xl:pb-[12px] max-xl:px-[12px] max-xl:pt-[26px] max-lg:pb-[12px]  flex flex-col gap-[33px]'>
                      <div className='flex justify-between items-center'>
                        <div className='flex flex-col max-xl:max-w-[230px] max-xl:h-[72px]'>
                          <p className='max-lg:max-w-[175px] text-xl max-xl:text-lg  max-lg:text-md text-start max-lg:leading-[20px] max-lg:tracking-[-0.72px] max-xl:tracking-tighter-[-0.8px]'>
                            {item.address}
                          </p>
                          <p className='max-lg:max-w-[175px] text-xl max-xl:text-lg  max-lg:text-md text-start max-lg:leading-[20px] max-lg:tracking-[-0.72px] max-xl:tracking-tighter-[-0.8px]'>
                            {item.company}
                          </p>
                        </div>
                        <button className='p-[16px] bg-medium-green rounded-full rotate-180'>
                          <Image
                            className='-rotate-45'
                            src={'/icons/arrow-right.svg'}
                            width={28}
                            height={28}
                            alt='Arrow right-up'
                          />
                        </button>
                      </div>
                      <div className='flex flex-col gap-[24px] max-xl:gap-[13px]'>
                        <div className=' border-b-[1px] text-medium-green w-full'></div>
                        <div className='relative flex justify-between items-center max-lg:text-xs max-xl:text-sm line-clamp-1'>
                          <p>{item.desc}</p>
                          <p>{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default CasesSection
