import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuthContext from '../hooks/useAuthContext';
import useCart from '../hooks/useCart';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    const { user,logoutUser } = useAuthContext();
    const {cart} = useCart();
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to={user ? "/dashboard" : "/"}>{user ? "Dashboard" : "Home"}</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
                <div className='mt-4'> 
                    <Link to="/" className="flex items-center gap-2 mb-6 px-2">
                        <FiShoppingCart className="h-6 w-6" />
                        <h1 className="text-xl font-bold">PhiMart</h1>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={user ? "/dashboard" : "/"}>{user ? "Dashboard" : "Home"}</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Porfile and Cart */}
            <div className="navbar-end">
            {user ? (
                <div>
                    <div className="dropdown dropdown-end mr-4">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                    <span className="badge badge-sm indicator-item">{cart?.items?.length || 0}</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">{cart?.items?.length || 0} Items</span>
                                    <span className="text-info">Subtotal: ${cart?.total_price || 0}</span>
                                    <div className="card-actions">
                                        <Link to={"dashboard/cart/"}>
                                            <button className="btn btn-neutral btn-block">View cart</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={logoutUser}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            ) :
            (
                <div className='flex gap-3'>
                    <Link to="/login" className='btn btn-neutral'>Login</Link>
                    <Link to="/register" className='btn btn-neutral'>Register</Link>
                </div>
            )
            }
            </div>
    </div>
</div>
    );
};

export default Navbar;



// {/* <Link to="/">Home</Link>
//             <Link to="/products">Products</Link>
//             <Link to="/about">About</Link> */}

//             <NavLink 
//                 to="/"
//                 className={({isActive}) => (isActive ? "text-blue-500" : "")}
//             >
//                 Home
//             </NavLink>

//             <NavLink 
//                 to="/products"
//                 className={({isActive}) => (isActive ? "text-blue-500" : "")}
//             >
//                 Products
//             </NavLink>
//             <NavLink 
//                 to="/about"
//                 className={({isActive}) => (isActive ? "text-blue-500" : "")}
//             >
//                 About
//             </NavLink>