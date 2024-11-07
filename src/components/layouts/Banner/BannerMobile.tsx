import { CrossWhite, Hexagon, IntersectImageMobile } from '@/assets/images'
import useResponsive from '@/components/hooks/useReponsive'
import HexagonImage from '@/components/shared/HexagonImage'
import React from 'react'

interface BannerMobileProps {
  imageLink: [string, string]
  doctorName: string
  doctorTitle: string
  doctorQuote: string
}

const BannerMobile: React.FC<BannerMobileProps> = ({ imageLink, doctorName, doctorTitle, doctorQuote }) => {
  const { breakpoint } = useResponsive()
  console.log('breakpoint:', breakpoint)

  // Hình bác sĩ
  const renderDoctorImage = () => {
    if (breakpoint === 'ssm') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={400} className='-ml-[70px] mt-[-90px]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={300} hasBorder className='absolute right-[10%] top-[40%]' />
        </>
      )
    } else if (breakpoint === 'sm') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={450} className='-ml-[80px] mt-[0px]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={350} hasBorder className='absolute right-[5%] top-[45%]' />
        </>
      )
    } else if (breakpoint === 'md') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={500} className='-ml-[100px] mt-[-10%]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={400} hasBorder className='absolute right-[15%] top-[40%]' />
        </>
      )
    } else if (breakpoint === 'lg') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={700} className='-ml-[200px] mt-[-10%]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={550} hasBorder className='absolute bottom-[-50px] left-[5%]' />
        </>
      )
    } else {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={500} className='-ml-[100px]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={400} hasBorder className='absolute -bottom-[100px] left-[5%]' />
        </>
      )
    }
  }
  // Hình hexagon cạnh bác sĩ
  const renderHexagonImage = () => {
    if (breakpoint === 'ssm') {
      return <Hexagon className='absolute right-[15%] top-2 size-[90px]' />
    } else if (breakpoint === 'sm') {
      return <Hexagon className='absolute right-[10%] top-[15%] size-[120px]' />
    } else if (breakpoint === 'md') {
      return <Hexagon className='absolute right-[25%] top-[13%] size-[150px]' />
    } else if (breakpoint === 'lg') {
      return <Hexagon className='absolute right-[-10%] top-[20%] size-[150px]' />
    } else {
      return <Hexagon className='absolute left-[17%] top-[20%] size-[150px]' />
    }
  }
  // Tên bác sĩ
  const renderDoctorName = () => {
    if (breakpoint === 'ssm') {
      return (
        <div className='absolute bottom-3 left-[10%] z-20 flex flex-col gap-5'>
          <p className='text-[13px] font-bold text-heading'>{doctorName}</p>
          <p className='text-[13px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else if (breakpoint === 'sm') {
      return (
        <div className='absolute bottom-[1%] left-[5%] z-20 flex flex-col gap-2'>
          <p className='text-[16px] font-bold text-heading'>{doctorName}</p>
          <p className='text-[13px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else if (breakpoint === 'md') {
      return (
        <div className='absolute bottom-1 left-[13%] z-20 flex flex-col gap-5'>
          <p className='text-[25px] font-bold text-heading'>{doctorName}</p>
          <p className='text-[20px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else if (breakpoint === 'lg') {
      return (
        <div className='absolute bottom-1 left-[25%] z-20 flex flex-col gap-5'>
          <p className='text-[25px] font-bold text-heading'>{doctorName}</p>
          <p className='text-[20px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else {
      return (
        <div className='absolute -top-[40%] left-[30%] flex flex-col gap-5'>
          <p className='text-[50px] font-bold text-heading'>{doctorName}</p>
          <p className='text-[30px] text-light'>{doctorTitle}</p>
        </div>
      )
    }
  }
  // Hình chữ thập trắng
  const renderCrossWhite = () => {
    if (breakpoint === 'ssm') {
      return <CrossWhite className='absolute right-0 top-[20%] size-[50px]' />
    } else if (breakpoint === 'sm') {
      return <CrossWhite className='absolute right-0 top-[40%] size-[70px]' />
    } else if (breakpoint === 'md') {
      return <CrossWhite className='absolute right-0 top-10 size-[70px]' />
    } else if (breakpoint === 'lg') {
      return <CrossWhite className='absolute right-0 top-10 size-[100px]' />
    } else {
      return <CrossWhite className='absolute right-0 top-4 size-[150px]' />
    }
  }
  const renderIntersectImage = () => {
    if (breakpoint === 'ssm') {
      return (
        <div className='flex w-full justify-center'>
          <IntersectImageMobile className='scale-[1.15]' />
        </div>
      )
    } else if (breakpoint === 'sm') {
      return (
        <div className='flex w-full justify-center'>
          <IntersectImageMobile className='scale-[1.3]' />
        </div>
      )
    } else if (breakpoint === 'md') {
      return (
        <div className='flex w-full justify-center'>
          <IntersectImageMobile className='translate-y-[20%] scale-[2.1]' />
        </div>
      )
    } else if (breakpoint === 'lg') {
      return (
        <div className='flex w-full justify-center'>
          <IntersectImageMobile className='translate-y-[50%] scale-[3]' />
        </div>
      )
    } else {
      return (
        <div className='flex w-full justify-center'>
          <IntersectImageMobile className='translate-y-[50%] scale-[3.5]' />
        </div>
      )
    }
  }
  return (
    <div className='doctor-container relative flex h-screen w-full flex-col overflow-hidden'>
      <div className='relative z-10 h-full w-full bg-primary'>
        {renderHexagonImage()}
        {renderDoctorImage()}
        {renderCrossWhite()}
      </div>

      <p className='absolute bottom-[15%] left-1/2 z-10 w-full max-w-[300px] -translate-x-1/2 text-[16px] font-medium leading-[25px] text-light sm:bottom-[10%] sm:max-w-[350px] sm:text-[16px] md:bottom-[10%] md:max-w-[400px] md:text-[20px] md:leading-[30px] lg:bottom-[-10%] lg:mb-[200px] lg:ml-[100px] lg:max-w-[500px] lg:translate-x-[-60%] lg:text-[25px] lg:leading-[35px] xl:text-[35px] xl:leading-[50px]'>
        {doctorQuote}
      </p>

      {renderDoctorName()}
      {renderIntersectImage()}
    </div>
  )
}

export default BannerMobile
