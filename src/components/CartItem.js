import React from 'react'

const CartItem = () => {
  return (
    <div className="cartItem">
        <img src="/img/sneakers/1.jpg" alt="sneaker" />
        <div className="fl_between al_items_cen">
        <div>
            <p>Title of model</p>
            <p>articule</p>
            <b>300 $</b>
        </div>
        <button className="new_btn">
            <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 24 24" 
                    fill="#E2E200" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_MD">
            <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#707C79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
        </button>
        </div>
    </div>
  )
}

export default CartItem
