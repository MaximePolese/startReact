import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Recommendation from './Recommendation'

function Header() {
    const title = "la maison jungle"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>)
}

function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
    return (<p>{text}</p>)
}

function Banner() {
    return (<div>
        <Header/>
        <Description/>
        <Recommendation/>
    </div>)
}

export default Banner