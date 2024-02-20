const Footer = () => {

    const linksToContact = [
        {
            'title':'GitHub',
            'link' : 'https://github.com/JuanJoven01',
            'image': ' *image '
        },
        {
            'title':'LinkedIn',
            'link' : 'https://www.linkedin.com/in/juan-pablo-joven-urbano-05202129a/',
            'image': ' *image '
        },
        {
            'title':'Whatsapp',
            'link' : 'https://www.linkedin.com/in/juan-pablo-joven-urbano-05202129a/',
            'image': ' *image '
        }
    ]
    return (
        <footer>
            {
                linksToContact.map((item,index)=>(
                    <div key={index}>
                        <img src="" alt="" />
                    </div>
                ))
            }
        </footer>
    )
}

export default Footer