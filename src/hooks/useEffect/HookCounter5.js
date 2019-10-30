import React,{useState,useEffect} from 'react'

function HookCounter5() {

    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title=`You clicked ${count} times`;
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Click {count} times </button>
        </div>
    )
}

export default HookCounter5
