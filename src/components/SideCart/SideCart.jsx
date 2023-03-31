import React, { useEffect, useState } from 'react';
import Lecture from '../Lecture/Lecture';
import Tutorial from '../Tutorial/Tutorial';
import './SideCart.css';

const SideCart = ({cart,readTime}) => {
    const[time, setTime]=useState();
    useEffect(()=>{
        const readTimeStorage=localStorage.getItem("readTime");
        setTime(readTimeStorage);
    }, [readTime])
    // console.log(cart);
    // const cart = props.cart;
    // const {cart} = props;
    return (
        <div>
             <div className='cart'>
                <h2>Spent time on: {time}min </h2>
                </div>
                <div className='cart-info'> 
                    <h2>Bookmarked blogs: {cart.length}</h2>         
                   
                    {/* {
                      cart.map((cart)=>{
                        <div key={tutorial.id}>
                            <p>{id + 1}</p>
                            <p>{tutorial.BlogTitle}</p>
                            </div>
                      })
                    } */}
                   
                </div>
                <div>

                </div>
        </div>
    );
};

export default SideCart;