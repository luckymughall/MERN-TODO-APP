import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
const Home = () => {
    const history = useNavigate();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      history('/todo');
    } else {
      history('/signin');
    }
  };
  return (
    <><div className="Home d-flex justify-content-center align-items-center">
          <div className='container d-flex justify-content-center align-items-center flex-column'>
              <h1 className='text-center'>Organize your work <br />and life, finally</h1>
              <p>
                  Become focused, organized, and calm with Todo app. The world’s #1 <br /> task manager and to-do list app.
              </p>
              <button className='home-btn' onClick={handleButtonClick}>Make Todo List</button>

          </div>

      </div>
      <div className="container d-flex align-items-center flex-column">
              <div className="row">
                  <div className="col">
                      <img src='https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fforeground.en.png' alt="user" className="new-img"></img>
                  </div>
                  <div className="col rounded p-3">
                      <h4 className='head'>Clear your mind</h4>
                      <h3>The fastest way to get <br /> tasks out of your head.</h3>
                      <h3>Type just about anything into the task field and <br /> Todo is one-of-its-kind natural language <br /> recognition will instantly fill your to-do list.</h3>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home




