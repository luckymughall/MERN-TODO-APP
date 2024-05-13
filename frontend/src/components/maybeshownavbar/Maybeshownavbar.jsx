import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Maybeshownavbar = ({children}) => {
    const location = useLocation();
    const [noNavbar, setNoNavbar] = useState(false);
    useEffect(() => {
      if (location.pathname === "/signin" || location.pathname === "/signup" || location.pathname === "/about") {
        setNoNavbar(false);
      } else {
        setNoNavbar(true);
      }
    }, [location]);
    
  return (
    <div>{noNavbar && children}</div>
  )
}

export default Maybeshownavbar