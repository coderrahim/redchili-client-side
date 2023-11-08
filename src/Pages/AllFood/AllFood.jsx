import { useEffect, useState } from "react";
import SingleFood from "./SingleFoodCard";
import { useLoaderData } from "react-router-dom";
import './AllFood.css'
import PageTitle from "../../Components/PageTitle";

const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const { count } = useLoaderData()
    const numberOfPages = Math.ceil(count / itemsPerPage)

    // Data Load
    useEffect(() => {
        setLoading(true)
        fetch(`https://red-chili-server-side.vercel.app/addfoods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setLoading(false)
            })
    }, [currentPage, itemsPerPage])

    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleSearch = e => {
        e.preventDefault()
        const inputText = (e.target.search.value).toLowerCase();
        setSearchText(inputText)
        console.log(inputText)
    }

    return (
        <div className="container">
            <PageTitle title="All Food" />

            <div className="flex justify-between flex-wrap">
                <h2 className="title">Our Letest Food Items </h2>

                <form onSubmit={handleSearch}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Search with Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="search" placeholder="input food name" className="input input-bordered" />
                            <span className="bg-pink-500 text-white text-lg font-bold">
                                <input type="submit" value="Search" />
                            </span>
                        </label>
                    </div>
                </form>
            </div>

            {
                loading ?
                    <div className="flex flex-col items-center justify-center h-1/2">
                        <span className="loading loading-ring loading-lg text-error"></span>
                    </div>
                    :
                    <div>
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

                        {/* PAGINATION */}

                        <div className="flex gap-3 justify-center bg-base-200 pagination">
                            <button onClick={handlePrevPage}>Prev</button>
                            {
                                pages.map(page => <button
                                    key={page}
                                    className={currentPage === page ? 'selected' : undefined}
                                    onClick={() => setCurrentPage(page)}
                                >{page}</button>)
                            }
                            <button onClick={handleNextPage}>Next</button>
                            <select value={itemsPerPage} onChange={handleItemsPerPage} className="border-black border rounded-lg">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>
            }
        </div>
    );
};

export default AllFood;