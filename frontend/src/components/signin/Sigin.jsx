import React from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
const Sigin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({email:"",password:""});
    const change = (e) => {
        const {name,value} = e.target;
        setInputs({...Inputs, [name]: value});
    };
    const submit = async (e) => {
        e.preventDefault();
            const response = await axios.post(`${window.location.origin}/api/v1/login`, Inputs, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            sessionStorage.setItem("id", response.data.others._id);
            dispatch(authActions.login());
            history("/todo");
    };
  return (
    <div className='signin'>
        <div className='colly d-flex flex-column justify-content-center align-items-center p-5'>
        <h1>Welcome Back!</h1>
        <p>Sign in to you account.</p>
        <div className='d-flex flex-column w-50 '> 
                        <label htmlFor="email" className='label-signin'>Email</label>
                        <input className="p-2 my-1 input-signin" type='email' placeholder='Enter your Email' name='email' onChange={change} value={Inputs.email}>
                        </input>

                        <label htmlFor="password" className='label-signin'>Password</label>
                        <input className="p-2 my-3 input-signin" type='password' placeholder='Enter your Password' name='password' onChange={change} value={Inputs.password}>
                        </input>
                        <div className='d-flex buccon justify-content-center align-items-center'><Link to="/todo">
              <button className='btn-signin input-signin' onClick={submit}>Sign in</button>
            </Link></div>
                    </div>
        </div>
    </div>
  )
}

export default Sigin