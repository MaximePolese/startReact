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

// Ajoutez des fonctionnalités
// Vous avez peut-être envie de pousser notre site La maison jungle plus loin ? Voilà quelques idées de features qui vous permettraient de vous exercer :
//     Permettre de supprimer des articles dans le panier.
//     Permettre de sélectionner plusieurs catégories.
//     Afficher des informations supplémentaires au clic sur un article dans une modale.
//     Ajouter du style : des animations pour ouvrir/fermer le panier, sur le header, personnaliser les boutons, etc.