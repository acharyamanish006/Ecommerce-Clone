import React from 'react'
import './css/Shop.css'
import AddProduct from './AddProduct';
import Cartempty from './Cartempty';

export default function Page({value}) {
  return (
    <div className='productContainer'>
        <div className='productWrapper'>
              <div className='productCollection'>
              {
                value.length >0 ?                   value.filter((item, index) => index < 100).map((item)=>(
                  <AddProduct key={item.id} item={item}  value={value} />
                )) : <Cartempty/>
                }
              </div>
              
        </div>
    </div>
  )

}


