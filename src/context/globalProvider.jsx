import {  useState } from "react";

import {allContext} from './index.jsx'

const GlobalProvider = (props) => {

    const [inPortfolio, setInPortfolio] = useState(true)

    return (
        <allContext.Provider value={{
            inPortfolio,
            setInPortfolio,
        }}>
            {props.children}
        </allContext.Provider>
    )
}

export  {GlobalProvider}