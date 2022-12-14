import React from 'react'

import Chart from '../../src/chart/chart'
const ExpenseChart =(props)=>{

   
    const chartDataPoints = [
        {label: 'jan', value: 0 },
        {label: 'feb', value: 0 },
        {label: 'mar', value: 0 },
        {label: 'Apr', value: 0 },
        {label: 'May', value: 0 },
        {label: 'jun', value: 0 },
        {label: 'jul', value: 0 },
        {label: 'Aug', value: 0 },
        {label: 'Sep', value: 0 },
        {label: 'Oct', value: 0 },
        {label: 'Nov', value: 0 },
        {label: 'Dec', value: 0 },
    ];

    for(const expense in  props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        
        <>
        <Chart dataPoints = {chartDataPoints} />
        </>
    )
}

export default ExpenseChart;