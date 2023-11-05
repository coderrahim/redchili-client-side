
import AddedFoodRow from "./AddedFoodRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AddedFood = () => {
    const {user} = useContext(AuthContext)
    const [foodAdded, setFoodAdded] = useState([])

    const url = `http://localhost:5000/addfood?email=${user?.email}`
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFoodAdded(data)
        })
    } ,[url])
    
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
                        foodAdded.map(food => <AddedFoodRow
                            key={food._id}
                            food={food}
                        ></AddedFoodRow>)
                       }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AddedFood;