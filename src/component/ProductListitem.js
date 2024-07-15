import React from 'react'

export default function ProductListitem(props) {
  return (
    <div
    className="d-flex m-4 align-items-center justify-content-center">
    <img
        src={props.image}
        height={150} 
        width={180}
        alt={props.description}
        className="border-radius-9 mt-4"
      />
   
      <h5>
      
       <div className="card-title me-2">{props.title}</div>
      </h5>
      <h6 className="mt-2 me-2">Price: {`$${props.price}`}</h6>
      <h6>Rating:{`$${props.rating.rate}`} </h6>
    <button className="btn btn-danger ms-3" onClick={props.incrementItem}>+</button>
    <span className='ms-3'>Quanity{props.count}</span>   
   <button className="btn btn-danger ms-3" onClick={props.decrementItem}>-</button>
   <button className="btn btn-danger ms-3" onClick={props.removeItem}>Remove</button>
 </div>
  
  )
}
