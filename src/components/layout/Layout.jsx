import React, { useState } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-text-primary">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};
export default MainLayout;

