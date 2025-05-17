import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      789
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
