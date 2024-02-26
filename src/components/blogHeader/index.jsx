const BlogHeader = () => {
    return (
        <section className=" text-slate-300 mt-16 flex-col p-10 font-satoshi-blackitalic ">
            <div className=" bg-radial-gradient from-gradient_alpha via-gradient_bravo to-transparent to-70% backdrop-blur-sm">
                <h1 className=" text-center p-5 pt-20 text-5xl font-bold">
                    Juan Pablo Joven - Blog
                </h1>
                <h2 className="text-center p-5 text-4xl text-delta font-semibold bg-gradient-to-r from-blue-500 to-delta text-transparent bg-clip-text">
                    This is a personal blog created with React and Tailwind, a couple of times a week I add posts about news, components or tools that I find interesting.
                </h2>
            </div>
            
        </section>
        
    )
}

export default BlogHeader