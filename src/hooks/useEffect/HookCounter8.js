import React,{useState,useEffect} from 'react'
import HookCounter7 from './HookCounter7';

function HookCounter8() {

    const [display,setDisplay] = useState(true);
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookCounter7/>}
        </div>
    )
}

export default HookCounter8
