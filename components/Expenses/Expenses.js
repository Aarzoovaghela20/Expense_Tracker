import React from "react";
import Expenseitem from "./Expenseitem";
import './Expense.css';
import Card from '../UI/Card';
const Expenses=(props)=>{
    return(
        <Card className="expenses">
            {
                props.item.map(
                    expense =>(
                    <Expenseitem
                        //key={expense.id}//give some unique value from the db helps in rendering
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}/>
                    )
                )
            }
           
        </Card>
    );
}
export default Expenses;