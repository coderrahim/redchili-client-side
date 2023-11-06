import { useState } from "react";
import useFoods from "../../hooks/useFoods";
import SingleFood from "./SingleFoodCard";

const AllFood = () => {
    const foods = useFoods()
    const [searchText, setSearchText] = useState('')

    const handleSearch = e => {
        e.preventDefault()
        const inputText = (e.target.search.value).toLowerCase();
        setSearchText(inputText)
        console.log(inputText)
    }

    return (
        <div className="container">

            <div className="flex justify-between flex-wrap">
                <h2 className="title">Our Letest Food Items</h2>

                <form onSubmit={handleSearch}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Search with Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="search" placeholder="input food name" className="input input-bordered" />
                            <span  className="bg-pink-500 text-white text-lg font-bold">
                                <input type="submit" value="Search" />
                            </span>
                        </label>
                    </div>
                </form>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container">
                {
                    (foods.length == 0) ? 
                    <div className="flex flex-col items-center justify-center h-1/2">
                        <h2 className="text-2xl font-bold">No product Available!</h2>
                        <p>Food will be Add Soooon.</p>
                    </div>
                    : 
                    foods?.filter((food) => {
                        return searchText === '' ? food : food.name.toLowerCase().includes(searchText)
                    }).map(food => <SingleFood
                        key={food._id}
                        food={food}
                    ></SingleFood>)
                }
            </div>
        </div>
    );
};

export default AllFood;