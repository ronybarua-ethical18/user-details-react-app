import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, totalIncome) => total + totalIncome.income, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const totalIncome = cart[i];
        const incomes = Number(totalIncome.income);
        total = total + incomes;
    }
    return (
        <div className="cart-info">
            <h2>User Details</h2>
            <p>Users Added: {cart.length}</p>
            <p>Users Income:{total} </p>
        </div>
    ); 
};

export default Cart;