import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={enteredAmount} step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;
/* tino me onchange event handler lagaya h to usme jo bhi function lagaya h wo execute hoga use uppar define kr liya h usme value milta h hme jo event object h usme event.target.value wo changed value de dega usko ham ek variable me store krenge jo hme usestate se milega
aur usko update krne ke liye ek function milta h  */