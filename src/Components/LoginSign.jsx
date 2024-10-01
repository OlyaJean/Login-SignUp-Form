import React, { useState } from 'react'
import './../Components/LoginSign.css'
import nameIcon from './../assets/name-icon.png'
import emailIcon from './../assets/email-icon.png'
import passwordIcon from './../assets/password-icon.png'

const LoginSign = () => {

  const [form,setForm] = useState('Sign Up')

  return (
    <>
      <div className="container">
        <div className="header">{form}</div>
        <div className="underline"></div>
        <div className="inputs">
          {form === 'Sign Up'?  <div className="input">
            <img src={nameIcon} alt="" />
            <input type="text" placeholder='Name'/>
          </div> : <div></div>}
         
          <div className="input">
            <img src={emailIcon} alt="" />
            <input type="email" placeholder='E-mail'/>
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        {form==="Sign Up"? <div></div>: <div className="forgotPassword">
          Forgot the password? <span>Click here</span>
        </div>}
       
        <div className="buttons">
          <div className={`login ${form==="Sign Up"? "gray":""}`} onClick={()=>{setForm("Log In")}}>Login</div>
          <div className={`signUp ${form==="Log In"? 'gray':""}`} onClick={()=>{setForm("Sign Up")}}>Sign Up</div>
        </div>
      </div>
    </>
  )
}

export default LoginSign
