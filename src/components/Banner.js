function Header() {
    const title = "la maison jungle"
    return (<h1>{title.toUpperCase()}</h1>)
}

function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
    return (<p>{text}</p>)
}

function Banner() {
    return (<div>
        <Header/>
        <Description/>
    </div>)
}

export default Banner