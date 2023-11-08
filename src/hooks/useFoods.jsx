import { useEffect, useState } from "react";


const useFoods = () => {
    const [food, setFood] = useState([])

    useEffect( () => {
        fetch('https://red-chili-server-side.vercel.app/addfood')
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    },[])

    return food;
};

export default useFoods;