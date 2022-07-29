import React from 'react';
import Banner from './Banner';
import MenuBar from './MenuBar';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
            <Posts></Posts>
        </div>
    );
};

export default Home;