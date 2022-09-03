import React from 'react'
import "./css/product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Rating from '@mui/material/Rating'


export default function Card({item,addtocart,setvalue ,value ,wish ,setwishlist}) {



    const {id ,name ,img, price ,disPrice } = item;
    
    function addtocart(){
      if(item.id == id){
        console.log(item);
        return setvalue([...value,item]);
      }
    }
    function addwish(){
      
      if(item.id == id){
        console.log(item);
        return setwishlist([...wish,item]);
      }
    }

  return (

    <div>
      
        <div className="products">
            <FontAwesomeIcon  icon={faHeart} className={"fontawesomeIcon " + (onclick ? "fontawesomeIcon--red" : "")}  onClick={()=>addwish(item)   } ></FontAwesomeIcon>
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
            <button
             onClick={()=>addtocart(item)} ><FontAwesomeIcon  icon={faShoppingCart} className="fontawesomeIcon_Cart"></FontAwesomeIcon>ADD TO CART</button>
          </div>
        </div>
    </div>
  )
}
