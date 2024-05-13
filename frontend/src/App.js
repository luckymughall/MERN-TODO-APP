import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Signup from './components/signup/Signup'
import Sigin from './components/signin/Sigin'
import Todo from './components/todo/Todo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from './store'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Maybeshownavbar from './components/maybeshownavbar/Maybeshownavbar'
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
    dispatch(authActions.login());
    }
  }, [])
  
  return (
    <div>
      <Router>
        <Maybeshownavbar>
      <Navbar></Navbar>
      </Maybeshownavbar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Sigin />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  )
}

export default App