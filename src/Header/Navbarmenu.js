import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiPercent } from "react-icons/ci";
import { TbHelp } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Navbarmenu = () => {
  const onlineStatus = useOnlineStatus()
  

// subscribing to the stire using our selector 
const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className="w-100 bg-white z-4">
      <div className="container ">
        <div className=" ">
          <div>
            <Navbar>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68dltMQkszf1NGxJbY7x5-_9PSmkGYa_14SbGMvld30A5NTqbB7Yf2-trwCahxkv-47c&usqp=CAU "
                className="logo"
                alt="logo"
                width="70"
              />
              <Nav.Link className="menu-right">
                <span className="location">
                  Current Location
                  <span className="text-color">City, State, Country </span>
                  <RiArrowDownSLine className="arrow" />
                </span>
              </Nav.Link>
            </Navbar>
          </div>
        </div>
        <div className=" d-flex pt-2">
          <Link to={'/search'} className="menubar bg-white">
          <button
            className="search-btn border-0 "
          >
            <FiSearch className="icon mx-3" />
            Search
          </button>
          </Link>

          <Nav.Link className="menubar">
            <button className="offer-button d-flex gap-1 justify-content-around">
              <CiPercent className="icon mt-1" />
              Offers
            </button>{" "}
            <span className="power">New</span>
          </Nav.Link>
          <Nav.Link className="menubar">
            <button className="help-button d-flex">
              <TbHelp className="icon mt-1" />
              Help
            </button>
          </Nav.Link>
          <Link className="menubar text-decoration-none" to='/user'>
            <button className="user-button d-flex text-decoration-none">
              <BiUser className="icon mt-1" />
              User
              <p>{onlineStatus ? <span className="green-dot">●</span> : '🔴'}</p>
            </button>
          </Link>

          <Link to='/cart' className="menubar">
            <button className="cart-button" >
              <span className="cart-circle">{cartItems.length}</span>Cart
            </button>
          </Link>
          <Nav.Link className="menubar">
            <button className="help-button">
             <p>Login </p>
            
            </button>
          </Nav.Link>
        </div>
      </div>
    </div>

  );
};

export default Navbarmenu;
