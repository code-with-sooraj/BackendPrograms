import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

export function Assignment1(){
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(()=>{
        setCount((currentVal)=>currentVal+1);
    },[]);

    const handleDecrement = useCallback(()=>{
        setCount((currentVal)=>currentVal-1);
    },[]);

    return (
        <div>
            <p1>Count: {count}</p1>
            <CounterButtons 
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}/>
        </div>
    );
}

const CounterButtons = memo(({onIncrement, onDecrement})=>(
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));