import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Home'
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './Login'
import SignUp from './SignUp'
import Contact from './Contact'
import Features from './Features'
import Forgot from './Forgot'
import Reset from './Reset'

const Layout = () => {
  return(
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
      path: "/home",
      element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/forgotpassword",
        element: <Forgot />
      },
      {
        path: "/passreset",
        element: <Reset />
      },
    ] 
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)