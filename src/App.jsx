import {useRoutes, BrowserRouter} from 'react-router-dom'

import Navbar from './components/navbar'
import Portfolio from './pages/portfolio'
import Blog from './pages/blog'
import Footer from './components/footer'

const AppRoutes = () => {

  const routes = useRoutes(
      [
        {path: '/', element: <Portfolio/>},
        {path: '/blog', element: <Blog/>},

      ]
  )

  return routes
}


function App() {


  return (
    <div className='total flex w-full justify-center'>
      <div className='semi_total w-full max-w-6xl '>
        <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
          <Footer/>          
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
