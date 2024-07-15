import React from 'react'
import { ProductsList } from '../data/ProductsList';
import ProductCard from '../component/ProductCard';



export default function Dashboard() {
    
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
         {ProductsList.map((product) => <ProductCard {...product} key={product.id}/> )
        }
        </div>
  )

}
