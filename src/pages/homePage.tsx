import { img1, img2 } from '@/assets/images'
import useResponsive from '@/components/hooks/useReponsive'
import { BannerDesktop, BannerMobile } from '@/components/layouts/Banner'
import * as React from 'react'

// eslint-disable-next-line prettier/prettier
interface IHomePageProps { }

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  const { width } = useResponsive()
  console.log('width:', width)
  return (
    <>
      {width <= 1024 && (
        <BannerMobile
          imageLink={[img1, img2]}
          doctorName='Thu Quỳnh'
          doctorTitle='Bác sĩ'
          doctorQuote='  Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là
          vì sự chân thật và giản dị.'
        />
      )}
      {width > 1024 && (
        <BannerDesktop
          imageLink={[img1, img2]}
          doctorName='Thu Quỳnh'
          doctorTitle='Bác sĩ'
          doctorQuote='  Tôi không nghĩ mình đang khác đi, bởi tôi là một người sống khá đơn giản. Tôi biết những người yêu mến tôi là
          vì sự chân thật và giản dị.'
        />
      )}
    </>
  )
}

export default HomePage
