import React from 'react'

interface HexagonImageProps {
  imageUrl: string
  size?: string | number
  hasBorder?: boolean
  isHasOutline?: boolean
  className?: string
}

const HexagonImage: React.FC<HexagonImageProps> = ({
  imageUrl,
  size = '150px',
  hasBorder = false,
  isHasOutline = false,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width='100%' height='100%' viewBox='-0.1 -0.1 1.2 1.2'>
        <defs>
          <clipPath id='hexClip'>
            <path
              d='M0.4625 0.01165063509
                 a0.075 0.075 0 0 1 0.075 0
                 l0.3666729559 0.2116987298
                 a0.075 0.075 0 0 1 0.0375 0.06495190528
                 l0 0.4233974596
                 a0.075 0.075 0 0 1 -0.0375 0.06495190528
                 l-0.3666729559 0.2116987298
                 a0.075 0.075 0 0 1 -0.075 0
                 l-0.3666729559 -0.2116987298
                 a0.075 0.075 0 0 1 -0.0375 -0.06495190528
                 l0 -0.4233974596
                 a0.075 0.075 0 0 1 0.0375 -0.06495190528 Z'
            />
          </clipPath>
        </defs>

        {/* Outline Path */}
        {isHasOutline && (
          <path
            d='M0.4625 0.01165063509
               a0.1 0.1 0 0 1 0.1 0
               l0.3666729559 0.2116987298
               a0.1 0.1 0 0 1 0.05 0.08695190528
               l0 0.4233974596
               a0.1 0.1 0 0 1 -0.05 0.08695190528
               l-0.3666729559 0.2116987298
               a0.1 0.1 0 0 1 -0.1 0
               l-0.3666729559 -0.2116987298
               a0.1 0.1 0 0 1 -0.05 -0.08695190528
               l0 -0.4233974596
               a0.1 0.1 0 0 1 0.05 -0.08695190528 Z'
            fill='none'
            stroke='white'
            strokeWidth='0.004'
          />
        )}

        {isHasOutline ? (
          <g transform='translate(0.015, 0.023)'>
            <image href={imageUrl} width='1' height='1' clipPath='url(#hexClip)' preserveAspectRatio='xMidYMid slice' />
          </g>
        ) : (
          <image href={imageUrl} width='1' height='1' clipPath='url(#hexClip)' preserveAspectRatio='xMidYMid slice' />
        )}
        {/* Border Path */}
        <path
          d='M0.4625 0.01165063509
             a0.075 0.075 0 0 1 0.075 0
             l0.3666729559 0.2116987298
             a0.075 0.075 0 0 1 0.0375 0.06495190528
             l0 0.4233974596
             a0.075 0.075 0 0 1 -0.0375 0.06495190528
             l-0.3666729559 0.2116987298
             a0.075 0.075 0 0 1 -0.075 0
             l-0.3666729559 -0.2116987298
             a0.075 0.075 0 0 1 -0.0375 -0.06495190528
             l0 -0.4233974596
             a0.075 0.075 0 0 1 0.0375 -0.06495190528 Z'
          className={hasBorder ? 'fill-none stroke-greenLight stroke-[0.015]' : 'fill-none'}
        />
      </svg>
    </div>
  )
}

export default HexagonImage
