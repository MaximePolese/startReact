import {useState} from 'react'
import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({cart, updateCart}) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const filteredPlantList = selectedCategory ? plantList.filter(plant => plant.category === selectedCategory) : plantList;

    return (
        <div className='lmj-shopping-list'>
            <Categories
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <ul className='lmj-plant-list'>
                {filteredPlantList.map(({id, cover, name, water, light, isBestSale, isSpecialOffer, price}) => (
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