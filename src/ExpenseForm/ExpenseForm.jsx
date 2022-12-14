import { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props)=>{

    const [enteredValue, setValue] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('');


    // not a good practice
    // const [userInput, setUserInput] = useState({
    //     enteredInputText: '',
    //     enteredAmount: '',
    //     enteredDate : ''
    // });
const titleChangeHandler= (event)=>{
    setValue(event.target.value);
//    setUserInput((prevState)=>{
//     return {...prevState, enteredInputText: event.target.value}
//    });

    }

    const amountInputHandler = (event)=>{
     setEnteredAmount(event.target.value);
    }
    const dateHandler = (event)=>{
      setEnteredDate(event.target.value)
    }

const submitHandler= (event)=>{

event.preventDefault()
const expenseData = {
    title:enteredValue,
    amount: +enteredAmount,
    date: new Date(enteredDate)
}

props.onSaveExpenseData(expenseData)

setValue('');
setEnteredAmount('')
setEnteredDate('')

}




return (
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Title</label>
                <input
                 type="text" 
                 value = {enteredValue}
                 onChange= {titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label >Amount</label>
                <input type="number" 
                value={enteredAmount}
                min= "0.01"
                 step = "0.01"
                  onChange = {amountInputHandler} />
            </div>
            <div className="new-expense__control">
                <label >Date</label>
                <input type="date"
                value={enteredDate}
                 min= "2022-01-01"
                  max= "2022-12-31" 
                  onChange = {dateHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button 
            type="button"
            onClick={props.onCancel}
            >
                Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
)

}


export default ExpenseForm;