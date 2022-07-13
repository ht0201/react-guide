import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDataHandler={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
