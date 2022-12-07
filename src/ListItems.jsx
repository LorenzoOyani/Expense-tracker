
import './App.css'
import Card from './Card';

function ListItem(props) {

    const month = props?.date.toLocaleDateString("en-US", {month: 'long'});
    const day = props?.date.toLocaleDateString('en-US', {day: '2-digit'});
    const year = props?.date.getFullYear();

return (
    <Card>
    <div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__day'>{day}</div>
    <div className='expense-date__year'>{year}</div>
    </div>
    </Card>
)
}

export default ListItem;