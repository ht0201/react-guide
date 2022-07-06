import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((expense, key) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
