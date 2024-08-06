
import React from 'react';
import './adminLogin.scss';


const Admin=()=>{
    
    return(
       <div className="wrapper">
        <div className="login_box">
            <div className="login-header">
                <span>Login</span>
            </div>
            <div className="input_box">
                <input type="text" id="user" class="input-field" required/>
                <label for="user" class="label">Username</label>
            </div>
            <div className="input_box">
                <input type="password" id="pass" class="input-field"  required/>
                <label for="pass" class="label">password</label>
            </div>
            <div className="remember-forgot">
                <div className="remember-me">
                    <input type="checkbox"  id="remember" />
                    <label for="remember"> Remember Me </label>
                </div>
                <div className="forgot">
                    <a href="#">Forgot Password?</a>
                </div>
            </div>
            <div className="input_box">
                <button class="input-submit">Login</button>
            </div>
            
        </div>
       </div>
    )
}
export default Admin