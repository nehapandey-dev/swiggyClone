import React, { useState } from 'react'
import { useParams } from 'react-router'
import useRestroMenu from '../utils/useRestroMenu'
import { Image_API } from '../utils/constants'
import ResturantCaterory from './ResturantCaterory'

function RestroMenu() {
  const [showIndex,setShowIndex] = useState(null)
  const { resId } = useParams()
  const resMenu = useRestroMenu(resId)

  if (resMenu === null) return <h1 className='mx-5'>Loading...</h1>

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, feeDetails, aggregatedDiscountInfo, cloudinaryImageId } = resMenu?.cards[2]?.card?.card?.info


  const categories = resMenu.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat => cat.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



  return (
    <div className='w-100 mx-5'>
      <div className='d-flex justify-content-between w-100'>
        <div>
          <h1>{name}</h1>
          <p>{avgRating} ({totalRatingsString}) . {costForTwoMessage}</p>
          <img src={Image_API + cloudinaryImageId} alt='IMG' className='w-25 h-25' />
          <p className='text-danger'>{cuisines.join(',')}</p>
          <p>Outlet   {areaName}▼</p>
          <hr />
          <p>🚴🏿‍♂️ {feeDetails?.message}</p>
        </div>
      </div>
      <div className='d-flex gap-3'>
        <div className=" border w-25 p-1 rounded">
          <p>📢 {aggregatedDiscountInfo?.header}</p>
          <p>{aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
        </div>
        <div className=" border w-25 p-1 rounded">
          <p>📢 {aggregatedDiscountInfo?.header}</p>
          <p>{aggregatedDiscountInfo?.descriptionList[1]?.meta}</p>
        </div>

      </div>

      <div className='my-3'>
        <h1 className='text-center'>Menu</h1>
        {categories.map((catagory,index) => 
        // ResturantCaterory is controlled components for handle all the accordian 
        <ResturantCaterory key={catagory?.card?.card?.title}
        data={catagory?.card?.card} 
        showItems={index === showIndex? true : false}
        setShowIndex={()=>setShowIndex(index)}
        />)}
      </div>
    </div>
  )
}

export default RestroMenu