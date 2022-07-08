import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Fitness Class in the Town</span>
                </div>
            </div>
            <div className="right-h">
                right
            </div>
        </div>
    );
};

export default Hero;