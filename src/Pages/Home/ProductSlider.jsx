import { useEffect, useState } from "react";
import SingleFood from "../AllFood/SingleFoodCard";
import { Link } from "react-router-dom";


const ProductSlider = () => {
    const [foods, setFoots] = useState([])

    useEffect(() => {
        fetch('https://red-chili-server-side.vercel.app/addfoods')
            .then(res => res.json())
            .then(data => {
                setFoots(data)
            })
    })
    const showFood = foods.slice(0, 3)

    return (
        <div>
            <h2 className="title">Latest Food</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center container">
                {
                    showFood.map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
            <Link to='/all-food' className="flex justify-center my-8">
                <button className="btn btn-red">See All Food</button>
            </Link>

        </div>
    );
};

export default ProductSlider;