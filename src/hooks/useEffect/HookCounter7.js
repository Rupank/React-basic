import React,{useState, useEffect} from 'react'

function HookCounter7() {

    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const handleMove = e=>{
        console.log(e);
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(() => {
        console.log("Logged");
        window.addEventListener('mousemove',handleMove)
        return (()=>{
            console.log("Unmounting code");
            window.removeEventListener('mousemove',handleMove)
        }
        )
    },[])
    return (
        <div>
            X - {x}, Y - {y}
        </div>
    )
}

export default HookCounter7
