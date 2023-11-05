import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderFoodRow from "./OrderFoodRow";


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
    return (
        <div>
            <div className="overflow-x-auto container">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-base">
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Category</th>
                            <th>Food Price</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            order.map(food => <OrderFoodRow
                                key={food._id}
                                food={food}
                            ></OrderFoodRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default OrderFood;