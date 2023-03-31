import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Tutorial from './components/Tutorial/Tutorial'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [readTime, setReadTime] = useState("");
  const [count, setCount] = useState(0)
  const handleReadTime = (time) =>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime")); 
    if(previousReadTime){
     const sum = previousReadTime + time;
     localStorage.setItem("readTime",sum);
     setReadTime(time);
    }
    else{
      localStorage.setItem("readTime",time);
      setReadTime(time);
    }
  }
  return (
    <div className="App">
      <Header></Header>
      <Tutorial handleReadTime={handleReadTime}
      readTime={readTime}
      ></Tutorial>   
     
    </div>
  );
};

export default App;