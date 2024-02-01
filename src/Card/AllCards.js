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
  } = resData?.info;
  return (

    <div className="box rounded p-1 m-2">
      <img
        className="card-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="card-img"
      />
      <h5 className="mt-2 text-black">{name}</h5>
      <p className="fs-6 text-black">
        <RxStarFilled className="star text-white mb-1 mr-2 bg-success rounded-circle" />
        {avgRating} . {deliveryTime}MINS . {costForTwoString}
      </p>
      <p className="w-100 text-secondary fs-6 ">{cuisines.join(", ")}</p>
    </div>

  );
};

export default AllCards;
