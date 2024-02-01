import React from 'react'
import { Image_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

function ItemList({ items }) {
    // console.log(items);
    const dispatch = useDispatch()
    const handleAddItem =(item)=>{
        //dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div className='p-1 w-100'>
            {items.map(item => <div key={item.card.info.id}>
                <div className='d-flex gap-2 w-100 py-4 '>
                    <div className='w-100'>
                    <span className='border-0 fs-5 cursor-pointer'>{item.card.info.name}</span>
                    <span className='border-0'>- ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    <p className='fs-6 mx-2 fw-light text-muted'>{item.card.info.description}</p>
                    
                    </div>
                    <div className='position-relative'>
                    <img src={Image_API + item.card.info.imageId} alt='menu-img' className='w-50 h-100 z-0'/>
                    <button className='p-1 bg-light shadow-sm w-10 px-4 border border-success rounded-2 position-absolute top-100 end-50 start-5 translate-middle ' onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                </div>
                <hr/>
            </div>)}
        </div>
    )
}

export default ItemList