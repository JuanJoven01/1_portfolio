const Navbar = () => {

    return(
        <nav className="flex h-12 bg-slate-400 justify-between">
            <p className="my-auto ml-5">JUAN JOVEN - DEV</p>
            <ul className="my-auto mr-5 flex">
                <li className="px-5">
                    portfolio
                </li>
                <li>
                    Blog
                </li>
            </ul>
        </nav>
    )
    
}

export default Navbar