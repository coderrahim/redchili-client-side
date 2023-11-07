import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useFoodFilter = () => {
    const {user} = useContext(AuthContext)
    const [food, setFood] = useState([])

    const url = `http://localhost:5000/addfood?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    })
    return food;
};

export default useFoodFilter;