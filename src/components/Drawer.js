import React from 'react'
import CartItem from './CartItem'
import { useState } from 'react';
import StateCart from './StateCart';
import AppContext from '../context';
import { useCartSum } from '../Hooks/useCartSum';


const Drawer = ({onCloseCart, onRemove, items = []}) => {

    const {cartItems, setCartItems, totalPrice} = useCartSum();

    // const {cartItems} = React.useContext(AppContext)
    // const totalPrice = cartItems.reduce((sum, obj)=>obj.price + sum, 0);  

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

            {items.length > 0  ? 
                <>
                <div className="cartItems">
                        { items.map((obj)=> (
                            <div key={obj.id} className="cartItem">
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
                            <b>{totalPrice} $</b>
                        </li>
                        
                        <button className="btn">Place an order {totalPrice} </button>
                    </ul>
                </>
                     : (
                       
                    <div className="cartEmpty">
                        <h2 className='title'>It's still empty here</h2>
                        <img src="/img/empty_box.jpg" alt="emptyBox" />
                    </div>
                )
            }
     
        </div>
    </div>
  )
}

export default Drawer
