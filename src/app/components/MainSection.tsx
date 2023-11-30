import Image from 'next/image'
import Link from 'next/link'

const MainSection = () => {
  return (
    <section
      id='main'
      className='pt-[264px] max-lg:pt-[221px] max-xl:pt-[240px]'
    >
      <div className='container flex flex-col'>
        <div className='flex max-lg:flex-col md:items-center max-lg:gap-[26px] max-xl:gap-[62px] gap-[296px] items-start'>
          <h1 className=' uppercase text-[64px] md:text-center lg:text-start max-xl:text-[48px] max-xl:leading-[48px] max-xl:w-[301px] max-lg:text-[36px] max-lg:leading-[36px] leading-[64px] tracking-[0.1px] font-oswald w-[485px] max-lg:max-w-[320px]'>
            RENEWABLE ENERGY For any task
          </h1>
          <div className='flex flex-col items-center lg:items-start  w-[363px] max-lg:w-[320px] max-xl:w-[342px] max-sm:w-full max-lg:gap-[21px] xl:gap-[18px] max-xl:gap-[42px] justify-center '>
            <p className='font-firaSans md:text-center lg:text-start'>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <Link
              href={'#cases'}
              className='flex group items-center gap-[6px]  border-solid text-medium-green border-[1px] transition-colors ease-in-out duration-300 hover:bg-primary-green focus:bg-primary-green p-1 pl-4 rounded-[500px]'
            >
              <span className='transition-colors ease-in-out text-primary-green  duration-300 group-hover:text-medium-green group-focus:text-medium-green'>
                Learn more
              </span>
              <span className='bg-medium-green p-2 rounded-full'>
                <Image
                  className='rotate-180'
                  src={'/icons/arrow-right.svg'}
                  width={16}
                  height={16}
                  alt='Arrow bottom'
                />
              </span>
            </Link>
          </div>
        </div>
        <div className='relative w-full xl:pt-[37px] max-lg:pt-[48px] max-xl:pt-[41px] flex flex-col'>
          <div className='absolute  top-[24px] left-0 border-t-[1px] text-medium-green w-full'></div>
          <div className='flex max-md:flex-col max-lg:items-center xl:justify-between'>
            <a
              href='https://maps.app.goo.gl/1ARnxC894YQgfbn99'
              target='_blank'
              rel='noopener noreferrer'
              className='font-firaSans max-md:text-center w-full font-normal transition-colors ease-in-out  duration-300 hover:text-medium-green focus:text-medium-green'
            >
              79005, Ukraine, Lviv street. Shota Rustaveli, 7
            </a>
            <div className='flex xl:justify-between w-full max-md:justify-center  xl:gap-[169px] max-xl:gap-[54px] max-lg:mt-[7px] max-xl:justify-end'>
              <a
                className=' text-base text-primary-green font-firaSans transition-colors ease-in-out  duration-300 hover:text-medium-green focus:text-medium-green'
                href='mailto:office@ecosolution.com'
              >
                office@ecosolution.com
              </a>
              <p className='max-lg:hidden'>ecosolution © 2023</p>
            </div>
          </div>
          <Image
            className='mt-[36px] max-lg:mt-[36px] max-xl:mt-[41px] xl:h-[524px] max-lg:object-cover max-md:h-[200px] max-lg:w-full max-xl:h-[348px]'
            src={'/images/wind-turbine-clean-energy.webp'}
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
