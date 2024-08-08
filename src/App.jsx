import { useState } from 'react'
import './styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /><Footer /></>
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
