import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const useAnimation = () => {
    useEffect( () => {
        Aos.init({
            duration: 1000
        })
    } ,[])
    return (useAnimation);
};

export default useAnimation;