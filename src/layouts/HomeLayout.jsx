import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeAsideLayout/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/HomeAsideLayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto' style={{ maxHeight: '100vh' }}>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <section>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className='grid grid-cols-1 lg:grid-cols-12 gap-10 my-20'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6' >
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;