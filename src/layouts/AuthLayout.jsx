import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto px-8 lg:px-3 '>
            <header>
                <NavBar/>
            </header>
            <main className='flex justify-center items-center min-h-[80vh]'>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;