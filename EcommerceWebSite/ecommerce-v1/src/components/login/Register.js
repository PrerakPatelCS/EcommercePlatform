import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';



const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userExists = await getUser(username);
        if (userExists) {
            alert('Username already exists');
        }
        else {
            await postUser(username, password);
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            alert('User Created');
        }
        // Submit the form here
    }


    useEffect(() =>{
        setPasswordsMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    const isValidUsername = (username) => {
        let valid = false;
        const pattern = /^[a-zA-Z]+$/;
        if(username.length > 3 && pattern.test(username)){
            valid = true;
        }
        return valid;
    }

  const getUser = async (username) =>{
    try{
        const apiCall = "api/user/" + username;
        const response = await api.get(apiCall);
        return response.data !== null;
    }
    catch(err){
        return false;
        console.log(err);
    }
  }

    const postUser = async (username, password) =>{
        try{
            const parameters = {username: username, password: password, role: "user"};
            const jsonString = JSON.stringify(parameters);
            const response = await api.post("api/user", jsonString, {
                headers: {
                  "Content-Type": "application/json"
                }
            });
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className='auth-form-container'>
            <div className='container'>
                <h2>Register</h2>
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
                        placeholder="Password"
                        id='password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label form="confirmPassword">Confirm Password</label>
                    <input 
                        value={confirmPassword}
                        type='password'
                        placeholder="Confirm Password"
                        id='confirmPassword'
                        name='confirmPassword'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type='submit' disabled={!passwordsMatch || !isValidUsername(username)}>Register</button>
                </form>
                <button className='link-btn' onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}

export default Register