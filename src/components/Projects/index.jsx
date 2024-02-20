

const Projects = () => {

    const projects = [
        {
            'title': 'Blog',
            'description': 'This is a personal Blog created in React with backend developed in FastAPI with SQLAlchemy',
            'image': '*image Link'
        }
    ]

    return (
        <section>
            {
                projects.map((item,index)=>(
                    <project key={index}>
                        <h3>{item['title']}</h3>
                        <p>{item['description']}</p>
                        <p>{item['image']}</p>
                    </project>
                ))
            }
        </section>
    )
}

export default Projects