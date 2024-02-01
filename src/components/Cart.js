import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

function Cart() {
    //subscribe right portion of selector
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center '>
        <div className='d-flex justify-content-center gap-4'>
        <h1 className='fs-4'>Cart</h1>
        <button className='border-0 p-2 rounded-2 bg-black text-white' onClick={handleClearCart}>Clear Cart</button>      
        </div>
        <div className='w-75 m-auto shadow-sm'>
            <ItemList items={cartItems}/>
        </div>
        {cartItems.length === 0 && <p className='my-2'>Your cart is empty</p>}
    </div>
  )
}

export default Cart