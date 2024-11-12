import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutView from './page/AboutView'
import Navbar from './navbar/Navbar'
import HomeView from './page/HomeView'
import NotFoundView from './page/NotFoundView'
import Login from './page/Login'
import { RegisterPage } from './page/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />
  },
  {
    path: '/about',
    element: <AboutView />
  },
  {
    path: '/not-found',
    element: <NotFoundView />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
])

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
    </>
  )
}
export default App