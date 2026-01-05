import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const NavBar = () => {
    return (
        <div className='mt-5 flex justify-between  items-center w-full relative'>
            <div></div>
            <div className='flex gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <NavLink className="text-accent" to="/">Home</NavLink>
                <NavLink className="text-accent" to="/about">About</NavLink>
                <NavLink className="text-accent" to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-2'>
                <img src={user} className='h-10 w-10' alt="user" />
                <button className='btn btn-primary text-white'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;