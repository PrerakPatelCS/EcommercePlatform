import React, { useState } from 'react';


const Register = (props) => {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

    }

    return (
        <div className='auth-form-container'>
            <div className='container'>
                <h2>Register</h2>
                <form className='login-form' onSubmit={(handleSubmit)}>
                    <label form="username">User Name</label>
                    <input value={username} type='username' placeholder="User Name" id='username' name='username' />
                    <label form="password">Password</label>
                    <input value={password} type='password' placeholder="Password" id='password' name='password' />
                    <button type='submit'>Register</button>
                </form>
                <button className='link-btn' onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}

export default Register