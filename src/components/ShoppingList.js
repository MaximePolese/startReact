import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = [];
    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='lmj-plant-item'>{plant.name} {plant.isBestSale &&
                        <span>💚💚💚</span>} {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList