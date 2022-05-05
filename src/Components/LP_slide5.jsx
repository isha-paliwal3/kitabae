import React from 'react'
import './LP_slide5.css';
import { useNavigate } from "react-router-dom";
// import upload_page from './Upload_page'
 
const LP_slide5 = () => {
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = {upload_page}; 
  //   navigate(path);
  // }
  return (
    <div className="slide5" id='slide5'>
      <div className="box">
        <input type="checkbox" className='toggle-btn' name="" />
          <div className='signup'>
            <form action="">
              <div className="input-group">
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username" name="" className='inp' id='username-input' />
              </div>
              <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input type="Email" placeholder="Ex: abc123@gmail.com" name="" className="inp" id="email-input" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="**********" className='inp' id='password-input' />
              </div>
              <div className='input-group'>
                <label htmlFor="number">Number</label>
                <input type="text" name="Number" placeholder="7894561238" className='inp' id='number-input' />
              </div>
              <div className="input-group" >
                <input type="submit" value="Sign Up" placeholder="Ex: abc123" name="" className="inp submit-inp" id="" />
              </div>

            </form>
          </div>
          <div className='login'>
            <form action="">
              <div className='input-group space'>
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username" name="" className='inp' id='username-input' />
              </div>
              <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="**********" className='inp' id='password-input' />
              </div>
              <div className='input-group'>
                <input type="submit" value="Log In" placeholder="Ex: abc123" name="" class="inp submit-inp" id=""  />
              </div>
            </form>
          </div>
      </div>
    </div>

  )
}

export default LP_slide5
