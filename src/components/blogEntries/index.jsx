
const BlogEntries = () => {

    const listOfEntries = [
        {
            'title': 'TITLE',
            'date': '/ FEB 25 2024'
        }
    ]

    return (
        <section className=" text-slate-300 flex-col font-satoshi-bold mb-5 ">
            <div className=" ">
                <h1 className=" text-center p-5 text-5xl font-bold">
                    Index
                </h1>
                <div className=" mx-10">
                    {
                        listOfEntries.map((item,index)=>(
                            <div key={index} className="bg-gradient-to-r from-blue-500 to-charlie flex p-0.5 rounded-t-lg">
                                <div  className=" bg-slate-900 w-full p-3 font-satoshi-bolditalic rounded-t-lg  text-center">
                                    <p>{item.title} {item.date}</p>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            
        </section>
        
    )
}

export default BlogEntries