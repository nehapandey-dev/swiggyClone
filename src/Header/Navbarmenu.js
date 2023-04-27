import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { CiPercent } from "react-icons/ci";
import { TbHelp } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ResturantData from "../components/ResturantData";

function filterData(searchData, resData) {
  const filterData = resData.filter((item) =>
    item.data.name.includes(searchData)
  );
  return filterData;
}

const Navbarmenu = () => {
  const [resData, setResData] = useState(ResturantData);
  const [searchData, setSearchData] = useState("");
  return (
    <div>
      <div className="container d-flex justify-content-between">
        <div className="left-nav d-flex justify-content-around">
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
        <div className="right-nav d-flex justify-content-around">
          <button
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
            className="search-button"
            onClick={() => {
              const data = filterData(searchData, resData);
              setResData(data);
            }}
          >
            <FiSearch className="icon" />
            Search
          </button>

          <Nav.Link className="menubar">
            <button className="offer-button">
              <CiPercent className="icon" />
              Offers
            </button>{" "}
            <span className="power">New</span>
          </Nav.Link>
          <Nav.Link className="menubar">
            <button className="help-button">
              <TbHelp className="icon" />
              Help
            </button>
          </Nav.Link>
          <Nav.Link className="menubar">
            <button className="user-button">
              <BiUser className="icon" />
              User
            </button>
          </Nav.Link>
          <Nav.Link className="menubar">
            <button className="cart-button">
              <span className="cart-circle">0</span>Cart
            </button>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Navbarmenu;
