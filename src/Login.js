import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import './Register.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [message, setMessage] = useState("")
    const [token,setToken] = useState("")
    const [clicked,setClick] = useState(true)
    function checkData(event) {
        event.preventDefault()
        const obj = JSON.stringify({
            "email": email,
            "password": password
        })
        axios({
            method: "post",
            url: "https://login-backend-qvmr.onrender.com/login",
            data: obj,
            headers: { "Content-Type": "application/json" },
        })
            .then(function (response) {
                setMessage(response.data.msg)
                if(response.data.msg==="User Has Logged In Successfully"){
                    // sessionStorage.setItem("token",(response.data.Token))
                    setToken(response.data.Token)
                    console.log(response.data.Token)
                    setClick(!clicked)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    function verifyData(){
        const obj1 =JSON.stringify({
            sendToken:token
        })
        
        axios({
            method: "get",
            url: "https://login-backend-qvmr.onrender.com/verify",
            headers:{Authorization:token}
        })
            .then(function (response) {
                console.log("done")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Nav/>
            {clicked ?
            <div>
            <h1>Login Page</h1>
            <form>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" className="reg-input"/>
                <input type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="Enter Password" className="reg-input"/>
                <p>{message}</p>
                <button onClick={checkData} className="reg-submit">Log In </button>
            </form> </div>:<div>
            <Link to="/blog"><button onClick={verifyData} className="reg-submit1">Go to Blog Page  </button></Link> <br></br>
            <Link to="/" className="reg-submit1">  Go To Home </Link>
</div>}
        </div>
    )
}

export default Login