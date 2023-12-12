import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navber = () => {

    const {logout,user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout()
            .then(res => {
                navigate('/');
            })
            .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allfood'>All Food Items</NavLink></li>
        <li><NavLink to='/Blog'>Blog</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>

    const profile = <>
     <li><NavLink to='/addfood'>Add a Food Iteams</NavLink></li>
     <li><NavLink to='/addedfood'>My added food items</NavLink></li>
     <li><NavLink to='/orderedfood'>My ordered food items</NavLink></li>
    </>

    return (
        <div className="shadow-2xl">
        <div className="navbar bg-[#F5F5DC] px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link>
                    <img className="h-[80px] rounded-full" src='https://i.ibb.co/4Ygm27Q/Borcelle.png' alt="" />
                    {/* <h2 className="text-xl font-semibold text-orange-500 hidden md:block">Bangla Bites</h2> */}
                </Link>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {user ? (
                    <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img className="rounded-full flex justify-center items-center mx-auto" src={user.photoURL} alt="user profile" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><button className="text-red-600 font-bold" onClick={handleLogout}>Log Out</button></li>
                                <li>
                                    <a className="justify-between">
                                        <h2 className='text-green-500 font-semibold'>{user.displayName}</h2>
                                    </a>
                                </li>
                                <div className='bg-sky-200 rounded-2xl shadow-2xl py-4 font-semibold'>
                                {
                                    profile
                                }
                                </div>
                            </ul>
                        </div>

                    </>
                ) : (
                    <NavLink className="btn btn-ghost capitalize" to="/login">
                        Login
                    </NavLink>
                )}
                
                {/* <NavLink className="btn btn-ghost capitalize" to="/login">
                        Login
                </NavLink> */}

            </div>
        </div>
    </div>
    );
};

export default Navber;