import Card from '../UI/Card';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  let expensesContent = <p className='expenses-content'>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense, key) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }
  return (
    <>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </>
  );
};

export default Expenses;
