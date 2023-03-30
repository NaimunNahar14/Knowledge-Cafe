import React, { useEffect, useState } from 'react';
import Lecture from '../Lecture/Lecture';
import './Tutorial.css';

const Tutorial = () => {
    const [tutorials, setTutorials] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setTutorials(data))

    },[])
    return (
        <div className='tutorial-container'>
            <div className='lectures-container'>
                {
                    tutorials.map(tutorial => <Lecture 
                        key={tutorial.id}
                        tutorial={tutorial}

                    ></Lecture>)
                    

                }
                
            </div>
            <div className='bookmark-container'>
                <div>
                    <h2>Spent time on read:</h2>
                </div>
                <div>
                    <h2>Bookmarked blogs:</h2>
                </div>
                

            </div>
        </div>

    );
};

export default Tutorial;