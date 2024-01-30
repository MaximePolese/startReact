import {plantList} from '../datas/plantList'

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
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name} {plant.isBestSale && <span>💚</span>}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList