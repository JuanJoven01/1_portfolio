const Technologies  = () => {

    const technologies = [
        {
            'title': 'HTML',
            'logo': 'logo por ahora'
        }
    ]

    return (
        <section>
            {
                technologies.map((item,index)=>(
                    <div key={index}>
                        <p>{item['title']}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Technologies