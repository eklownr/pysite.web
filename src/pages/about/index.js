import '../../styles/App.css'
import easy from './easy.png'
import easyProject from '../../components/images/easy.jpg'

const About = () => {
    // javascript
    return (
        // html
        <div>
            <h2>About this site</h2>
            <img src={easy} alt="About..." width="400" height="300" />
            <img src={easyProject} alt="About..." width="300" height="200" />
            <img src={easyProject} alt="About..." width="170" height="100" />
        </div>
    )
};

export default About;