import { useContext } from "react"

import { useNavigate} from "react-router-dom"

import { allContext } from "../../context/index.jsx"




const Navbar = () => {

    const navigate = useNavigate()

    const globalContext = useContext(allContext)

    return(
        <nav className=" border-b-2 border-slate-400 flex h-16 justify-between bg-slate-900 bg-opacity-20 backdrop-blur-md fixed w-full text-slate-200 font-lora z-10"> 
            <p className='my-auto ml-5'>JUAN JOVEN - DEV</p>
            <ul className="my-auto mr-5 flex">
                <li className={`px-5 hover:cursor-pointer ${globalContext.inPortfolio ? 'underline text-echo' : ''}`} onClick={() => navigate('/') & globalContext.setInPortfolio(true) & globalContext.setInBlog(false)}>
                    Portfolio
                </li>
                <li className={`px-5 hover:cursor-pointer ${globalContext.inBlog ? 'underline text-echo' : ''}`} onClick={() => navigate('/blog') & globalContext.setInPortfolio(false) & globalContext.setInBlog(true)}>
                    Blog
                </li>
            </ul>
        </nav>
    )
    
}

export default Navbar