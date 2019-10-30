import React,{useState} from 'react'


function HookCounter2() {
    const initCount = 0;
    const [count,setCount] = useState(initCount);

    const incrementFive = ()=>{
        setCount(prev=>prev+5);
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            <button onClick={()=>setCount(initCount)}>Reset</button>
            <button onClick={incrementFive}>IncrementBy5</button>
        </div>
    )
}

export default HookCounter2
