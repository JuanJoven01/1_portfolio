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
    <>
        <BrowserRouter>
          <Navbar/>
          <div className='total flex bg-slate-900'>
            <div className='semi-total w-full max-w-6xl mx-auto'>
              <AppRoutes/>
            </div>
          </div>
          <Footer/>          
        </BrowserRouter>

    </>
  )
}

export default App
