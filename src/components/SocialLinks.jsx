import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div>
            
            <div className='cursor-pointer p-4 flex gap-2.5 border-t-2 border-l-2 border-r-2 border-base-200 rounded-t-md mt-5 items-center'>
                <div className='bg-base-200 flex items-center justify-center p-4 rounded-[50%] cursor-pointer hover:bg-blue-500 hover:text-white'>
                    <FaFacebookF className='text-[#3B599C]' />
                </div>
                <p className='font-medium text-accent'>Facebook</p>
            </div>
            <div className='cursor-pointer p-4 flex gap-2.5 border-t-2 border-l-2 border-r-2 border-base-200 items-center'>
                <div className='bg-base-200 flex items-center justify-center p-4 rounded-[50%] cursor-pointer hover:bg-blue-500 hover:text-white'>
                    <FaTwitter className='text-[#58A7DE]' />
                </div>
                <p className='font-medium text-accent'>Twitter</p>
            </div>
            <div className='cursor-pointer p-4 flex gap-2.5 border-2 border-base-200 rounded-b-md items-center'>
                <div className='bg-base-200 flex items-center justify-center p-4 rounded-[50%] cursor-pointer hover:bg-blue-500 hover:text-white'>
                    <FaInstagram className='text-[#E1306C]' />
                </div>
                <p className='font-medium text-accent'>Instagram</p>
            </div>
        </div>
    );
};

export default SocialLinks;