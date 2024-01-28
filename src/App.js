import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0);
  
  function handleCount(operation){
    if(operation ==="inc"){
      setCount((prev)=>prev+1);
    }else{
      setCount((prev)=>prev-1);
    }
  }

  return (
    <div>
      <h1>
        Counter App
      </h1>
      <p>Count: {count}</p>
      <button onClick={()=>handleCount('inc')}>Increment</button>
      <button onClick={()=>handleCount('dec')}>Decrement</button>
      
    </div>
  );
}

export default App;
