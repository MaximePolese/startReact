import '../styles/Cart.css'

function Cart() {
    const priceMonstera = 8
    const priceLierre = 10
    const priceFleurs = 15
    return (<div className='lmj-cart'>
        <ul>
            <li>Monstera {priceMonstera} €</li>
            <li>Lierre {priceLierre} €</li>
            <li>Fleurs {priceFleurs} €</li>
        </ul>
        Total {priceMonstera + priceLierre + priceFleurs} €
    </div>)
}

export default Cart