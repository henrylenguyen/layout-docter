import { useEffect, useState } from 'react'

const breakpoints = {
  ssm: { min: 0, max: 376 },
  sm: { min: 377, max: 480 },
  md: { min: 481, max: 767 },
  lg: { min: 768, max: 1024 },
  xl: { min: 1025, max: 1280 },
  '2xl': { min: 1281, max: 1536 },
  '3xl': { min: 1537, max: 1792 }
}

const getBreakpoint = (width: number) => {
  if (width >= breakpoints.ssm.min && width <= breakpoints.ssm.max) return 'ssm'
  if (width >= breakpoints.sm.min && width <= breakpoints.sm.max) return 'sm'
  if (width >= breakpoints.md.min && width <= breakpoints.md.max) return 'md'
  if (width >= breakpoints.lg.min && width <= breakpoints.lg.max) return 'lg'
  if (width >= breakpoints.xl.min && width <= breakpoints.xl.max) return 'xl'
  if (width >= breakpoints['2xl'].min && width <= breakpoints['2xl'].max) return '2xl'
  if (width >= breakpoints['3xl'].min && width <= breakpoints['3xl'].max) return '3xl'
  return 'unknown'
}

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    breakpoint: getBreakpoint(window.innerWidth)
  })

  const handleResize = () => {
    const width = window.innerWidth
    setScreenSize({
      width,
      breakpoint: getBreakpoint(width)
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}

export default useResponsive
