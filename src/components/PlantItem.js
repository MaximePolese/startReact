import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({id, cover, name, water, light, isBestSale, isSpecialOffer}) {
    return (
        <li key={id} className='lmj-plant-item'>
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

export default PlantItem
