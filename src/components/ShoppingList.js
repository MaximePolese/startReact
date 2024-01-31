import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({cart, updateCart}) {

    const categories = [];
    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, isBestSale, isSpecialOffer, price}) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        isBestSale={isBestSale}
                        isSpecialOffer={isSpecialOffer}
                        price={price}
                        cart={cart}
                        updateCart={updateCart}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList