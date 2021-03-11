import React, { Component } from 'react';
import './AboutMe.css';
import imgAboutMe from './Image/about-me.jpg';
import ItemAboutMe from './aboutme-item';
import aboutmeData from './JSON/AboutMe.json';



export default class AboutMe extends Component {


    render() {
        console.log(aboutmeData);
        if (aboutmeData) {
            return (
                <div className="fh5co-about-me">
                    <div className="about-me-inner site-container">
                        <article className="portfolio-wrapper">
                            <div className="portfolio__img">
                                <img src={imgAboutMe} className="about-me__profile" alt="about me profile picture" />
                            </div>
                            <div className="portfolio__bottom">
                                <div className="portfolio__name">
                                    <span>J</span>
                                    <h2 className="universal-h2">Jhone Smith</h2>
                                </div>
                                <p>Jhone Smith is a short story author, novelist, and award-winning poet.</p>
                            </div>
                        </article>
                        <div className="about-me__text">
                            
                                <ItemAboutMe items={aboutmeData} />

                        </div>
                    </div>
                    <div className="about-me-bckg"></div>
                </div>
            );
        }

    }
}