import './App.css';
import Banner from './components/Banner';
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import './styles/Layout.css';
import {useState} from "react";

function App() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    const [cart, updateCart] = useState(savedCart ? savedCart : [])

    return (
        <div>
            <Banner/>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
