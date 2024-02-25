import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";



const Technologies  = () => {

    const technologies = [
        {
            'title': 'HTML',
            'logo': <FaHtml5 className=" h-16 w-16 text-orange-500" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(255,151,0,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(255,151,0,0.9)]',
        },
        {
            'title': 'CSS',
            'logo': <IoLogoCss3 className=" h-16 w-16 text-blue-500" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,50,255,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,10,255,0.9)]',
        },
        {
            'title': 'JavaScript',
            'logo': <IoLogoJavascript className=" h-16 w-16 text-yellow-500" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(244,200,0,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(244,200,0,0.9)]',
        },
        {
            'title': 'React',
            'logo': <FaReact className=" h-16 w-16 text-cyan-500" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,200,255,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,200,255,0.9)]',
        },
        {
            'title': 'Tailwind',
            'logo': <SiTailwindcss className=" h-16 w-16 text-cyan-400" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,230,255,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,230,255,0.9)]',
        },
        {
            'title': 'Node',
            'logo': <DiNodejsSmall className=" h-16 w-16 text-green-600" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,200,100,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,200,100,0.9)]',
        },
        {
            'title': 'Express',
            'logo': <SiExpress className=" h-16 w-16 text-slate-300" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(200,200,200,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(200,200,200,0.9)]',
        },
        {
            'title': 'Sequelize',
            'logo': <SiSequelize className=" h-16 w-16 text-blue-500" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,50,235,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,10,235,0.9)]',
        },
        {
            'title': 'Python',
            'logo': <img src="../../../public/img/python.png" className=" h-16 w-16 " />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(244,200,0,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(244,200,0,0.9)]',
        },
        {
            'title': 'Django',
            'logo': <img src="../../../public/img/django.png" className=" h-16 w-16" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,80,0,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,80,40,0.9)]',
        },
        {
            'title': 'FastAPI',
            'logo': <img src="../../../public/img/fastapi.svg" className=" h-16 w-16" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,150,90,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,150,50,0.9)]',
        },
        {
            'title': 'SQLAlchemy',
            'logo': <img src="../../../public/img/sqlalchemy.png" className=" h-10 w-16 mt-4" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(230,230,230,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(230,230,230,0.9)]',
        },
        {
            'title': 'PostgreSQL',
            'logo': <img src="../../../public/img/sql.png" className=" h-16 w-16" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(36,120,255,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(36,120,255,0.9)]',
        },
        {
            'title': 'GIT',
            'logo': <FaGitAlt className=" h-16 w-16 text-orange-600" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(255,141,0,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(255,141,0,0.9)]',
        },
        {
            'title': 'VScode',
            'logo': <img src="../../../public/img/code.png" className=" h-14 w-14" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(0,50,235,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(0,10,235,0.9)]',
        },
        {
            'title': 'Linux',
            'logo': <img src="../../../public/img/linux.png" className=" h-16 w-16" />,
            'shadow': 'drop-shadow-[0px_0px_10px_rgba(200,200,200,0.7)]',
            'shadow_hover':  'hover:drop-shadow-[0px_0px_13px_rgba(200,200,200,0.9)]',
        },
    ]

    return (
        <section>
             <h1 className="text-center p-5 text-5xl font-bold text-slate-300" >
              Technologies
            </h1>
            <div className=" bg-slate-800 mx-20 mb-20 mt-10 border-slate-300 border-2 flex flex-wrap justify-center">
                {
                    technologies.map((item,index)=>(
                        <div key={index} className={`group m-5 rounded-xl ${item.shadow} ${item.shadow_hover} flex justify-center items-center`}>
                            {item.logo}
                            <p className="absolute border-[1px] font-satoshi-medium px-2 py-[0.5px] bg-slate-800 hidden text-slate-300 group-hover:block ">{item.title}</p>
                        </div>
                    ))
                }
            </div>

            
            
        </section>
    )
}

export default Technologies