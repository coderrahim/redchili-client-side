import team1 from '../../assets/Team/1.jpg'
import team2 from '../../assets/Team/2.jpg'
import team3 from '../../assets/Team/3.jpg'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
    return (
        <div className='bg-pink-100'>
            <div className='container'>
            <h2 className='title'>Our <span className='text-red-500'>Team</span> </h2>
            <div className='flex flex-wrap justify-center gap-5'>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={team1} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Jecy Deoko
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Food Tester
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed "
                        >
                            <span><FaFacebook /></span>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={team2} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Leah Gotti
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Grill & Nun Chef
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed "
                        >
                            <span><FaFacebook /></span>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={team3} alt="profile-picture" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Jack Danial
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Head Chef
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed "
                        >
                            <span><FaFacebook /></span>
                        </a>
                        <a
                            href="#twitter"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#instagram"
                            className="block font-sans text-xl antialiased font-normal leading-relaxed"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Team;