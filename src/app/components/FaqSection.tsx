/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { faqData } from '@/utils/json/data'

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number>(0)

  const handleItemClick = (index: any) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section
      id='faq'
      className='pt-[120px] max-xl:pt-[106px]  max-lg:pt-[34px]'
    >
      <div className='container flex gap-[180px] max-xl:gap-[22px] max-lg:flex-col max-lg:gap-[30px] lg:items-stretch'>
        <p className=' font-oswald text-[28px] uppercase leading-[28px] max-lg:text-center  max-md:w-[300px] max-md:text-start lg:hidden'>
          Frequently Asked Questions
        </p>
        <ul className='flex w-[596px] flex-col gap-[24px] max-xl:w-[342px] max-lg:w-full xl:gap-[28px]'>
          {faqData.map((item, index) => (
            <li
              className={`flex w-full cursor-pointer flex-col gap-[10px] lg:gap-[16px] xl:gap-[27px] ${
                openItem === index ? 'open' : ''
              }`}
              key={item.id}
              onClick={() => handleItemClick(index)}
            >
              <div className='w-full border-b-[1px] text-medium-green' />
              <div className='flex w-full justify-between'>
                <div className='flex flex-col gap-[24px] max-lg:gap-[20px]'>
                  <div className='flex items-center justify-start gap-[24px] max-xl:gap-[16px] max-lg:gap-[8px] '>
                    {openItem === index ? (
                      <Image
                        className='max-lg:h-[16px] max-lg:w-[16px]'
                        src='/icons/minus.svg'
                        width={28}
                        height={28}
                        alt='Arrow bottom'
                      />
                    ) : (
                      <Image
                        className='max-lg:h-[16px] max-lg:w-[16px]'
                        src='/icons/add.svg'
                        width={28}
                        height={28}
                        alt='Arrow bottom'
                      />
                    )}
                    <h2 className='text-xl max-xl:text-md lg:leading-[18px] lg:tracking-[0.04px]   xl:leading-[28px]'>
                      {item.question}
                    </h2>
                  </div>
                  {openItem === index && (
                    <AnimatePresence>
                      <motion.p
                        initial={{ opacity: 0, translateY: -50 }}
                        animate={{
                          opacity: 1,
                          translateY: 0,
                          transition: { duration: 0.3 },
                        }}
                        exit={{
                          opacity: 0,
                          translateY: 50,
                          transition: { duration: 0.3 },
                        }}
                        className='w-full self-end leading-[17px] max-xl:text-sm max-lg:pl-[22px]  lg:pl-[43px] lg:tracking-[-0.64px] xl:pl-[50px]'
                      >
                        {item.answer}
                      </motion.p>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className=' flex flex-col items-center justify-between'>
          <p className=' w-[398px] text-start font-oswald text-[48px] uppercase leading-[48px]  max-xl:w-[347px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:hidden'>
            Frequently Asked Questions
          </p>
          <div className='flex flex-col  items-center justify-center gap-[12px]'>
            <p className=' text-xl max-xl:text-md max-lg:text-center'>
              Didnt find the answer to your question?
            </p>
            <Link
              href='#contacts'
              className='group flex items-center gap-[6px] rounded-[500px] bg-medium-green px-4 py-[10px] transition-colors duration-300 ease-in-out hover:bg-primary-green focus:bg-primary-green'
            >
              <span className=' capitalize transition-colors duration-300 ease-in-out group-hover:text-medium-green group-focus:text-medium-green'>
                Contact Us
              </span>
              <span className='flex h-[14px] w-[14px] -rotate-90 items-center justify-center rounded-full bg-primary-green transition-colors duration-300  ease-in-out group-hover:bg-medium-green group-focus:bg-medium-green'>
                <Image
                  className='hidden group-hover:flex'
                  src='/icons/arrow-right.svg'
                  width={10}
                  height={10}
                  alt='Arrow bottom'
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
