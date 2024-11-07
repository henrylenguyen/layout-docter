import { SVGProps } from 'react'
import { JSX } from 'react/jsx-runtime'

function IntersectImage({ width, height, viewBox, ...props }: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width ?? 980}
      height={height ?? 364}
      viewBox={viewBox ?? '0 0 980 364'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        opacity='0.3'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M980 255.695V364H0V287.294C3.00119 284.899 6.18751 282.724 9.53613 280.791L477.964 10.3166C489.682 3.55786 502.972 0 516.5 0C530.028 0 543.318 3.55786 555.036 10.3166L980 255.695Z'
        fill='#032184'
      />
    </svg>
  )
}

export default IntersectImage
