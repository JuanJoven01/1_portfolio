const Resume = () => {
    return(
        <section className="flex px-7 md:px-20 flex-wrap justify-center items-center">
            <img src="../../../public/img/jp.jpeg" className=" w-3/4 md:w-1/4  m-5 h-fit " />
            <div className="rounded-xl bg-gradient-to-r from-blue-500 to-charlie flex p-0.5 mx-3 md:mx-10 md:my-10 max-w-xl ">
                <p className="self-center text-slate-300 font-satoshi-italic text-justify text-lg bg-slate-800 px-5 md:px-10 py-10 rounded-xl h-full w-full"  >
                    Hi there! I'm Juan Joven, a passionate <span className="font-satoshi-mediumitalic mix-blend-color-dodge">computer engineer and developer</span>  eager to make a mark in the tech industry. Originally from <span className="font-satoshi-mediumitalic mix-blend-color-dodge"> Colombia</span>, I left my military career as an Officer in the Colombian Air Force to pursue my passion for technology and development. I am constantly exploring as <span className="font-satoshi-mediumitalic mix-blend-color-dodge"> self-taught the new technologies </span> and resources to enhance my skills and stay updated with the latest trends in software development. My goal is to leverage my <span className="font-satoshi-mediumitalic mix-blend-color-dodge">enthusiasm and commitment </span>to continuous learning to contribute to innovative projects and grow as a developer.
                </p>
            </div>
        </section>
    )
}

export default Resume