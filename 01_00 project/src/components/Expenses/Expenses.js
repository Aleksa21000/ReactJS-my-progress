import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [chosedValue, setChosedValue] = useState('2020');

    const saveChosedValue= (chosedValue) => {
        setChosedValue(chosedValue);
    }

    const chosedExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === chosedValue;
    });
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selectedValue={chosedValue}
                    onOptionChange={saveChosedValue}
                />
                <ExpensesChart expenses={chosedExpenses} />
                <ExpensesList items={chosedExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;