import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <h2>Question and Answer:</h2>
            <div>
                <h3>1.Props vs state?</h3>
                <ul>
                    <li>Props:Props are short for "properties" and are used to pass data from a parent component to a child component. They are immutable, meaning that the child component cannot modify them. They can only be changed by the parent component that passed them down. Props are used to customize a component's behavior or appearance.</li>
                    <li>State: State is used to manage data that can change over time within a component. It is internal to the component and can be modified by the component itself through the use of setState() method. Changes to the state will cause the component to re-render. State is often used to manage user input, control the behavior of a component or respond to events.</li>
                </ul>
                
            </div>
            <div>
                <h3>2.How does useState work?</h3>
                <p className='que-info'> useState is a hook provided by React that allows functional components to manage state. It works by returning an array with two values:</p>
                <ul>
                    <li>The current state value</li>
                    <li>A function that can be used to update the state value.</li>
                </ul>
                
            </div>
            <div>
                <h3>3.Purpose of useEffect other than fetching data?</h3>
                <ul>
                    <li>The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.</li>
                    <li>Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</li>
                </ul>               
                
            </div>
            <div>
                <h3>4.	How Does React work?</h3>
                <p className='que-info'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>


            </div>
        </div>
    );
};

export default Footer;
