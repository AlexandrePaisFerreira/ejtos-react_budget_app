import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currencies = [
    { id:'$ Dollar', symbol:'$' },
    { id:'£ Pound', symbol:'£' },
    { id:'€ Euro', symbol:'€' },
    { id:'₹ Ruppee', symbol:'₹' }
];

const Currency = () => {
    let { currency, dispatch } = useContext(AppContext)   ;  
    
    const changeCurrency = (event) => {
        currency = event.target.value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        })
    }

    return (
        <div className='dropdown'>
            <label for="currency"></label>
            <select id="currency" name="currency" style={{
                    backgroundColor: "lightgreen", 
                    padding: '10px',
                    borderRadius: '5px'
                }} onChange={changeCurrency}>
                <option value="" selected disabled hidden>Currency ({currencies[1].id})</option>
                <option value={currencies[0].symbol}>{currencies[0].id}</option>
                <option value={currencies[1].symbol}>{currencies[1].id}</option>
                <option value={currencies[2].symbol}>{currencies[2].id}</option>
                <option value={currencies[3].symbol}>{currencies[3].id}</option>
            </select>
        </div>
    );
};

export default Currency;