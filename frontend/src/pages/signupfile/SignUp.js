
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import './Signup.css';

const SignUpFunc = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data) => {
        console.log("data",data)
        try {
            const response = await axios.post('http://localhost:5000/api/user/signup', data);
            setSubmitted(true);
            console.log("resopone",response)
        } catch (error) {
            console.error("Error in adding user", error);
        }
    };

    return (
        <div className='container2'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Get Started</h1>
                <div className='have-accountt'>
                    <p>Already have an account? <a href='/login'>Log In</a></p>
                </div>
                <div className='input-box2'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='userName'
                        {...register('userName', { required: true })}
                    />
                </div>
                <div className='input-box2'>
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        {...register('email', { required: true })}
                    />
                </div>
                <div className='input-box2'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        {...register('password', { required: true })}
                    />
                
                </div>
                <div className='input-box2'>
                    <input
                        type='date'
                        placeholder='Birthday Date'
                        name='birthdayDate'
                        {...register('birthdayDate', { required: true })}
                    />
                </div>
                <button type='submit'>Sign Up</button>
                <h6>or sign up with</h6>
                <div className='icon2'>
                    <div className='google-icon2'>
                        <a href='#'><FcGoogle /></a>
                    </div>
                    <div className='icon-wrapper2'>
                        <a href=''><i className="fa fa-apple" aria-hidden="true"></i></a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpFunc;
