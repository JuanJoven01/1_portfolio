import Header from '../../components/header'
import Resume from '../../components/resume'
import Projects from '../../components/Projects'
import Technologies from '../../components/technologies'

const Portfolio = () => {

    return (
        <div className=' backdrop-blur-3xl'>
            <Header/>
            <Resume/>
            <Projects/>
            <Technologies/>
        </div>

    )
}

export default Portfolio