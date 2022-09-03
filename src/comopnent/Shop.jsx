import React from 'react'
import './css/Shop.css'
import Product from './Product'
import RTX3060 from "../img/RTX3060Ti.png"
import RTX3070 from "../img/RTX3070Ti.png"
import RTX3080 from "../img/RTX3080Ti.png"
import RTX3090 from "../img/RTX3090.png"
import RX6800 from "../img/AMD_RX6800.png"
import RX6800xt from "../img/AMD_RX6800xt.png"
import GT730 from "../img/Graphic_Img/GT730.png"
import GTX1050TI from "../img/Graphic_Img/GTX1050TI.png"
import GTX1070 from "../img/Graphic_Img/GTX1070.png"
import GTX1080 from "../img/Graphic_Img/GTX1080.png"
import GTX1080TI from "../img/Graphic_Img/GTX1080TI.png"
import GTX1660 from "../img/Graphic_Img/GTX1660.png"
import data from './Data'
import Card from './Cards'

export default function Shop({addtocart,setvalue,value , wish ,setwishlist}) {
  

  return (
    <div className='productContainer'>
        <div className='productWrapper'>
              <div className='productHeading'>
                <h3> New Offer </h3>
              </div>
              <div className='productCollection'>
              {
                  data.filter((item, index) => index < 20).map((item)=>(
                    <Card key={item.id} item={item} addtocart={addtocart} setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}/>
                  ))
                }
              </div>
              
        </div>
    </div>
  )
}

