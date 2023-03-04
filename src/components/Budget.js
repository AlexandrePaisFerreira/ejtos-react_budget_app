import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const changeBudget = (event) => {
        let newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if (newBudget < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending')
            newBudget = totalExpenses;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input 
                    type='number' 
                    id='budget'
                    name='budget'
                    step='10'
                    value={budget}
                    onChange={changeBudget}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
