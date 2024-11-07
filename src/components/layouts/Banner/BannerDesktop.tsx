import { CrossBlue, CrossWhite, Hexagon, IntersectImage } from '@/assets/images'
import useResponsive from '@/components/hooks/useReponsive'
import HexagonImage from '@/components/shared/HexagonImage'
import React from 'react'

interface BannerDesktopProps {
  imageLink: [string, string]
  doctorName: string
  doctorTitle: string
  doctorQuote: string
}

const BannerDesktop: React.FC<BannerDesktopProps> = ({ imageLink, doctorName, doctorQuote, doctorTitle }) => {
  const { breakpoint } = useResponsive()

  // Hình bác sĩ
  const renderDoctorImage = () => {
    if (breakpoint === 'xl') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={500} className='-ml-[70px]' isHasOutline />
          <HexagonImage
            imageUrl={imageLink[1]}
            size={400}
            hasBorder
            className='absolute right-[10%] top-[40%] z-[20]'
          />
        </>
      )
    } else if (breakpoint === '2xl') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={550} className='-ml-[100px]' isHasOutline />
          <HexagonImage imageUrl={imageLink[1]} size={450} hasBorder className='absolute left-[10%] top-[50%] z-[20]' />
        </>
      )
    } else if (breakpoint === '3xl') {
      return (
        <>
          <HexagonImage imageUrl={imageLink[0]} size={700} className='-ml-[100px] mt-[0%]' isHasOutline />
          <HexagonImage
            imageUrl={imageLink[1]}
            size={500}
            hasBorder
            className='absolute right-[15%] top-[40%] z-[20]'
          />
        </>
      )
    }
    return (
      <>
        <HexagonImage imageUrl={imageLink[0]} size={500} className='-ml-[100px]' isHasOutline />
        <HexagonImage
          imageUrl={imageLink[1]}
          size={400}
          hasBorder
          className='absolute -bottom-[150px] left-[5%] z-[20]'
        />
      </>
    )
  }
  // Hình hexagon cạnh bác sĩ
  const renderHexagonImage = () => {
    if (breakpoint === 'xl') {
      return <Hexagon className='absolute left-[55%] top-[20%] size-[100px]' />
    } else if (breakpoint === '2xl') {
      return <Hexagon className='absolute left-[40%] top-[15%] size-[130px]' />
    } else if (breakpoint === '3xl') {
      return <Hexagon className='absolute left-[50%] top-[13%] size-[150px]' />
    } else {
      return <Hexagon className='absolute left-[17%] top-[20%] size-[150px]' />
    }
  }
  // Tên bác sĩ
  const renderDoctorName = () => {
    if (breakpoint === 'xl') {
      return (
        <div className='absolute left-[50%] top-4 z-20 flex flex-col gap-5'>
          <p className='text-[40px] font-bold uppercase text-heading'>{doctorName}</p>
          <p className='text-[30px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else if (breakpoint === '2xl') {
      return (
        <div className='absolute left-[50%] z-20 flex flex-col gap-5'>
          <p className='text-[50px] font-bold uppercase text-heading'>{doctorName}</p>
          <p className='text-[30px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else if (breakpoint === '3xl') {
      return (
        <div className='absolute left-[50%] top-0 z-20 flex flex-col gap-10'>
          <p className='text-[65px] font-bold uppercase text-heading'>{doctorName}</p>
          <p className='text-[40px] text-light'>{doctorTitle}</p>
        </div>
      )
    } else {
      return (
        <div className='absolute bottom-1 left-[15%] z-20 flex flex-col gap-5'>
          <p className='text-[50px] font-bold uppercase text-heading'>{doctorName}</p>
          <p className='text-[30px] text-light'>{doctorTitle}</p>
        </div>
      )
    }
  }
  // Hình chữ thập trắng
  const renderCrossWhite = () => {
    if (breakpoint === 'xl') {
      return <CrossWhite className='absolute right-4 top-4 size-[50px]' />
    } else if (breakpoint === '2xl') {
      return <CrossWhite className='absolute right-4 top-4 size-[70px]' />
    } else if (breakpoint === '3xl') {
      return <CrossWhite className='absolute right-4 top-6 size-[70px]' />
    } else {
      return <CrossWhite className='absolute right-4 top-8 size-[150px]' />
    }
  }
  const renderIntersectImage = () => {
    if (breakpoint === 'xl') {
      return (
        <div className='bottom-0 left-0 right-0'>
          <IntersectImage className='scale-[2]' />
        </div>
      )
    } else if (breakpoint === '2xl') {
      return (
        <div className='absolute left-[10%]'>
          <IntersectImage className='scale-[2.5]' />
        </div>
      )
    } else if (breakpoint === '3xl') {
      return (
        <div className='bottom-0 left-0 right-0 flex w-full justify-center'>
          <IntersectImage className='translate-y-[20%] scale-[3]' />
        </div>
      )
    } else {
      return (
        <div className='bottom-0 left-0 right-0 flex w-full justify-center'>
          <IntersectImage className='translate-y-[50%] scale-[2.2]' />
        </div>
      )
    }
  }
  return (
    <div className='doctor-container relative grid min-h-screen w-full grid-cols-2 flex-col overflow-hidden'>
      <div className='relative h-full w-full bg-primary'>
        {renderHexagonImage()}
        {renderDoctorImage()}
      </div>

      <div className='relative flex flex-col items-center justify-center'>
        {renderCrossWhite()}
        <p className='mt-[-200px] w-full max-w-[500px] text-[28px] leading-[35px] text-light 3xl:max-w-[600px] 3xl:text-[40px] 3xl:leading-[60px]'>
          {doctorQuote}
        </p>
      </div>
      <div className='relative col-span-2 2xl:mb-[200px]'>
        {renderDoctorName()}
        {renderIntersectImage()}
        <img
          src={CrossBlue}
          alt='IntersectImageMobile'
          className='absolute bottom-0 left-1/2 xl:translate-x-[-130%] 2xl:translate-x-[-120%] 2xl:translate-y-[130%] 3xl:translate-x-[-100%]'
        />
      </div>
    </div>
  )
}

export default BannerDesktop
