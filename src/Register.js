import axios from 'axios';
import React, { useState } from 'react'
import Nav from './Nav';
import './Register.css'

function Register() {

  const [password, setPass] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [phone, setPhone] = useState(" ")
  const [name, setName] = useState(" ")
  const [message, setMessage] = useState("")

  function getData(event) {
    event.preventDefault()
    const obj = JSON.stringify({
      "Name": name,
      "password": password,
      "Phone": phone,
      "email": email
    })



    axios({
      method: "post",
      url: "https://login-backend-qvmr.onrender.com/reg",
      data: obj,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setMessage(response.data.msg)
        console.log(message);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  return (
    <div>
      <Nav/>
      <h1>Register Form </h1>
      <form>
        <input type="text" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} className="reg-input"/>
        <input type="password" onChange={(e) => { setPass(e.target.value) }} placeholder="Enter Password" className="reg-input"/>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email" className="reg-input"/>
        <input type="text" onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter Phone" className="reg-input"/>
        <p className='reg-p1'>{message}</p>
        <button onClick={getData} className="reg-submit">Submit</button>
      </form>
    </div>
  )
}

export default Register