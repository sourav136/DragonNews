import React from 'react';
import LoginWith from './LoginWith';
import SocialLinks from './SocialLinks';
import FindUsOn from './FindUsOn';

const RightAside = () => {
    return (
        <div className='w-full'>
            <LoginWith/>
            <FindUsOn/>
        </div>
    );
};

export default RightAside;