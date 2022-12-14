import React, { useState } from 'react'
import Expense from "../src/Expense/Expense"
import NewExpense from "./NewExpense"
import './index.css'



const DUMMY_STATE = [
    
  {title: 'car Insurance', amount: 296.67, date: new Date(2022, 8, 10)},
  {title: 'new Tv', amount: 196.67, date: new Date(2022,  8, 10)},
  {title: 'toilet paper', amount: 96.67, date: new Date(2022, 8,10)},
  {title: 'new Desk', amount: 26.67, date: new Date(2022, 8, 10)},

]


function App() {

const [expenses, setExpenseState] = useState(DUMMY_STATE)
  const addExpenseHandler = expense =>{
    setExpenseState(prevState=>{
      return [expense, ...prevState]
    })
  };
  
 return (
  <>
  <NewExpense onAddExpense = {addExpenseHandler} />
  <Expense items = {expenses} />
       </>
 )
    
  
}

export default App
