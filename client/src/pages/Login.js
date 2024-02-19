import React, { useState } from 'react'
import axios from 'axios';
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = async() => {
    const data = {username: user, password: password};
    await axios.post('http://localhost:3001/auth/login', data).then((response) =>(console.log(response)));
  }


  return (
    <div className='loginContainer'>
      <input type='text' placeholder='Username' onChange={(e)=>setUser(e.target.value)}/>
      <input type='password'  placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
    <button type='submit' onClick={onSubmit}>Login</button>
    </div>
  )
}

export default Login