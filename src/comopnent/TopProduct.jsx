import React from 'react'
import './css/topProduct.css'
import Product from './Product'
import data from './Data'
import Card from './Cards'

export default function TopProduct({addtocart,setvalue,value , wish ,setwishlist,name})  {
  
  return (
    <div className='ProductContainer'>
        <div className='ProductWrapper'>
              <div className='ProductHeading'>
                  <h3> {name}</h3>
              </div>
              <div className='ProductCollection'>
              {
                  data.filter((item, index) => index < 4).map((item)=>(
                    <Card key={item.id} item={item} addtocart={addtocart} setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}/>
                  ))
                }
              </div>
              
        </div>
    </div>
  )
  
}
