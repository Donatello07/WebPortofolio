import React, { Component } from 'react';
import './Header.css';
import image from './Image/top-banner-author.jpg';
import data from './JSON/Header.json'

export default class Header extends Component {
    render() {

        return (
            <div className="fh5co-top-banner">
                <div className="top-banner__inner site-container">
                    <div className="top-banner__image">
                        <img src={image} alt="ini gambar" />
                    </div>
                    <div className="top-banner__text">
                        <div className="top-banner__text-up">
                            <span className="brand-span">Hello! I'm</span>
                            <h2 className="top-banner__h2">{data.firstname}</h2>
                        </div>
                        <div className="top-banner__text-down">
                            <h2 className="top-banner__h2">{data.lastname}</h2>
                            <span className="brand-span">{data.skills}</span>
                        </div>
                        <p>{data.description}</p>
                        <a href="/" className="brand-button">Read bio </a>
                    </div>
                </div>
            </div>
    
        );
    }
}