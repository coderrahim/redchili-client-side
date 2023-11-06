import { Link } from 'react-router-dom';
import Err from '../assets/Team/404.jpg'

const Error = () => {
    return (
        <div>
            <div className='container flex flex-col h-screen justify-center items-center relative'>
                <img className='lg:w-2/4 rounded-full border shadow-lg' src={Err} alt="" />

                <Link to='/'><button className='btn btn-red absolute bottom-10'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;