import React from 'react'
import "./Signup.css"
import { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const history = useNavigate();
    const [Inputs, setInputs] = useState({email:"",username:"",password:""});
    const change = (e) => {
        const {name,value} = e.target;
        setInputs({...Inputs, [name]: value});
    };
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${window.location.origin}/api/v1/register`, Inputs, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            if (response.data.message === "Sign up successful.") {
                toast.success(response.data.message);
                setInputs({ email: "", username: "", password: "" });
                setTimeout(() => {
                    history("/signin"); // Replace "/success" with your desired route
                }, 1000);
            }
            else {
                toast.error(response.data.message);
                setInputs({ email: "", username: "", password: "" });
            }

        } catch (error) {
            alert("Error occurred");
        }
    };
    
  return (
    <div className='signup'>
        <ToastContainer></ToastContainer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 hmm column d-flex justify-content-center align-items-center'>
                    <div className='d-flex flex-column w-100 p-5'>
                        <h1 className='text-center'>Sign Up</h1>
                        <label htmlFor="email" className='label-signin'>Email</label>
                        <input className="p-2 my-3 input-signup" type='email' placeholder='Enter your Email' name='email' onChange={change} value={Inputs.email}>
                        </input>
                        <label htmlFor="username" className='label-signin' >Username</label>
                        <input className="p-2 my-3 input-signup" type='username' placeholder='Enter your Username' name='username' onChange={change} value={Inputs.username}>
                        </input>
                        <label htmlFor="password" className='label-signin'>Password</label>
                        <input className="p-2 my-3 input-signup" type='password' placeholder='Enter your Password' name='password' onChange={change} value={Inputs.password}>
                        </input>
                        <button className='btn-sign input-signup' onClick={submit}>Sign Up</button>
                    </div>
                </div>
                <div className='col-lg-4 column welcome col-left d-flex justify-content-center align-items-center'> 
                <h1 className='text-center sign-up-heading d-flex'>
                Welcome to our MERN Todo App! Sign up now to start organizing your tasks and stay productive. Create your account below and begin managing your todos with ease
                </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup