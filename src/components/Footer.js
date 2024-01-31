import {useState} from 'react'
import '../styles/Footer.css'
import QuestionForm from "./QuestionForm";
import Recommendation from "./Recommendation";

function Footer() {
    const [inputValue, setInputValue] = useState('Tapez votre email ...')

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <Recommendation/>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail :
            </div>
            <div>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur}
                />
                <button onClick={() => alert("Votre mail " + inputValue + " est inscrit à la newsletter")}>Abonnement
                    Newsletter
                </button>
            </div>
            <QuestionForm/>
        </footer>
    )
}

export default Footer