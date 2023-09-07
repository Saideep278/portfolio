import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import React, { useState } from 'react';
import {  Typography } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './styles'




function Navbar() {
  const classes = useStyles()
  const navRef = useRef();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useNavigate()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };


  return (
    <header>
      <h2>Portfolio</h2>
      <nav ref={navRef}>
          <Link to='/'  >
            <Typography variant="h4" align="center">Home</Typography>
          </Link> 
          <Link to='/projects'  >
            <Typography variant="h4" align="center">Projects</Typography>
          </Link> 
          <Link to='/about'  >
            <Typography variant="h4" align="center">About</Typography>
          </Link> 


        

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
