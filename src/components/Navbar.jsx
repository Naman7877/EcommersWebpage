import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './nav.css';

import {
    Link
  } from "react-router-dom";
  
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
const logo = require('./fl.png');





function Navbar() {
    const[color,setcolor]=useState('');
    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        setcolor(location.pathname);
      },[]);
    
    return (
        <>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="55" height="55" className="icon" />
                </Link> 
                <div className="container-fluid" >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <form className="d-flex" role="search">
                                    <div className="searchbox">
                                        <input className="form-control me-2 input1" type="search" placeholder="Serch here your item" aria-label="Search" />
                                        <button className="btn searchicon" type="submit"><FaSearch /></button>
                                    </div>
                                </form>
                            </li>

                            <li className="nav-item list">
                                <Link className={`nav-link color ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link> 
                            </li>

                            <li className="nav-item list">
                                <Link className={`nav-link color ${location.pathname==="/Seller"? "active": ""}`} to="/Seller">Become a Seller</Link> 
                            </li>
                            <li className="nav-item dropdown list">
                                <Link className={`nav-link dropdown-toggle color ${location.pathname==="/More"? "active": ""}`} to="/More" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </Link> 
                                <ul className="dropdown-menu color ">
                                    <li><div><Link className="dropdown-item" to="/"><IoIosNotifications/>  Notification preferabce</Link> </div></li>
                                    <li><div><Link className="dropdown-item" to="/"><FaRegQuestionCircle/>  24*7 coustomer service</Link> </div></li>
                                    <li><Link className="dropdown-item" to="/"><HiDownload/>  Downlord Application</Link> </li>
                                </ul>
                            </li>
                            <li className="nav-item color list">
                                <Link className={`nav-link color ${location.pathname==="/Cart"? "active": ""}`} to="/Cart">
                                    <MdOutlineShoppingCart size={'1.7em'}/>
                                    Cart</Link> 
                            </li>
                            <li className="nav-item color list">
                                <Link className={`nav-link color ${location.pathname==="/Login"? "active": ""}`} to="/Login">
                                    <BiLogInCircle size={'1.3em'}/> Login</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;