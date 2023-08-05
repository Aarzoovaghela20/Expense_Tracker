//import './Trial.css';
import React,{useState,useEffect} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
//import Expenseitem from './components/Expenseitem';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE=[
    
    {
        id:'e1',
        title:'school fee',
        amount: 250,
        date:new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title:'house rent',
        amount: 230,
        date:new Date(2021, 2, 12)
    },
    {
        id:'e3',
        title:'Books',
        amount: 2500,
        date:new Date(2021, 4, 12)
    },
    {
        id:'e4',
        title:'Food',
        amount: 540,
        date:new Date(2021, 1, 12)
    },
];
    


const Trial = () =>{
    /*Make array of objects*/
    /*small letter html cap me hoto wo component hoga*/
    // function fetchData(){
    //     fetch('http://localhost/sample-api/api/read.php').then(
    //         response=>{response.json();
    //         }
    //     ).then(
    //         data=>{
    //             setExpenses(data);
    //         }
    //     );
    // }
    const [expenses,setExpenses]=useState(DUMMY_EXPENSE);
    // useEffect(()=>{
    //     fetchData();
    // },[]);{
    //     // array me jo variable hoga uske change hone pe hi ye baar baar run hoga loop
    // }
   
    

    const addExpenseHandler=(expense)=>{
        // fetch('url',{
        //     method:'POST',
        //     body:JSON.stringify(expense),
        //     headers: {
        //         'content-Type':'application/json'
        //     }
        // }).then(
        //     response=>{
        //         fetchData();
        //     }
        // );
        const updatedExpense=[expense, ...expenses];
        setExpenses(updatedExpense);
    };

        
        


    
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}
export default Trial;

//2 chije chahiye domain aur server 
// website ka name aur server ka thoda space taki wo 24/7 chale