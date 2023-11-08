import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useUserInfo = () => {
    const {user} = useContext(AuthContext)
    const [dbuser, setDbuser] = useState([])

    const url = `https://red-chili-server-side.vercel.app/user?email=${user?.email}`
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDbuser(data)
        })
    } ,[url])
    
    return dbuser;
};

export default useUserInfo;