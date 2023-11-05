import { Link, useLoaderData } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

const SingleFoodDetails = () => {
    const foodDetails = useLoaderData();
    const { _id, name, image, category, quantity, price, addedby, country, description } = foodDetails

    return (
        <div className="container">
            <div className="flex flex-col md:flex-row gap-20 flex-wrap mb-10 font-semibold">
                <div className="w-1/2">
                    <img className="rounded-lg shadow-lg" src={image} alt="" />
                </div>
                <div className="text-xl space-y-2 capitalize">
                    <h2 className="text-4xl font-medium mb-4"> {name} </h2>
                    <h2 className="bg-pink-100 py-1 inline-block px-3 rounded-lg"> category : {category} </h2>
                    <h2> quantity : {quantity} </h2>
                    <h2 className="text-3xl font-medium text-pink-600 pt-6"> price : {price} </h2>
                    <h2> Make By : {addedby} </h2>
                    <h2> Food Origin : <span className="uppercase">{country}</span> </h2>
                    <div className="pt-10">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-red w-full my-5">Order Now <span className="text-xl"><BsCartPlus /></span> </button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="text-xl ">
                <h2 className="bg-pink-200 py-3 rounded-md my-5 font-bold">Description:</h2>
                {description}
            </div>
        </div>
    );
};

export default SingleFoodDetails;

