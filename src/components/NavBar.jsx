import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [onProcessing, setOnProcessing] = useState(false);
  console.log(user);
  const handleLogout = async () => {
    setOnProcessing(true)
    try{
        await logOut();
    } catch (error) {
        alert("Failed to LogOut. Please try again later", error)
    } finally{
        setOnProcessing(false)
    }
  }
  return (
    <div className="mt-5 flex justify-between  items-center w-full relative">
      <div>
        {user ? (
          <>
            <p className="text-2xl font-medium">{user.displayName}</p>
            <span className="text-accent">{user.email}</span>
          </>
        ) : null}
      </div>
      <div className="flex gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <NavLink className="text-accent" to="/">
          Home
        </NavLink>
        <NavLink className="text-accent" to="/about">
          About
        </NavLink>
        <NavLink className="text-accent" to="/career">
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={userIcon} className="h-10 w-10" alt="user" />
        {user ? (
          <button 
          className="btn btn-primary"
          onClick={handleLogout}
          disabled={onProcessing}>LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
