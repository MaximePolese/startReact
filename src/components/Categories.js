import {plantList} from "../datas/plantList";

const Categories = () => {

    const categories = [];

    plantList.forEach(function (plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    return (
        <select>
            {categories.map((category) => (
                <option key={category}>{category}</option>
            ))}
        </select>)
}