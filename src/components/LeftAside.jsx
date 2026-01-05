import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
    return (
        <div className='w-full'>
            <h2 className='text-accent-foreground text-xl mb-5 font-semibold'>All Category</h2>
            <Suspense 
            fallback={<div className='flex items-center justify-center'><span className="loading loading-spinner text-neutral"></span></div>}>
                <Categories/>
            </Suspense>   
        </div>
    );
};

export default LeftAside;