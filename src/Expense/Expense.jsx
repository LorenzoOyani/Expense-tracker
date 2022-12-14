import { useState } from "react";
// import ExpenseItem from "../../ExpenseItem"
import ExpensesList from "../../src/ExpenseList/ExpensesList";
import ExpenseChart from "./ExpenseChart";
import Card from "../../src/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './expense.css'




function Expense(props) {

    const [ filteredYear, selectedFilteredYear] = useState('2020');
  
const selectedYearHandler = selectedYear =>{
    selectedFilteredYear(selectedYear)
}

const filteredExpenses = props.items.filter(expenses =>{
    return expenses.date.getFullYear().toString() === filteredYear;
}) 



    return (
        <div>
           
        <Card className='expenses'>
        <ExpenseFilter
         selected = {filteredYear} 
        onChangeYear = {selectedYearHandler} />

        <ExpenseChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
        
        </Card>
        </div>
    )
}

export default Expense;