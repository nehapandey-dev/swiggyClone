import { useState, useEffect } from 'react'
import { API_URL } from './constants'


const useRestaurants = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const data = await fetch(API_URL)
    const json = await data.json();

    //optional chaining 
    setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)

  }
  return listOfRestaurants
}

export default useRestaurants