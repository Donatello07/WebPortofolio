import React from 'react';
import ImgTopBanner from './images/top-banner-author.jpg';
import './css/slick.css';
import './css/style.css';

function TopBanner() {
    return (
        <div className="top-banner__inner site-container">
            <div className="top-banner__image">
                {/* <img src={ImgTopBanner} alt="author image"/> */}
            </div>
            <div className="top-banner__text">
                <div className="top-banner__text-up">
                    <span className="brand-span">Hello! I'm</span>
                    <h2 className="top-banner__h2">Ramdhany</h2>
                </div>
                <div className="top-banner__text-down">
                    <h2 className="top-banner__h2">Kaisupy</h2>
                    <span className="brand-span">Web Developer</span>
                </div>
                {/* <p>One Man. One Mission. Can He Go Beyond?One Man. One Mission. Can He Go Beyond?</p> */}
           
            </div>
        </div>
    );
  }
  export default TopBanner;