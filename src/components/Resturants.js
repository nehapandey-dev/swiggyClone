import React, { useState } from "react";
import { FcClearFilters } from "react-icons/fc";
import ResturantData from "../components/ResturantData";

function Resturants() {
  const [resData, setResData] = useState(ResturantData);
  return (
    <>
      <section className="d-flex justify-content-around pt-5">
        <div className="right">
          <h3>1734 restaurants</h3>
        </div>
        <div className="d-flex justify-content-between">
          <button className="filter">Delivery Time</button>
          <button className="filter">Relevance</button>
          <button
            className="filter"
            onClick={() => {
              const filteredList = resData.filter(
                (resturant) => resturant.data.avgRating > 4
              );
              setResData(filteredList);
            }}
          >
            Rating
          </button>
          <button className="filter">Cost: Low To High</button>
          <button className="filter">Cost: High To Low</button>
          <button className="filter">Filters </button>
          <FcClearFilters className="filter-icon" />
        </div>
      </section>
      <hr className="" />
    </>
  );
}

export default Resturants;
