import Image from 'next/image'
import Link from 'next/link'

const MainSection = () => {
  return (
    <section
      id='main'
      className='pt-[264px] max-xl:pt-[240px] max-lg:pt-[221px]'
    >
      <div className='container flex flex-col'>
        <div className='flex items-start gap-[296px] max-xl:gap-[62px] max-lg:flex-col max-lg:gap-[26px] md:items-center'>
          <h1 className=' w-[485px] font-oswald text-[64px] uppercase leading-[64px] tracking-[0.1px] max-xl:w-[301px] max-xl:text-[48px] max-xl:leading-[48px] max-lg:max-w-[320px] max-lg:text-[36px] max-lg:leading-[36px] md:text-center lg:text-start'>
            RENEWABLE ENERGY For any task
          </h1>
          <div className='flex w-[363px] flex-col items-center  justify-center max-xl:w-[342px] max-xl:gap-[42px] max-lg:w-[320px] max-lg:gap-[21px] max-sm:w-full lg:items-start xl:gap-[18px] '>
            <p className='font-firaSans md:text-center lg:text-start'>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <Link
              href='#cases'
              className='group flex items-center gap-[6px]  rounded-[500px] border-[1px] border-solid p-1 pl-4 text-medium-green transition-colors duration-300 ease-in-out hover:border-primary-green hover:bg-primary-green focus:border-primary-green focus:bg-primary-green'
            >
              <span className='text-primary-green transition-colors duration-300  ease-in-out group-hover:text-medium-green group-focus:text-medium-green'>
                Learn more
              </span>
              <span className='rounded-full bg-medium-green p-2'>
                <Image
                  className='rotate-180'
                  src='/icons/arrow-right.svg'
                  width={16}
                  height={16}
                  alt='Arrow bottom'
                />
              </span>
            </Link>
          </div>
        </div>
        <div className='relative flex w-full flex-col max-xl:pt-[41px] max-lg:pt-[48px] xl:pt-[37px]'>
          <div className='absolute  left-0 top-[24px] w-full border-t-[1px] text-medium-green' />
          <div className='flex w-full items-center max-lg:flex-col  md:justify-between lg:items-end'>
            <a
              href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
              target='_blank'
              rel='noopener noreferrer'
              className='font-firaSans font-normal transition-colors duration-300 ease-in-out  hover:text-medium-green focus:text-medium-green max-md:text-center'
            >
              79005, Ukraine, Lviv street. Shota Rustaveli, 7
            </a>
            <div className='flex  max-xl:justify-end max-xl:gap-[54px]  max-lg:mt-[7px] max-md:justify-center xl:gap-[121px]'>
              <a
                className=' font-firaSans text-base text-primary-green transition-colors duration-300  ease-in-out hover:text-medium-green focus:text-medium-green'
                href='mailto:office@ecosolution.com'
              >
                office@ecosolution.com
              </a>
              <p className='max-lg:hidden'>ecosolution © 2023</p>
            </div>
          </div>
          <Image
            className='mt-[36px] max-xl:mt-[41px] max-xl:h-[348px] max-lg:mt-[36px] max-lg:w-full max-lg:object-cover max-md:h-[200px] xl:h-[524px]'
            src='/images/wind-turbine-clean-energy.webp'
            width={1242}
            height={524}
            alt='Wind turbine clean energy'
          />
        </div>
      </div>
    </section>
  )
}

export default MainSection
