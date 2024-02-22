import { useNavigate} from "react-router-dom"

const Projects = () => {

    const navigate = useNavigate()

    const projects = [
        {
            'title': 'Blog',
            'description': 'This is a personal blog created with React and Tailwind, a couple of times a week I add posts about news, components or tools that I find interesting.',
            'image': '../../../public/img/reactTailwind.png'
        }
    ]

    return (
        <section className=" bg-radial-gradient from-gradient_alpha via-gradient_bravo to-transparent to-70% backdrop-blur-sm ">
            
            <h1 className="text-center p-5 pt-20 text-5xl font-bold text-slate-300" >
                Projects
            </h1>

            <div className="flex flex-wrap p-20 justify-center">
                {
                projects.map((item,index)=>(
                    <div key={index} className=' p-5 border-2 max-w-md bg-slate-800 flex-col'>
                        <h3 className=" text-center font-satoshi-bolditalic text-2xl bg-gradient-to-r from-blue-500 to-delta text-transparent bg-clip-text">{item['title']}</h3>
                        <p className=" text-center p-3 text-slate-300 font-satoshi-italic text-lg">{item['description']}</p>
                        <img src={item['image']} alt="" className="h-20"/>
                        <div className="flex ">
                        <ul className="my-auto mr-5 flex">
                            <li className='px-5 hover:cursor-pointer'  onClick={() => navigate('/')}>
                                Portfolio
                            </li>
                            <li className='px-5 hover:cursor-pointer'  onClick={() => navigate('/')}>
                                Blog
                            </li>
                        </ul>
                        </div>
                    </div>
                    ))
                }
            </div>  
            
        
        </section>
    )
}

export default Projects