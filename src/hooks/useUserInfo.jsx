import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useUserInfo = () => {
    const {user} = useContext(AuthContext)
    const [users, setUsers] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    } ,[])
    
    return users;
};

export default useUserInfo;