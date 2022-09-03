import React from 'react'
import "./css/product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '@mui/material'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'


export default function AddProduct({item}) {
  const {id ,name ,img, price ,disPrice } = item;


  return (

    <div>
      
        <div className="products">
            <FontAwesomeIcon  icon={faHeart} className="fontawesomeIcon"></FontAwesomeIcon>
          <div className="productImg">
            <img src={img} alt="" />
          </div>
          <div className="productTitle">
            <h3>{name}</h3>
          </div>
          <div className="Stars">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="productPrice">
            <p>NRS:{price},000.00</p>
            <p className='underlinePrice'>NRS:{disPrice},000.00</p>
          </div>


          <div className="productBtn">
            <button  ><FontAwesomeIcon  icon={faShoppingCart} className="fontawesomeIcon_Cart"></FontAwesomeIcon>BUY NOW</button>
          </div>
        </div>
    </div>
  )
}
