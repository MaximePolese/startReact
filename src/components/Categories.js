import {plantList} from "../datas/plantList";
import '../styles/Categories.css'

const Categories = ({selectedCategory, setSelectedCategory}) => {

    const categories = [];
    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    return (
        <div className="categories">
            <label htmlFor="select">Choisir une catégorie : </label>
            <select id="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">toutes les plantes</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>)
}

export default Categories