import '../../styles/App.css'
import react_img from '../../components/images/img-react.png'
import css_img from '../../components/images/img-css.png'

const Tutorial = () => {
    // javascript
    return (
        // html
        <div>
            <h2>Tutorial</h2>
            <p> Howto add images in react</p>
            <img src={react_img} alt="Tutorial" width="800" height="400" />
            <p> Add background image in CSS</p>
            <img src={css_img} alt="Tutorial" width="800" height="100" />
        </div>
    )
};

export default Tutorial;