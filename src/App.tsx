import BaseLayout from '@/components/layouts/baseLayout'
import HomePage from '@/pages/homePage'
import { useRoutes } from 'react-router-dom'

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    }
  ])

  return <>{routes}</>
}

export default App
