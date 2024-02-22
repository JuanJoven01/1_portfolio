import { useState } from "react"
import { useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()
    const [inPortfolio, setInPortfolio] = useState(true)
    const [inBlog, setInBlog] = useState(false)

    return(
        <nav className=" border-b-2 border-slate-400 flex h-16 justify-between bg-slate-900 bg-opacity-20 backdrop-blur-md fixed w-full text-slate-200 font-lora z-10"> 
            <p className='my-auto ml-5'>JUAN JOVEN - DEV</p>
            <ul className="my-auto mr-5 flex">
                <li className={`px-5 hover:cursor-pointer ${inPortfolio ? 'underline text-echo' : ''}`} onClick={() => navigate('/') & setInPortfolio(true) & setInBlog(false)}>
                    Portfolio
                </li>
                <li className={`px-5 hover:cursor-pointer ${inBlog ? 'underline text-echo' : ''}`} onClick={() => navigate('/blog') & setInPortfolio(false) & setInBlog(true)}>
                    Blog
                </li>
            </ul>
        </nav>
    )
    
}

export default Navbar