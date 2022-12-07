import React, { useState} from 'react'

import ListItem from "./ListItems";
import './index.css'
import Card from './Card';


function ExpenseItem(props) {
  const [title, setTitle]= useState(props.title);



    
    return (
       <li>
        <Card className='expense-item'>
          
          <ListItem date= {props.date} />
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
     </div>
      
        </Card>
        </li>
     
    )
}
export default ExpenseItem;
