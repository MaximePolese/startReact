import '../styles/Recommendation.css'

function Recommendation() {
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    if (!isSpring) {
        return (<div className='lmj-recom'>Ce n'est pas le moment de rempoter ☀️❄️ </div>)
    }
    return (<div className='lmj-recom'>C'est le printemps, rempotez ! 🪴</div>)
}

export default Recommendation