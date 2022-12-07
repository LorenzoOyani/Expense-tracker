import React, {useState} from 'react';

import ExpenseForm from "./ExpenseForm/ExpenseForm"

import "./NewExpense.css"

const NewExpense = (props)=>{
    const [isEditing, setIsEditing ]  = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
            
        }
       props.onAddExpense(expenseData)
       setIsEditing(false)
    }

    const setEditingHandler = ()=>{
        setIsEditing(true);
    }

    const onCancelHandler = ()=>{
        setIsEditing(false)
    }
        return (
            
            <div className="new-expense">
                {!isEditing && <button onClick={setEditingHandler} >
                    Add new expenses
                    </button>}
                {isEditing  && <ExpenseForm 
                 onSaveExpenseData = {saveExpenseDataHandler}
                  onCancel = {onCancelHandler} />}
            </div>
        )
}

export default NewExpense