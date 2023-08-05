import React from "react";
import './Expenseitem.css';

import Expensedate from './Expensedate';
import Card from '../UI/Card';
const Expenseitem=(props)=>{
    
    return(
        <Card className="expense-item">
            <Expensedate date={props.date} />
            <div className="expense-item__description">  
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs. {props.amount}</div>
            </div>   
        </Card>
    );
}
export default Expenseitem;
// agr date jo lia h wo diff h to date wale me ye changes krdo
//date={new Date(props.date)} string to object
