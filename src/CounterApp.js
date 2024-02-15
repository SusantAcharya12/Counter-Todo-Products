import { useState } from "react";

const CounterApp = () => {
const [counter,setCounter] = useState(0);

function counterIncrement(){
    setCounter(counter +1)
}

function counterDecrement(){
  if(counter > 0){

    setCounter(counter - 1)
  }
}
  return (

    <div className="counterMain">  

    <h1 className="counter-heading">Counter Application</h1> 

    <div className="CounterApp" >
        <button className="btn btn-add" onClick={counterIncrement}>Add</button>
        <span>{counter}</span>
        <button className="btn btn-sub" onClick={counterDecrement}>Sub</button>
        
    </div>
    </div>
  )
}

export default CounterApp
