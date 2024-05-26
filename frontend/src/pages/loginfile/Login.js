// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle , ImAppleinc } from "react-icons/fc";
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', formData);
            console.log('Login successful:', response.data);
        } catch (error) {
            setError('Invalid email or password');
            console.error('Error logging in:', error);
        }
    };
    return (
        <div className="login-container">
            <h1>Get Started</h1>
            <div className ='have-account'>
            <p>You dont have an account ? <a href ='/signup'>Sign Up</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-input">
                    <input 
                        type="email" name="email" placeholder="Email" value={formData.email}  onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="login-input">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} 
                        required/>
                </div>
                {/* <div className='input-box'>
                    <input type='text' id='dob' pattern='(0?[1-9]|[1-2][0-9]|3[01])/(0?[1-9]|1[0-2])/(19|20)\d{2}' placeholder='Date of Birth' required />
                </div> */}
                
                <h6 >or sign up with</h6>
                <button type="submit" className="login-button">Log In</button>
                <div className='icon1'>
                    <div className='google-icon'>
                        <a href = '#'><FcGoogle /></a>
                    </div>
                    <div className='icon-wrapper'>
                        <a href =''><i className="fa fa-apple" aria-hidden="true"></i></a>
                    </div>
                </div>
                {error && <p className="login-error">{error}</p>}
                
            </form>
        </div>
    );
};

export default Login;
