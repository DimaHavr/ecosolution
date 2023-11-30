import Image from 'next/image'

const AboutSection = () => {
  return (
    <section
      id='about'
      className='pt-[120px] max-lg:pt-[39px] max-xl:pt-[99px] '
    >
      <div className='container flex flex-col'>
        <div className='relative flex max-lg:flex-col max-lg:gap-[22px]  justify-between items-center max-xl:items-start'>
          <div className='absolute  top-0 left-1/2 translate-x-1/2 border-l-[1px] text-medium-green h-full max-lg:hidden'></div>
          <h2 className=' uppercase max-lg:w-[320px] max-xl:w-[272px] max-sm:w-[280px] text-[48px] max-xl:text-[36px] max-xl:leading-[36px] leading-[48px] max-lg:text-[28px] max-lg:leading-[28px] tracking-[0.1px] font-oswald xl:w-[365px]'>
            Main values of our company
          </h2>
          <p className='w-[459px] max-lg:w-full max-xl:w-[342px]'>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the worlds energy needs.
          </p>
        </div>
        <div className='grid grid-rows-2 max-[620px]:grid-rows-1 max-[620px]:grid-cols-4 max-lg:grid-cols-2 grid-cols-4 max-xl:gap-[24px] gap-[49px] mt-[123px] max-lg:mt-[34px] max-xl:mt-[98px] max-lg:justify-items-center'>
          <div className='row-start-1 col-start-1  row-end-2 col-end-2 '>
            <div className='flex flex-col w-[274px] h-[339px] max-lg:w-[148px] max-xl:w-[159px] max-xl:h-[197px] max-lg:pt-[13px] max-lg:px-[12px] pt-[48px] px-[24px] max-xl:px-[12px] max-xl:pt-[12px] bg-light-grey'>
              <div className='mb-[94px] max-xl:mb-[51px] max-lg:mb-[33px] flex gap-2 items-center'>
                <Image
                  className='max-xl:w-[16px] max-xl:h-[16px]'
                  src={'/icons/maximize-circle.svg'}
                  width={24}
                  height={24}
                  alt='Maximize circle'
                />
                <p className='uppercase font-oswald max-lg:text-base max-xl:text-md xl:text-2xl'>
                  Openness
                </p>
              </div>
              <div className='border-t-[1px] text-medium-green w-full mb-[24px] max-lg:mb-[12px] max-xl:mb-[12px]'></div>
              <p className='text-sm'>
                to the world, people, new ideas and projects
              </p>
            </div>
          </div>
          <div className='row-start-1 col-start-2  row-end-2 col-end-3'>
            <div className='flex flex-col w-[274px] h-[339px] max-lg:w-[148px] max-xl:w-[159px] max-xl:h-[197px] max-lg:pt-[13px] max-lg:px-[12px] pt-[48px] px-[24px] max-xl:px-[12px] max-xl:pt-[12px] bg-light-grey'>
              <div className='mb-[94px] max-xl:mb-[51px] max-lg:mb-[33px] flex gap-2 items-center'>
                <Image
                  className='max-xl:w-[16px] max-xl:h-[16px]'
                  src={'/icons/global-edit.svg'}
                  width={24}
                  height={24}
                  alt='Maximize circle'
                />
                <p className='uppercase font-oswald max-lg:text-base max-xl:text-md xl:text-2xl'>
                  Responsibility
                </p>
              </div>
              <div className='border-t-[1px] text-medium-green w-full mb-[24px] max-lg:mb-[12px] max-xl:mb-[12px]'></div>
              <p className='text-sm'>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </p>
            </div>
          </div>
          <div className='row-start-1 col-start-3 row-end-2 col-end-5 max-lg:hidden'>
            <Image
              className='h-[339px] w-full  max-xl:w-[346px] max-xl:h-[197px]'
              src={'/images/wind-farms-fields.webp'}
              width={604}
              height={339}
              alt='Wind turbine clean energy'
            />
          </div>
          <div className='row-start-2 col-start-1 row-end-3 col-end-3 max-lg:hidden'>
            <Image
              className='h-[339px] w-full max-xl:w-[346px] max-xl:h-[197px]'
              src={'/images/man-worker-firld-by-solar-panels.webp'}
              width={604}
              height={339}
              alt='Man worker firld by solar panels'
            />
          </div>
          <div className='row-start-2 max-[620px]:row-start-1 col-start-3 max-lg:col-start-2 row-end-3 col-end-4 max-[620px]:col-end-3'>
            <div className='flex flex-col w-[274px] h-[339px] max-lg:w-[148px] max-xl:w-[159px] max-xl:h-[197px] max-lg:pt-[13px] max-lg:px-[12px] pt-[48px] px-[24px] max-xl:px-[12px] max-xl:pt-[12px] bg-light-grey'>
              <div className='mb-[94px] max-xl:mb-[51px] max-lg:mb-[33px] flex gap-2 items-center'>
                <Image
                  className='max-xl:w-[16px] max-xl:h-[16px] '
                  src={'/icons/cpu-charge.svg'}
                  width={24}
                  height={24}
                  alt='Cpu charge'
                />
                <p className='uppercase font-oswald max-lg:text-base max-xl:text-md xl:text-2xl'>
                  Innovation
                </p>
              </div>
              <div className='border-t-[1px] text-medium-green w-full mb-[24px] max-lg:mb-[12px] max-xl:mb-[12px]'></div>
              <p className='text-sm'>
                we use the latest technology to implement non-standard solutions
              </p>
            </div>
          </div>
          <div className='row-start-2 max-[620px]:row-start-1 col-start-4 max-lg:col-start-1 row-end-3 col-end-5 max-[620px]:col-end-2'>
            <div className='flex flex-col w-[274px] h-[339px] max-lg:w-[148px] max-xl:w-[159px] max-xl:h-[197px] max-lg:pt-[13px] max-lg:px-[12px] pt-[48px] px-[24px] max-xl:px-[12px] max-xl:pt-[12px] bg-light-grey'>
              <div className='mb-[94px] max-xl:mb-[51px] max-lg:mb-[33px] flex gap-2 items-center'>
                <Image
                  className='max-xl:w-[16px] max-xl:h-[16px]'
                  src={'/icons/ranking.svg'}
                  width={24}
                  height={24}
                  alt='Ranking'
                />
                <p className='uppercase font-oswald max-lg:text-base max-xl:text-md xl:text-2xl'>
                  Quality
                </p>
              </div>
              <div className='border-t-[1px] text-medium-green w-full mb-[24px] max-lg:mb-[12px] max-xl:mb-[12px]'></div>
              <p className='text-sm'>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
