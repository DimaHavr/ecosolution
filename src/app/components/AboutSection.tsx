import Image from 'next/image'

const AboutSection = () => {
  return (
    <section
      id='about'
      className='pt-[120px] max-xl:pt-[97px] max-lg:pt-[39px]'
    >
      <div className='container flex flex-col'>
        <div className='relative flex items-center justify-between  max-xl:items-start max-lg:flex-col max-lg:gap-[22px]'>
          <div className='absolute  left-1/2 top-0 h-full translate-x-1/2 border-l-[1px] text-medium-green max-lg:hidden' />
          <h2 className=' font-oswald text-[48px] uppercase leading-[48px] tracking-[0.1px] max-xl:w-[272px] max-xl:text-[36px] max-xl:leading-[36px] max-lg:w-[320px] max-lg:text-[28px] max-lg:leading-[28px] max-sm:w-[280px] xl:w-[365px]'>
            Main values of our company
          </h2>
          <p className='w-[459px] max-xl:w-[342px] max-lg:w-full'>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the worlds energy needs.
          </p>
        </div>
        <div className='mt-[123px] grid grid-cols-4 grid-rows-2 gap-[49px] max-xl:gap-[24px] max-lg:mt-[34px] max-lg:grid-cols-2 max-lg:justify-items-center'>
          <div className='col-start-1 col-end-2  row-start-1 row-end-2  flex flex-col bg-light-grey px-[24px] pt-[48px] max-xl:w-[159px] max-xl:px-[12px] max-xl:pt-[12px] max-lg:h-[155px] max-lg:w-full max-lg:px-[12px] max-lg:pt-[13px] max-md:h-[197px] max-md:w-[148px] xl:h-[339px] xl:w-[274px]'>
            <div className='mb-[94px] flex items-center gap-2 max-xl:mb-[51px] max-lg:mb-[33px]'>
              <Image
                className='max-xl:h-[16px] max-xl:w-[16px]'
                src='/icons/maximize-circle.svg'
                width={24}
                height={24}
                alt='Maximize circle'
              />
              <p className='font-oswald uppercase max-xl:text-md max-lg:text-base xl:text-2xl'>
                Openness
              </p>
            </div>
            <div className='mb-[24px] w-full border-t-[1px] text-medium-green max-xl:mb-[12px] max-lg:mb-[12px]' />
            <p className='text-sm'>
              to the world, people, new ideas and projects
            </p>
          </div>
          <div className='col-start-2 col-end-3  row-start-1 row-end-2 flex flex-col bg-light-grey px-[24px] pt-[48px] max-xl:w-[159px] max-xl:px-[12px] max-xl:pt-[12px] max-lg:h-[155px] max-lg:w-full max-lg:px-[12px] max-lg:pt-[13px] max-md:h-[197px] max-md:w-[148px] xl:h-[339px] xl:w-[274px]'>
            <div className='mb-[94px] flex items-center gap-2 max-xl:mb-[51px] max-lg:mb-[33px]'>
              <Image
                className='max-xl:h-[16px] max-xl:w-[16px]'
                src='/icons/global-edit.svg'
                width={24}
                height={24}
                alt='Maximize circle'
              />
              <p className='font-oswald uppercase max-xl:text-md max-lg:text-base xl:text-2xl'>
                Responsibility
              </p>
            </div>
            <div className='mb-[24px] w-full border-t-[1px] text-medium-green max-xl:mb-[12px] max-lg:mb-[12px]' />
            <p className='text-sm'>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </div>
          <div className='col-start-3 col-end-5 row-start-1 row-end-2 max-lg:hidden'>
            <Image
              className='w-full max-xl:w-[346px] max-lg:h-[155px]  max-md:h-[197px] xl:h-[339px]'
              src='/images/wind-farms-fields.webp'
              width={604}
              height={339}
              alt='Wind turbine clean energy'
            />
          </div>
          <div className='col-start-1 col-end-3 row-start-2 row-end-3 max-lg:hidden'>
            <Image
              className='w-full max-xl:w-[346px] max-lg:h-[155px] max-md:h-[197px] xl:h-[339px]'
              src='/images/man-worker-field-by-solar-panels.webp'
              width={604}
              height={339}
              alt='Man worker field by solar panels'
            />
          </div>
          <div className='col-start-3 col-end-4 row-start-2 row-end-3 flex flex-col bg-light-grey px-[24px] pt-[48px] max-xl:w-[159px] max-xl:px-[12px] max-xl:pt-[12px] max-lg:col-start-2 max-lg:col-end-3 max-lg:h-[155px] max-lg:w-full max-lg:px-[12px] max-lg:pt-[13px] max-md:h-[197px] max-md:w-[148px] xl:h-[339px] xl:w-[274px]'>
            <div className='mb-[94px] flex items-center gap-2 max-xl:mb-[51px] max-lg:mb-[33px]'>
              <Image
                className='max-xl:h-[16px] max-xl:w-[16px] '
                src='/icons/cpu-charge.svg'
                width={24}
                height={24}
                alt='Cpu charge'
              />
              <p className='font-oswald uppercase max-xl:text-md max-lg:text-base xl:text-2xl'>
                Innovation
              </p>
            </div>
            <div className='mb-[24px] w-full border-t-[1px] text-medium-green max-xl:mb-[12px] max-lg:mb-[12px]' />
            <p className='text-sm'>
              we use the latest technology to implement non-standard solutions
            </p>
          </div>
          <div className='col-start-4 col-end-5 row-start-2 row-end-3 flex flex-col bg-light-grey px-[24px] pt-[48px] max-xl:w-[159px] max-xl:px-[12px] max-xl:pt-[12px] max-lg:col-start-1 max-lg:col-end-2 max-lg:h-[155px] max-lg:w-full max-lg:px-[12px] max-lg:pt-[13px] max-md:h-[197px] max-md:w-[148px] xl:h-[339px] xl:w-[274px]'>
            <div className='mb-[94px] flex items-center gap-2 max-xl:mb-[51px] max-lg:mb-[33px]'>
              <Image
                className='max-xl:h-[16px] max-xl:w-[16px]'
                src='/icons/ranking.svg'
                width={24}
                height={24}
                alt='Ranking'
              />
              <p className='font-oswald uppercase max-xl:text-md max-lg:text-base xl:text-2xl'>
                Quality
              </p>
            </div>
            <div className='mb-[24px] w-full border-t-[1px] text-medium-green max-xl:mb-[12px] max-lg:mb-[12px]' />
            <p className='text-sm'>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
