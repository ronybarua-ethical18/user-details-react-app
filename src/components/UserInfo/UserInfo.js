import React, { useEffect, useState } from 'react';
import userData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './UserInfo.css'
const UserInfo = () => {
    const [users, setUser] = useState([]);
    useEffect(() =>{
        setUser(userData);
        console.log(userData);
    },[])
    const [cart, setCart] = useState([]);
    const handleUserAdd =(users) =>{
        const newCart = [...cart, users];
        setCart(newCart);
    }
    return (
        <div className="user-info">
             <div className="user-cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className="user-list-container">
                {
                    users.map(usr => <User handleUserAdd = {handleUserAdd} users={usr} key={usr.id}></User>)
                }
            </div>
        </div>
    );
};

export default UserInfo;