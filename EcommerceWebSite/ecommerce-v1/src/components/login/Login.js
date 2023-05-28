import './Register'
import React, { useState } from 'react';
import api from '../../api/axiosConfig';
import  secureLocalStorage  from  "react-secure-storage";




const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loading){
          alert("Request in Progress");
        }

        setLoading(true);
        
        const credentials = await login(username, password);
        console.log(credentials);
        if(credentials.data !== ''){
            props.setUser(credentials.data);
            if(isChecked){
              secureLocalStorage.setItem("user", username);
            }
            alert("Logined in");
            setUsername('');
            setPassword('');
        }
        else{
            alert("Wrong Username or Password");
        }
      
        
      setLoading(false);

    }

    const login = async (username, password) => {
        try{
            const apiCall = "api/user/login/" + username + "/" + password;
            const response = await api.get(apiCall);
            return response;
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='auth-form-container'>
      <div className='container'>
        <h2>Login</h2>
          <form className='login-form' onSubmit={(handleSubmit)}>
              <label form="username">User Name</label>
              <input 
                value={username} 
                type='username' 
                placeholder="User Name"
                id='username' 
                name='username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <label form="password">Password</label>
              <input 
                value={password} 
                type='password' 
                placeholder="********" 
                id='password' 
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>
                <input 
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  name ='rememberUser'
                />
                Remember Me
              </label>
            
              <button type='submit'>Log In</button>
          </form>
          <button className='link-btn' disabled={loading} onClick={() => props.onFormSwitch('Register')}>Don't Have an Account? Register Here!</button>
        </div>
    </div>
  )
}

export default Login