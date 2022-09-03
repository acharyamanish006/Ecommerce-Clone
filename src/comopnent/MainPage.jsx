import React from 'react'
import Home from "./Home";
import TopProduct from "./TopProduct";
import Banner from "./Banner";
import RTX3060 from "../img/RTX3060Ti.png"
import RTX3070 from "../img/RTX3070Ti.png"
import RTX3080 from "../img/RTX3080Ti.png"
import RTX3090 from "../img/RTX3090.png"
import GTX1050TI from "../img/Graphic_Img/GTX1050TI.png"
import GTX1070 from "../img/Graphic_Img/GTX1070.png"
import GTX1080 from "../img/Graphic_Img/GTX1080.png"
import GTX1080TI from "../img/Graphic_Img/GTX1080TI.png"

export default function MainPage({addtocart,setvalue,value , wish ,setwishlist}) {
  return (
    <div>
        <Home />
        <TopProduct name="Top Choice's" addtocart={addtocart} setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist} />
        <TopProduct name="Recommended for You" addtocart={addtocart} setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}/>
        <Banner />
        <TopProduct name="Best Seller"  addtocart={addtocart} setvalue={setvalue} value={value} wish={wish} setwishlist={setwishlist}/>
    </div>
  )
}
