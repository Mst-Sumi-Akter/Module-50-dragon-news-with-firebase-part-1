import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';


const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className=''>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main'> <Outlet></Outlet> </section>
                <aside>
                 <RightAside></RightAside>
                </aside>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;