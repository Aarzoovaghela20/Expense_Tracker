import React from "react";
import './Card.css';
//props ka ek property hota h children jo uske ander ka chije copy krke yha pass kr dega
//props me ek aur prop hota h props.className jisme wo apne side wale classes ko insclude krtleta h
const Card=(props)=>{
    const classes='card '+ props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card;