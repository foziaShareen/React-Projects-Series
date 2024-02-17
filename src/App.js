import React from 'react';
import './App.css';
import {useState} from 'react';

function App()
{
   const [counter,setCount] = useState(0);
    
    function handler(){

      setCount(counter+1);
    
     
    }
    function handlersub(){

      setCount(counter-1);
    
     
    }

  

  

  return (
    <div className="App">
     <div className="box" >
    <p> {counter}</p>
    <button onClick={handler} className="add">Add</button>
    <button onClick={handlersub} className="sub">Sub</button>
    </div> 
    </div>
  );
}

export default App;