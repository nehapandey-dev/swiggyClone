import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { API_URL, Image_API } from '../utils/constants';
import { Link } from 'react-router-dom';


function Search() {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])
    const [searchText, setSearchText] = useState("");


    const handleChange = (e) => {
        setSearchText(e.target.value)
    }
    useEffect(() => {
        fetchData()
    }, [])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        const data = await fetch(API_URL)
        const json = await data.json();

        //optional chaining 
        setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredSearch(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //whenever state valiables change/update react trigger a reconcialation

    return (
        <>
            <div className='d-flex m-auto w-75 '>
                <input
                    type='text'
                    placeholder='Search for restaurants and food'
                    value={searchText}
                    onChange={handleChange}
                    className='w-75 p-2'

                />
                <FiSearch className="search-icon" onClick={() => {
                    const filteredSearch = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredSearch(filteredSearch)
                }}
                />

            </div>
            <div className=" mt-5">
                {
                    filteredSearch.map((res) => (
                    
                            <div className='d-flex m-2 mx-5 align-items-center ' key={res.info.id}>
                                <div className=''>
                                <img
                                    className="search-restro-img"
                                    src={
                                        Image_API +
                                        res.info.cloudinaryImageId
                                    }
                                    alt="card-img"

                                />
                                </div>
                                <div className=''>
                                <h5>{res.info.name}</h5>
                                <p>{res.info.cuisines}</p>
                                </div>
                            </div>
                  
                    ))
                }

            </div>
        </>
    )
}

export default Search