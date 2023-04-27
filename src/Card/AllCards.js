import React from "react";
import { RxStarFilled } from "react-icons/rx";

const AllCards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
  } = resData.data;
  return (
    <div className="card-conatiner">
      <div className="box">
        <img
          className="card-img"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="card-img"
        />
        <h3>{name}</h3>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="rating-time">
          <RxStarFilled />
          {avgRating} . {deliveryTime}MINS . {costForTwoString}
        </p>
        <div className="quick-view">
          <hr />
          <p className="view">Quick View</p>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
