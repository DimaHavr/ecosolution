'use client'

import { useEffect, useState } from 'react'

const formatNumberWithDots = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const ElectricitySection: React.FC = () => {
  const [electricityCount, setElectricityCount] = useState<number>(1134147814)

  useEffect(() => {
    const startDate = new Date('2023-12-01T00:00:00Z')
    const currentTime = new Date()
    const timeDifferenceInSeconds = Math.floor(
      (currentTime.getTime() - startDate.getTime()) / 1000,
    )

    setElectricityCount(prevCount => prevCount + timeDifferenceInSeconds + 1)

    const interval = setInterval(() => {
      setElectricityCount(prevCount => prevCount + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='pt-[120px] max-xl:pt-[100px] max-lg:pt-[38px]'>
      <div className='container flex flex-col items-center justify-center gap-[16px] max-xl:gap-[24px]'>
        <p className=' w-[491px] text-center font-oswald text-[48px] uppercase leading-[48px] max-xl:w-[368px] max-xl:text-[36px] max-xl:leading-[36px]  max-lg:w-[286px] max-lg:text-[28px] max-lg:leading-[28px]'>
          Electricity we produced for all time
        </p>

        <div className='flex h-[87px] border-l-[1px] text-medium-green max-lg:h-[48px]' />

        <div className='relative max-xl:w-[602px] max-lg:w-[303px] max-lg:gap-[8px] max-sm:w-[260px] xl:w-[975px]'>
          <p className='items-center font-oswald text-[165px] font-bold uppercase leading-[165px] text-medium-green max-xl:text-[100px] max-xl:leading-[100px] max-lg:text-[48px] max-lg:leading-[48px] max-sm:text-[38px] max-sm:leading-[38px]'>
            {formatNumberWithDots(electricityCount)}
          </p>
          <span className='absolute top-1/2 -translate-y-1/2  font-oswald text-[48px]  leading-[48px] tracking-[0.1px] text-primary-green max-xl:text-[28px] max-xl:leading-[28px] max-lg:right-[-10px] max-lg:text-[24px] max-lg:leading-[24px] max-sm:right-[0px] lg:right-[-10px] xl:right-[-35px]'>
            kWh
          </span>
        </div>
      </div>
    </section>
  )
}

export default ElectricitySection
