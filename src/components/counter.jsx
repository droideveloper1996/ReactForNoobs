import { useEffect, useState } from "react";


const CounterComponent = () => {

    const [counterValue,setCounterVariable]=useState(0)

    
    const handleIncrement = () => {
        setCounterVariable(counterValue + 1)
        console.log('Increment Function Called',counterValue)
    }

    const handleDecrement = () => {
        setCounterVariable(counterValue - 1);
        console.log("Decrement Function Called",counterValue);
    }

    return (
      <div className="flex flex-col">
        <p> Counter Component</p>
        <div className="flex">
          <CounterButton
            label="-"
            color="bg-red-500"
            onCounterClick={handleDecrement}
          />
          {/* <button  onClick={handleDecrement} className="bg-red-500 w-[50px] h-[50px] rounded-lg">-</button> */}
          <p className="px-4 text-center self-center">{counterValue} </p>

          <CounterButton
            label="+"
            color="bg-green-500"
            onCounterClick={handleIncrement}
          />
          {/* <button onClick={handleIncrement }  className="bg-green-500 w-[50px] h-[50px] rounded-lg">+</button> */}
        </div>
      </div>
    ); 
}


const CounterButton = ({ label, color, onCounterClick }) => {
  return (
    <button
      onClick={onCounterClick}
      className={`w-[50px] h-[50px] rounded-lg ${color}`}
    >
      {label}
    </button>
  );
};


export const FlowCheck = ({ handleClick }) => {
    
    const ParentCalledMe = () => {
        console.log('Parent Called Me')
    }

    useEffect(() => {
        ParentCalledMe()
    },[])

    return <div>

       Flow Check Component
    </div>
}

export default CounterComponent;