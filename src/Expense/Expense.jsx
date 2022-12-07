import { useState } from "react";
import ExpenseItem from "../ExpenseItem"
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseList/ExpensesList";

import Card from '../Card';
import './index.css'




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
        <ExpensesList items = {filteredExpenses} />
        
        </Card>
        </div>
    )
}

export default Expense;