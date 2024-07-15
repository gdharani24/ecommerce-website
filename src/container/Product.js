import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsList } from '../data/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/reducer/cart';

export default function Product() {
 const params = useParams();
 const dispatch = useDispatch(); 
 const Navigator = useNavigate();
 const props = ProductsList.find(
  (element)  => element.id === parseInt(params.id)
);

const [ alert , setAlert] = useState(false);
const list = useSelector((state)=> state.cart.list);
const  element  = list.find((item)=> item.id === props.id);


const addtocart = () =>{
setAlert(true);
setTimeout(()=> setAlert(false),3000);
dispatch(addItem(props));
};
  return (
    <div className='card m-2 '  >
    {alert && <span className='alert alert-sucess'>Item added to cart</span>}
    <div className='mt-2'>
        <img src={props.image} height={350} width={400} alt={props.description} className='border-radius-9 mt-4' />
    </div>
    <div className='card-body mt-3'>

   <h5>   <div className='card-title'>{props.title}</div></h5>
  <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
  <h6>Rating:{ `$${props.rating.rate}`} </h6>
  <div className='mt-4'>
   {props.rating.count > 0 ? 
   (
   <>
   <button className='btn btn-success' onClick={()=>Navigator('/checkout/${props.id}')}>Buy Now</button>
   {element.count > 0 ?  
     <button className='btn btn-outline-warning ms-4'
      onClick={()=> Navigator('/cart')}>Add to Cart</button>
:
   <button className='btn btn-success ms-4' onClick={addtocart}>Add to Cart</button>
  }
   </>
  )
   :
   ( <button className='btn btn-outline-danger'>Out of stock</button>
   )}
   </div>

    </div>
    </div>
  )
}
