import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import CustomButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import axios from '../../resources/axios';
import './signin.scss';

const Signin = () => {

    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { username, password } = input;
        axios.post("/login", {username, password})
            .then(res => {
                // console.log(res)
                localStorage.setItem("username", res.data.data.user.username);
                localStorage.setItem("token", res.data.data.token);
                history.push("/dashboard");
            })
            .catch(err => {
                toast.error(`Error: ${err.message}`)
            })
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
                                type='password'
                                name='password'
                                value={input.password}
                                handleChange={handleChange}
                                label='Password'
                                required
                            />
                            <CustomButton>Login</CustomButton>
                            <ToastContainer autoClose={2000} />
                            <br/>
                            <Link to="/register" >Don't have an account?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Signin;
