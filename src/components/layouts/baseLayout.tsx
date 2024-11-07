import * as React from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout: React.FC = () => {
  return (
    <main className='h-auto w-full lg:min-h-screen'>
      <Outlet />
    </main>
  )
}

export default BaseLayout
