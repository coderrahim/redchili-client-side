import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo/logo.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useUserInfo from "../hooks/useUserInfo";

const Navbar = () => {
    const dbuser = useUserInfo()

    const { user, LogOut } = useContext(AuthContext)

    const navMenu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all-food'>All Food</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="shadow-sm bg-pink-100">
            <div className="navbar h-[90px]  container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to='/'><img className=" btn-md" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="flex items-center justify-center gap-5">

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost shadow-xl btn-circle avatar">
                                        <div className="w-12 rounded-full">
                                            {
                                                user.photoURL ?
                                                    <img src={user.photoURL} />
                                                    :
                                                    <img src={dbuser[0]?.photo_url} />
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-right border">
                                        {
                                            user?.displayName ?
                                            <li className="text-md text-center font-medium">{user?.displayName} </li>
                                            :
                                            <li className="text-md text-center font-medium">{dbuser[0]?.name} </li>

                                        }

                                        <li className=" text-md mb-4 font-medium "> {user?.email} </li>

                                        <button className="btn btn-outline btn-sm inline"><Link to='/added-food'>My Added Food</Link></button>

                                        <button className="btn btn-outline btn-sm my-3">
                                            <Link to='/add-food'>Add Food</Link>
                                        </button>

                                        <button className="btn btn-outline btn-sm">
                                            <Link to='/my-order-food'>My Order Food</Link>
                                        </button>

                                    </ul>
                                </div>

                                <div>
                                    <button onClick={LogOut} className="btn btn-outline btn-sm md:btn-md btn-primary">Logout</button>
                                </div>
                            </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-outline btn-primary btn-sm md:btn-md">Login</button>
                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;