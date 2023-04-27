import React from 'react'
import AllCards from "./AllCards"
import ResturantData from "../components/ResturantData";
import "./Card.css"

const Card = () => {
 
  return (
    <div>
        <div className="App">
          <div className="conatiner">
            {ResturantData.map((item) => (
              <AllCards key={item.data.id} resData={item} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Card