import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
 const Navigator= useNavigate();
    const [count,setCount] = useState(15);

    useEffect(() => {
        setInterval(()=> setCount(( count) => count - 1 ),1000);
  setTimeout(()=> Navigator('/'),150000);
      },[Navigator]);

  return (
    <h5 className='mt-2'>your order has been placed successfully.
        you will be redirected to {count} seconds
    </h5>
  )
}
