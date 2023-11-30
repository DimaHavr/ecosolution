import React from 'react'

const ElectricitySection = () => {
  return (
    <section className='pt-[120px] max-lg:pt-[38px] max-xl:pt-[100px]'>
      <div className='container flex flex-col justify-center items-center gap-[16px] max-xl:gap-[24px]'>
        <p className=' uppercase text-[48px] leading-[48px] max-xl:text-[36px] max-xl:leading-[36px] max-xl:w-[368px] max-lg:text-[28px] max-lg:leading-[28px] max-lg:w-[286px]  font-oswald w-[491px] text-center'>
          Electricity we produced for all time
        </p>

        <div className='flex border-l-[1px] text-medium-green h-[87px] max-lg:h-[48px]'></div>

        <div className='flex justify-center items-center  gap-[24px] max-lg:gap-[8px]'>
          <p className='text-medium-green items-center uppercase max-lg:text-[48px] max-lg:leading-[48px] max-xl:text-[100px] max-xl:leading-[100px] max-sm:text-[38px] max-sm:leading-[38px] text-[165px] font-bold leading-[165px] tracking-[0.1px] font-oswald'>
            1.134.147.814
          </p>
          <span className='text-[48px] text-primary-green max-lg:text-[24px] max-lg:leading-[24px] max-xl:text-[28px] max-xl:leading-[28px]  leading-[48px] tracking-[0.1px] font-oswald'>
            kWh
          </span>
        </div>
      </div>
    </section>
  )
}

export default ElectricitySection
