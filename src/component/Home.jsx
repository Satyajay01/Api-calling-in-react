import React, { useEffect, useState } from 'react'
import  Blog  from './Blog';


const Home = () => {
    const[blog,setBlog]=useState(null);
    useEffect(()=>{

            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
               
                setBlog(data);
            })
    },[blog])
  return (
    <div>
        {blog && <Blog blog={blog}/>}
    </div>
  )
}

export default Home