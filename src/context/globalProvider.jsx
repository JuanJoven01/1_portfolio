import {  useState } from "react";

import {allContext} from './index.jsx'

const GlobalProvider = (props) => {

    const [inPortfolio, setInPortfolio] = useState(true)
    const [inBlog, setInBlog] = useState(false)

    return (
        <allContext.Provider value={{
            inPortfolio,
            setInPortfolio,
            inBlog,
            setInBlog
        }}>
            {props.children}
        </allContext.Provider>
    )
}

export  {GlobalProvider}