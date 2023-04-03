import React from 'react'
import CartItem from './CartItem'
import { useState } from 'react';


const Drawer = ({onCloseCart, onRemove, items = []}) => {

    const openModal = () => {
      document.body.style.overflow = "hidden"
    } 
    const closeModal = ()=>{
        document.body.style.overflow = "auto"
        onCloseCart()  
    }  

{Drawer && openModal()};

  return (
    <div  className="overlay">
        <div className="drawer">
            <div className="fl_between al_items_cen">
            <h2>Cart</h2>
            <button className="new_btn" onClick={closeModal} >
                    <svg width="20px" 
                            height="20px" 
                            viewBox="0 0 24 24" 
                            fill="#707C79" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#707C79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                </button>
            </div>
            
            <div className="cartItems">
                {/* <CartItem /> */}
                { items.map((obj)=> (
                    <div className="cartItem">
                        <div className="img_wrap">
                            <img src={obj.imageUrl} alt="sneaker" />
                        </div>  
                        <div className="fl_between al_items_cen">
                            <div>
                                <p>{obj.title}</p>
                                <p>{obj.articule}</p>
                                <b>{obj.price} $</b>
                            </div>
                            <button className="new_btn" onClick={()=>{onRemove(obj.id)}}>
                                <svg width="20px" 
                                        height="20px" 
                                        viewBox="0 0 24 24" 
                                        fill="#E2E200" xmlns="http://www.w3.org/2000/svg">
                                <g id="Menu / Close_MD">
                                <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#707C79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                  
                ))   
                }
             
            </div>
            <ul>
            <li className="fl_between">
                <span>Order summary:</span>
                <div></div>
                <b>300 $</b>
            </li>
            <li className="fl_between">
            <span>Discount 5%:</span>
                <div></div>
                <b>15$</b>
            </li>
            <button className="btn">Place an order </button>
            </ul>
        </div>
    </div>
  )
}

export default Drawer
