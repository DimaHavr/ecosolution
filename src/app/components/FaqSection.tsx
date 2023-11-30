'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number>(0)

  const handleItemClick = (index: any) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section
      id='faq'
      className='pt-[120px] max-lg:pt-[34px]  max-xl:pt-[106px]'
    >
      <div className='container flex gap-[180px] max-xl:gap-[22px] max-lg:gap-[30px] lg:items-stretch max-lg:flex-col'>
        <p className=' uppercase text-[28px] leading-[28px] font-oswald max-md:w-[300px]  max-md:text-start max-lg:text-center lg:hidden'>
          Frequently Asked Questions
        </p>
        <ul className='flex flex-col w-[596px] max-xl:w-[342px] max-lg:w-full gap-[24px]'>
          {faqData.map((item, index) => (
            <li
              className={`flex flex-col gap-[10px] xl:gap-[27px] lg:gap-[16px] w-full cursor-pointer ${
                openItem === index ? 'open' : ''
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <div className='border-b-[1px] text-medium-green w-full'></div>
              <div className='flex justify-between w-full'>
                <div className='flex flex-col gap-[24px] max-lg:gap-[20px]'>
                  <div className='flex gap-[24px] max-xl:gap-[16px] max-lg:gap-[8px] items-center justify-start '>
                    {openItem === index ? (
                      <Image
                        className='max-lg:w-[16px] max-lg:h-[16px]'
                        src={'/icons/minus.svg'}
                        width={28}
                        height={28}
                        alt='Arrow bottom'
                      />
                    ) : (
                      <Image
                        className='max-lg:w-[16px] max-lg:h-[16px]'
                        src={'/icons/add.svg'}
                        width={28}
                        height={28}
                        alt='Arrow bottom'
                      />
                    )}
                    <h2 className='text-xl max-xl:text-md xl:leading-[28px] lg:leading-[18px]   lg:tracking-[0.04px]'>
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
                        className='w-full lg:pl-[43px] xl:pl-[50px] max-lg:pl-[22px] leading-[17px]  max-xl:text-sm lg:tracking-[-0.64px] self-end'
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
        <div className=' flex flex-col justify-between items-center'>
          <p className=' uppercase text-[48px] leading-[48px] max-xl:text-[36px] max-xl:leading-[36px] max-xl:w-[347px]  font-oswald w-[398px] text-start max-lg:hidden'>
            Frequently Asked Questions
          </p>
          <div className='flex flex-col  justify-center items-center gap-[12px]'>
            <p className=' text-xl max-xl:text-md max-lg:text-center'>
              Didnt find the answer to your question?
            </p>
            <Link
              href={'#contacts'}
              className='flex group items-center gap-[6px] transition-colors ease-in-out duration-300 hover:bg-primary-green focus:bg-primary-green bg-medium-green py-[10px] px-4 rounded-[500px]'
            >
              <span className=' capitalize transition-colors ease-in-out duration-300 group-hover:text-medium-green group-focus:text-medium-green'>
                Contact Us
              </span>
              <span className='w-[14px] transition-colors ease-in-out duration-300 group-hover:bg-medium-green group-focus:bg-medium-green flex justify-center items-center -rotate-90  h-[14px] bg-primary-green rounded-full'>
                <Image
                  className='hidden group-hover:flex'
                  src={'/icons/arrow-right.svg'}
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

const faqData = [
  {
    question:
      'How do wind turbines and solar panels work together in a renewable energy system?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    question:
      'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    answer:
      'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
]

export default FaqSection
