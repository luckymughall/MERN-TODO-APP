import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='About d-flex justify-content-center align-items-center'>
    <div className='container aboutpagee d-flex justify-content-center align-items-center flex-column'>
    <h4 className='text-center'>About Us</h4>
    <p className='para'>
    Welcome to our MERN Todo app! We are a team of passionate developers dedicated to creating simple <br />
    yet powerful tools to help you stay organized and productive.
    </p> 
    <p className='para2'>
    Our mission is to provide you with a seamless experience in managing your daily tasks, allowing you to <br />
    focus on what matters most. With our MERN Todo app, you can create, organize, and prioritize your <br />
    tasks effortlessly.
    </p>
    <p className='para3'>
    Whether you're a student, a professional, or just someone who wants to stay on top of their to-do<br />list 
    our app is designed to meet your needs. We are committed to continuously improving our app and <br />
    adding new features to enhance your productivity.
    </p>
    <p className='para4'>
    Thank you for choosing our MERN Todo app. We hope it helps you achieve your goals and manage your <br />
    tasks more efficiently. <br />
    </p>
    </div>
    </div>
  )
}

export default About