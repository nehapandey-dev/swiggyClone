import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
    const err = useRouteError()
    console.log(err);
  return (
    <div className='d-flex justify-content-center'>
       <div>
       <h1>Oops!!!</h1>
        <h5>something went wrong!!</h5>
        <h2>{err.status}{err.statusText}</h2>
       </div>
    </div>
  )
}
