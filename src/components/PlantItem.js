import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({id, cover, name, water, light, isBestSale, isSpecialOffer}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
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

function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem
