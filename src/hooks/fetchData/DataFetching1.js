import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching1() {

    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res)=>{
            setPost(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.error(err);
        })
    },[idFromButtonClick])

    const handleClick=()=>{
        setIdFromButtonClick(id);
    }
    return (
        <div>
            <input type="text"
            value={id}
            onChange={e=>setId(e.target.value)} />

            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>            
        </div>
    )
}

export default DataFetching1
