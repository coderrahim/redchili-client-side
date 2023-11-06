import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderFoodRow from "./OrderFoodRow";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const OrderFood = () => {
    const { user } = useContext(AuthContext)
    const [order, SetOrder] = useState([])

    const url = `http://localhost:5000/foodOrder?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                SetOrder(data)
            })
    }, [url])

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/foodOrder/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = order.filter(order => order._id !== id);
                            SetOrder(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            {
                order.length == 0 ?
                    <div className="h-full flex flex-col items-center justify-center bg-base-200 dark:bg-gray-800 dark:text-white rounded-lg py-28">
                        <h1 className="text-4xl md:text-4xl lg:text-5xl mt-10 font-bold">Oopsh!</h1>
                        <p className="text-xl my-6">No Food Added in Cart </p>

                        <div className="flex gap-5">
                            <Link to='/all-food'><button className="btn  btn-primary">Add Product</button></Link>

                            <Link to='/'><button className="btn  btn-secondary">Go Home</button></Link>
                        </div>
                    </div>
                    :
                    <div className="overflow-x-auto container">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr className="text-base ">
                                    <th>Image</th>
                                    <th>Food Name</th>
                                    <th>Category</th>
                                    <th>Food Price</th>
                                    <th>Purchase Date</th>
                                    <th className="flex justify-center">Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    order.map(food => <OrderFoodRow
                                        key={food._id}
                                        food={food}
                                        handleDelete={handleDelete}
                                    ></OrderFoodRow>)
                                }

                            </tbody>

                        </table>
                    </div>
            }
        </div>
    );
};

export default OrderFood;