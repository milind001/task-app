import React, { useState } from 'react';
import CustomButton from '../../components/FormButton/FormButton';
import FormInput from '../../components/FormInput/FormInput';
import * as actions from '../../store/action';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Addtask = () => {

    const [input, setInput] = useState({
        name: "",
        description: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        const { name, description } = input;
        dispatch(actions.addTask(name, description));
        //clear input fields 
        setInput({
            name: "",
            description: ""
        });
    };

  return <div>
      <form onSubmit={handleSubmit} autoComplete="off"> 
          <FormInput 
            type='text'
            name='name'
            value={input.name}
            handleChange={handleChange}
            label='Task Name'
            required
          />
          <FormInput 
            type='text'
            name='description'
            value={input.description}
            handleChange={handleChange}
            label='Task Description'
            required
          />
          <CustomButton>Save</CustomButton>
          <ToastContainer autoClose={2000} />
      </form>
  </div>;
};

export default Addtask;
