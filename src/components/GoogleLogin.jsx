import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    return (
        <button className='btn btn-outline w-full text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white mb-2.5'>
            <FaGoogle /> Login with Google
        </button>
    );
};

export default GoogleLogin;