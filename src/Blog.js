import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import './Register.css'

function Blog() {
    let [arr,setArr] = useState([]) ;
    axios({
        method: "get",
        url: "https://login-backend-qvmr.onrender.com/boll",
        // headers:{Authorization:token}
    })
        .then(function (response) {
            setArr(response.data)
            console.log(Array.isArray(arr))
        })
        .catch(function (error) {
            console.log(error);
        });
  return (
    <div>
        <h1>Blog About Latest Movies</h1>
        { 
            arr.map((item)=>(
                <div><p><span className='blog-p1'>{item.id}</span>{item.Name}</p></div>
            ))
        }
    </div>
  )
}

export default Blog