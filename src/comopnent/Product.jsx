import React from 'react'
import "./css/product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Product(props) {
  return (

    <div> <Link to="/productDetails" className='link'>
        <div className="products">
            <FontAwesomeIcon  icon={faHeart} className="fontawesomeIcon"></FontAwesomeIcon>
          <div className="productImg">
            <img src={props.Img} alt="" />
          </div>
          <div className="productTitle">
            <h3>NVIDIA GeForce GTX 3090  8GB GDDR6 PCI Express 4.0 Graphics Card - Steel and Black</h3>
          </div>
          <div className="Stars">
            <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar} className="fontawesomeIconStars"></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStarHalfStroke} className="fontawesomeIconStars"></FontAwesomeIcon>
          </div>
          <div className="productPrice">
            <p>NRS:{props.price},000.00</p>
            <p className='underlinePrice'>NRS:{props.discountPrice},000.00</p>
          </div>


          <div className="productBtn">
            <p><FontAwesomeIcon  icon={faShoppingCart} className="fontawesomeIcon_Cart"></FontAwesomeIcon>ADD TO CART</p>
          </div>
        </div>
        </Link>
    </div>
  )
}
