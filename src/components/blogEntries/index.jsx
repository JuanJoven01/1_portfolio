import { useState } from "react";
import {Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";

const BlogEntries = () => {

    const listOfEntries = [
        {
            'notKey': 1,
            'title': 'Deciphering Performance: A Comparative Analysis of ORM and SQL in Backend Applications',
            'date': '/ Feb 27 2024',
            'body' : 
                <div className=" text-slate-300">
                <h1 className="text-xl font-satoshi-bolditalic mb-4">ORM vs SQL: A Performance Perspective</h1>
                <p className="mb-4">
                    Object-Relational Mapping (ORM) and Structured Query Language (SQL) are two common approaches for interacting with databases in backend applications. While ORM provides a high level of abstraction and simplifies code readability, raw SQL queries offer granular control over database interactions.
                </p>
                <p className="mb-4">
                    ORM frameworks, such as SQLAlchemy, abstract database interactions into Python objects, reducing the need to write raw SQL while promoting code readability. They automatically handle tasks like query generation, parameter binding, and result mapping, reducing the risk of SQL injection and encouraging best practices.
                </p>
                <h1 className="text-xl font-satoshi-bolditalic mb-4">Performance Considerations</h1>
                <p className="mb-4">
                    When it comes to performance, raw SQL queries often have an edge due to their directness. They bypass the ORM translation and mapping process, which can result in faster execution. This advantage becomes particularly noticeable when dealing with large datasets or complex queries that benefit from fine-tuning.
                </p>
                <p className="mb-4">
                    However, it's important to note that raw SQL queries might not always be the best option. ORM frameworks abstract the underlying database, making code more readable and maintainable. They automatically handle tasks like query generation, parameter binding, and result mapping, reducing the risk of SQL injection and encouraging best practices.
                </p>
                <h1 className="text-xl font-satoshi-bolditalic mb-4">The Trade-offs</h1>
                <p className="mb-4">
                    The choice between ORM and raw SQL depends on the specific needs and trade-offs of your project. It's important to consider factors such as project size, performance requirements, and team experience when making this decision. For example, most ORMs will select wildcard '*' for fields, even when you just need a list of titles from your Articles table. And ORMs will always fail in niche cases.
                </p>
                <h1 className="text-xl font-satoshi-bolditalic mb-4">Conclusion</h1>
                <p className="mb-4">
                    In conclusion, the choice between ORM and raw SQL depends on the specific needs and trade-offs of your project. It's important to consider factors such as project size, performance requirements, and team experience when making this decision.
                </p>
                </div>
                

            
        },
        {
            'notKey': 2,
            'title': 'Why Learning Java is a Strong Move for Aspiring Developers',
            'date': '/ Feb 27 2024',
            'body' : 
                <div>
                    <p className="mb-4">
                        In the ever-evolving landscape of technology, the question often arises: "Which programming language should I learn?" While languages like JavaScript and Python have been gaining popularity, particularly in the realm of web development, the value of learning Java remains significant.
                    </p>
                    <h1 className="text-xl font-satoshi-bolditalic mb-4">Java's Robustness and Versatility</h1>
                    <p className="mb-4">
                        Java, a language with a rich history and widespread use, continues to be a valuable skill for developers. Its robustness, versatility, and cross-platform capabilities make it a reliable choice for various types of development, including web, mobile, and enterprise applications. Java's long-standing presence in the industry has led to a vast ecosystem of libraries and frameworks, which can significantly speed up the development process and reduce the amount of code that developers need to write.
                    </p>
                    <h1 className="text-xl font-satoshi-bolditalic mb-4">Java in the Job Market</h1>
                    <p className="mb-4">
                        When it comes to job prospects, Java continues to hold a strong position. Many leading companies, including tech giants like Google and Amazon, rely on Java for their backend development. Furthermore, Java developers are in high demand in various sectors, including finance, healthcare, and e-commerce. Therefore, having Java in your skill set can open up a wide range of job opportunities.
                    </p>
                    <h1 className="text-xl font-satoshi-bolditalic mb-4">Java and the State of Web Development</h1>
                    <p className="mb-4">
                        As the field of web development continues to evolve, Java remains relevant. With the rise of frameworks like Spring Boot, Java has become a popular choice for building scalable and secure web applications. Moreover, Java's performance and concurrency features make it well-suited for developing high-traffic websites and data-intensive applications.
                    </p>
                    <h1 className="text-xl font-satoshi-bolditalic mb-4">The Benefits of a Strong Foundation</h1>
                    <p className="mb-4">
                        Learning Java provides a strong foundation in object-oriented programming, a concept that is crucial in many areas of software development. Understanding these fundamental principles can lead to cleaner, more efficient code, regardless of the language or framework used.
                    </p>
                    <h1 className="text-xl font-satoshi-bolditalic mb-4">Conclusion</h1>
                    <p className="mb-4">
                        In conclusion, while it's essential to stay updated with the latest languages and frameworks, the value of a solid foundation in Java should not be underestimated. For aspiring developers, learning Java can be a strategic move that sets them apart in the competitive field of software development.
                    </p>
                </div>
            
        }
    ]

    const [open, setOpen] = useState(null);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
    return (
        <section className=" text-slate-300 flex-col font-satoshi-bold mb-5 ">
            <div className=" ">
                <h1 className=" text-center p-5 text-5xl font-bold">
                    Index
                </h1>
                                
                <div className=" m-10">

                    {
                        listOfEntries.map((item,index)=>(
                            <Accordion key={index} open={open === item.notKey} className={`bg-gradient-to-r from-blue-500 to-charlie p-0.5 rounded-t-lg rounded-b-lg m-5 ${open==item.notKey? '': ' hover:animate-pulse'}`}>
                                <AccordionHeader className={` bg-slate-900 p-3 font-satoshi-bolditalic text-2xl text-center rounded-t-lg hover:underline decoration-blue-500 ${open==item.notKey? '': ' rounded-b-lg '}`} onClick={() => handleOpen(item.notKey)}>
                                    <h1 className="w-full bg-gradient-to-r from-blue-500 to-delta text-transparent bg-clip-text">
                                        {item.title} {item.date}
                                    </h1>
                                </AccordionHeader>
                                <AccordionBody className='bg-slate-900 py-4 px-10 font-satoshi-italic text-lg text-slate-300 rounded-b-lg'>
                                    {item.body}
                                </AccordionBody>
                            </Accordion>
                            
                        ))
                    }
                </div>
            </div>
            
        </section>
        
    )
}

export default BlogEntries