import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }
  return (
    <div><nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/"></Link>
      <Link to="/"><img src="/Navto.png" alt="Logo" className="navbar-logo-img" /> </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active mx-1" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link className="nav-link active mx-1" aria-current="page" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
          </li>
          {!isLoggedIn && <><li className="nav-item">
            <Link className="nav-link active mx-1 btn-nav" aria-current="page" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <Link className="nav-link active mx-1 btn-nav" aria-current="page" to="/signin">Sign In</Link>
          </li><li className="nav-item">
          </li></>}
          {isLoggedIn && <><li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle"
    to="/"
    id="navbarDropdownMenuLink"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src="/user.png"
      alt="user"
      className="navbar-user-img"
    />
  </Link>
  <ul
    className="dropdown-menu"
    aria-labelledby="navbarDropdownMenuLink"
  >
    <li>
      <Link className="dropdown-item styliii" to="/todo">
        Todo
      </Link>
    </li>
    <li>
      <Link className="dropdown-item styliii" to="/" onClick={logout} >
        Logout
      </Link>
      
    </li>
  </ul>
</li></>}
          
          
          <li className="nav-item">
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar