import React, { useState } from 'react'
import ItemList from './ItemList';

function ResturantCaterory({data,showItems,setShowIndex,showIndex}) {
 
    // console.log(data);

    const handleClick =()=>{
        setShowIndex(showIndex)
    }
  return (
    <div >
      <div className='w-75 my-4 shadow-sm m-auto  p-2'>
      <div className='d-flex justify-content-between ' onClick={handleClick}>
        <span className='border-0'>{data.title}({data.title.length})</span>
        <button className='p-1 border-0'>⬇️</button>
       </div>
       <div>
       {showItems && <ItemList items={data.itemCards}/>}
       </div>
      </div>
    </div>
  )
}

export default ResturantCaterory