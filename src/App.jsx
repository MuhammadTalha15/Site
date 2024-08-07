import { useState } from 'react'
import './styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home';


function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <><Home /></>
    }
  ])

  return (
    <>
      <main className='mn'>
        <RouterProvider router={routes}></RouterProvider>
      </main>
    </>
  )
}

export default App
