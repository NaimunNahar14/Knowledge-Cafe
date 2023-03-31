import React, { useEffect, useState } from 'react';
import Lecture from '../Lecture/Lecture';
import SideCart from '../SideCart/SideCart';
import './Tutorial.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tutorial = ({handleReadTime ,readTime}) => {
    const [tutorials, setTutorials] = useState([]);
    const [cart, setCart] = useState([]);
    // const [time , setTime] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setTutorials(data))

    },[]);
    const handleAddToBookMark = (tutorial) =>{
        const newCart = [...cart, tutorial];
         setCart(newCart); 

    }
    // const handleReadTime =(tutorial) =>{
    //     const newTime = [...time, tutorial];
    //     setTime(newTime);
    // }

    return (
        <div className='tutorial-container'>
            <div className='lectures-container'>
                {
                    tutorials.map(tutorial => <Lecture 
                        key={tutorial.id}
                        tutorial={tutorial}
                        handleAddToBookMark={handleAddToBookMark}
                        handleReadTime= {handleReadTime}
                        
                    ></Lecture>)    

                }
                
            </div>
            <div className='bookmark-container'>
                <SideCart cart={cart}
                readTime={readTime}
                ></SideCart>
                

            </div>
        </div>

    );
};

export default Tutorial;