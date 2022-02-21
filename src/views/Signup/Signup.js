import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CustomButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import axios from '../../resources/axios';
import '../Signin/signin.scss';

const Signup = () => {

    const [input, setInput] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { username, email, phone, password } = input;
        // console.log(`username : ${username}, password : ${password}`);
        axios.post('/register', {username, email, phone, password})
            .then(res => {
                // console.log(res)
                toast.success("Success: User Registered")
            })
            .catch(err => {
                // console.log(err)
                toast.error(`Error: ${err.message}`)
            })
            setInput({
                username: "",
                email: "",
                phone: "",
                password: ""
            });
    }

  return (
    <div className='container'>
        <div className='sign-in'>
            <div className='lay-left'></div>
            <div className='lay-right'>
                <div className='layout'>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <FormInput 
                            type='text'
                            name='username'
                            value={input.username}
                            handleChange={handleChange}
                            label='Username'
                            required
                        />
                        <FormInput 
                            type='text'
                            name='email'
                            value={input.email}
                            handleChange={handleChange}
                            label='Email'
                            required
                        />
                        <FormInput 
                            type='number'
                            name='phone'
                            value={input.phone}
                            handleChange={handleChange}
                            label='Mobile'
                            required
                        />
                        <FormInput 
                            type='password'
                            name='password'
                            value={input.password}
                            handleChange={handleChange}
                            label='Password'
                            required
                        />
                        <CustomButton>Register</CustomButton>
                        <ToastContainer autoClose={2000} />
                        <br/>
                        <Link to="/">Already have an account? </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup;
