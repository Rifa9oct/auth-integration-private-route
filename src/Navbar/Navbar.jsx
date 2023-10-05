import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-pink-500 text-white font-bold" : isPending ? "pending" : ""}>Home</NavLink>
        </li>
        <li> <NavLink to="/login" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-pink-500 text-white font-bold" : isPending ? "pending" : ""}>Login</NavLink>
        </li>
        <li> <NavLink to="/register" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-pink-500 text-white font-bold" : isPending ? "pending" : ""}>Register</NavLink>
        </li>
        <li> <NavLink to="/orders" className={({ isActive, isPending }) =>
            isActive ? "active px-3 py-2 rounded-lg bg-pink-500 text-white font-bold" : isPending ? "pending" : ""}>Orders</NavLink>
        </li>
    </>

    const handleLogOut = ()=>{
        logOut()
        .then(() => {
            Swal.fire(
                'Thank you',
                'Signout successfully',
                'success'
              )
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 font-bold dropdown-content mt-3 z-[1] p-3 py-6 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Auth-Intregration</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 font-bold">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <>
                        <span className="mr-4">{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-secondary font-bold">Signout</a>
                    </>:
                    <Link to="/login">
                        <button className="btn btn-secondary font-bold">Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;