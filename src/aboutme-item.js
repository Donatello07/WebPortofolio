import React from "react";
import aboutmeData from './JSON/AboutMe.json';
import './AboutMe.css';

const ItemAboutMe = ({ items }) => {
    console.log(items);
    return (
        
        <div className="about-me-slider">
            {
                items.map((item,i)=>{
                    return(
                        <div className="about-me-single-slide" >
                        <h2 className="universal-h2 universal-h2-bckg" > {item.title}</h2>
                        <p> <span> H </span> {item.description}</p>
                        <h4> Author </h4>
                        <p className="p-white" > See me </p> </div>)
                    
                })
            }
        </div>
    )
}
export default ItemAboutMe;