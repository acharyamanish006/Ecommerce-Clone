import React from 'react'
import './css/GraphicCard.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import RTX3060 from "../img/RTX3060Ti.png"
import RTX3070 from "../img/RTX3070Ti.png"
import RTX3080 from "../img/RTX3080Ti.png"
import RTX3090 from "../img/RTX3090.png"
export default function GraphicCard() {
    
    const [likecount,likesetcount] = useState( 1 );
    function add(){
      likesetcount(prevCount=>prevCount+1)
    }
    function sub(){
      if(likecount <= 1){
        return
      }
      likesetcount(prevCount=>prevCount-1)
    }
  return (
    <div className='GraphicContainer'>

        <div className='GraphicWrapper'>

              <div className='GraphicCollection'>

                    <div className="Graphics">
                        <FontAwesomeIcon  icon={faHeart} className="fontawesomeIcon"></FontAwesomeIcon>
                        <div className="GraphicImg">
                            <img src={RTX3090} alt="" />
                        </div>
                        <div className="GraphicDetails">
                            <div className="GraphicTitle">
                                <h3>NVIDIA GeForce RTX 3090 8GB GDDR6x PCI Express 4.0 Graphics Card - Steel and Black</h3>
                            </div>
                            <div className='GraphicPara'>
                                <p>The GeForce RTX 3090  is a high-end graphics card by NVIDIA, launched on December 1st, 2020. Built on the 8 nm process, and based on the GA104 graphics processor, in its GA104-200-A1 variant, the card supports DirectX 12 Ultimate.</p>
                            </div>
   
                            <div className="Stars">
                                 <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
                                 <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
                                 <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
                                 <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
                                 <FontAwesomeIcon  icon={faStarHalfStroke} className="fontawesomeIconStars"></FontAwesomeIcon>
                            </div>
                            <hr />
                            <div className="GraphicPrice">
                                <p>NRS:138,000.00</p>
                                <p className='underlinePrice'>NRS:150,000.00</p>
                            </div>
                            <hr />
                            <div className='QuantityBtn'>
                                <span>Quantity</span>
                                <button onClick={sub}>-</button>
                                <span >{likecount}</span>
                                <button onClick={add}>+</button>
                            </div>
                            <div className="GraphicBtn">
                        
                                <p>BUY NOW</p>
                                <p>ADD TO CART</p>
                            </div>
                        </div>

                    </div>
                    <div className='GraphicSpecs'>
                        <h3>GeForce RTX™ 3090 GAMING X TRIO 24G/24GB GDDR6X</h3>
                        <div className='specsHeader'>

                            <h4>SPECIFICATIONS</h4>

                            
                        </div>
                        <div className='specsLists'>
                            <div>
                                <li>Model Name GeForce RTX™ 3090 GAMING X TRIO 24G</li>
                                <li>Graphics Processing Unit NVIDIA®</li>
                                <li>GeForce RTX™ 3090</li>
                                <li>Interface PCI Express®</li>
                                <li>Gen 4</li>
                                <li>Cores 10496 Units</li>
                                <li>Core Clocks Boost:1785 MHz</li>
                                <li>Memory Speed 19.5 Gbps</li>
                                <li>Memory 24GB GDDR6X</li>
                                <li>Memory Bus 384-bit</li>
                                <li>Output</li>
                                <li>DisplayPort x 3 (v1.4a)</li>
                            </div>
                            <div>
                                <li>HDMI x 1 (Supports 4K@120Hz as specified</li>
                                <li>in HDMI 2.1)</li>
                                <li>HDCP Support Y</li>
                                <li>Power consumption 370W</li>
                                <li>Power connectors 8-pin x 3</li>
                                <li>Recommended PSU 750 W</li>
                                <li>Card Dimension (mm) 323 x 140 x 56mm</li>
                                <li>Weight (Card / Package) 1565 g / 2370 g</li>
                                <li>DirectX Version Support 12 API</li>
                                <li>OpenGL Version Support 4.6</li>
                                <li>NVLink Support Y</li>
                                <li>Multi-GPU Technology Y</li>
                                <li>Maximum Displays 4</li>
                                <li>VR Ready Y</li>
                                <li>G-SYNC®</li>
                            </div>
                        </div>




                    </div>
                </div>
              
        </div>
        <hr />
    </div>
  );
}

