import { Link } from "react-router-dom";
import useAnimation from "../../hooks/useAnimation";

const SingleFood = ({ food }) => {

    const animation = useAnimation()
    const {_id, name, image, category, quantity, price, addedby, country, description } = food 
    
    return (
        <div data-aos="fade-up">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-5 ">
                        <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
                            {name}
                        </p>
                        <p className="block font-sans text-xl antialiased font-medium leading-relaxed text-blue-gray-900 ">
                            ${price}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 border border-pink-400 px-5 rounded-full py-1">
                            {category}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 border border-pink-400 px-5 rounded-full py-1">
                            {quantity}
                        </p>
                    </div>

                    {/* <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p> */}
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border border-pink-600"
                        type="button"
                    >
                        <Link to={`/single-food-details/${_id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;