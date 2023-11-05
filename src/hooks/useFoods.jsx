import { useEffect, useState } from "react";


const useFoods = () => {
    const [food, setFood] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/addfood')
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    },[])

    return food;
};

export default useFoods;