import React from 'react'

const Card = () => {
  return (
    <div className="card">
            <img src="/img/sneakers/1.jpg" alt="sneaker" />
            <div className="fl_between al_items_end">
            <div className="list_card">
                <h4 className="title_cart">Title of model</h4>
                <b className="mar_bot_10">articule</b>
                <span>Price</span>
                <span><b> 300 $ </b></span>
            </div>
            <div className="fl_col">
                <button className="button_like">
                    <img width={30} height={30} src="/img/heart-not-fill.svg" alt="unlike" />
                </button>
                <button className="new_btn">
                <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fill-rule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                </svg>
                </button>
            </div>
            
            </div>
    </div>  
  )
}

export default Card
