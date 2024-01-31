import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({cart, updateCart}) {

    return (
        <div className='lmj-shopping-list'>
            <Categories/>
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