import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import CategoryNews from '../components/categoryNews';


const HomeLayout = () => {
    return (
        <>
            <header className='max-w-7xl mx-auto px-8 lg:px-3 '>
                <Header/>
                <nav>
                    <NavBar/>
                </nav>
            </header>
            <main className='max-w-7xl mx-auto px-8 lg:px-3 grid grid-cols-12 gap-5 mt-10'>
                <aside className='col-span-3'>
                    <LeftAside/>
                </aside>
                <section className='col-span-6'>
                    <CategoryNews/>
                </section>
                <aside className='col-span-3'>
                    <RightAside/>
                </aside>
            </main>
        </>
    );
};

export default HomeLayout;