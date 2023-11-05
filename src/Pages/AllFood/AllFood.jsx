import useFoods from "../../hooks/useFoods";
import SingleFood from "./SingleFoodCard";

const AllFood = () => {
    const foods = useFoods()

    return (
        <div>
            <h2 className="title">Our Letest Food Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container">
                {
                    foods.map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default AllFood;