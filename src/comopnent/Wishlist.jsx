import React from 'react'
import './css/Shop.css'
import AddProduct from './AddProduct';
import Wishlistempty from './Wishlistempty';

export default function Wishlist({wish}) {
    console.log(wish)
  return (
    <div className='productContainer'>
        <div className='productWrapper'>
              <div className='productCollection'>
              { 
              wish.length > 0 ?                   wish.filter((item, index) => index < 100).map((item)=>(
                    
                <AddProduct key={item.id} item={item} />       
                 
                )) : <Wishlistempty/>
                

                }
              </div>
              
        </div>
    </div>
  )

}