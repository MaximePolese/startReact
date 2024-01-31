import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({id, cover, name, water, light, isBestSale, isSpecialOffer, price, cart, updateCart}) {
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount + 1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
        alert(`Vous avez ajouté 1 ${name} au panier ! Très bon choix 🌱✨`)
    }

    return (
        <li key={id} className='lmj-plant-item'>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}
                 onClick={() => addToCart(name, price)}/>
            <div>
                {name}
                {isBestSale && <span> 💚💚💚</span>}
            </div>
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
                {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
            </div>
        </li>
    )
}

export default PlantItem
