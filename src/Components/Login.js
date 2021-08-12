import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <div className="login">
      <form className="login__form">
        <h1>Login here </h1>
        <input type="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name"/>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}placeholder="Password"/>
        <button type="submit" className="submit__btn">Submit</button>
      </form>
    </div>
  )
}

export default Login
