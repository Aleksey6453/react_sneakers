import React, { useEffect, useState } from 'react'

const Card = ({imageUrl, title, articule, price, onPlus, onFavorite }) => {
    const [added, setAdded] = useState(false)
    const [like, setLike] = useState(false)

    const onClickPlus = () => {
        onPlus({imageUrl, title, articule, price})
        setAdded(added => !added)
        console.log("Change to plus")
    }

    const onClickFavorite = () => {
        onFavorite()
        setLike(like => !like)
        console.log(like)
    }

    useEffect(()=>{
        console.log('Like is changed')
    },[like])

  return (
    <div className="card">
            <img src={imageUrl} alt="sneaker" />
            <div className="fl_between al_items_end">
            <div className="list_card">
                <h4 className="title_cart">{title}</h4>
                <b className="mar_bot_10">{articule}</b>
                <span>Price: </span>
                <span><b> {price} $ </b></span>
            </div>
            <div className="fl_col">
                <button onClick={onClickFavorite} className="button_like">
                    {like ?
                      <img width={30} height={30} src="/img/heart-love.svg" alt="like" /> 
                      :  <img width={30} height={30} src="/img/heart-not-fill.svg" alt="unlike" />
                    }
                </button>
                <button onClick={onClickPlus} className="new_btn">{
                   added ? <svg width="20px" 
                                height="20px" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" 
                                fill="white"/>
                   </svg> : <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fillRule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                </svg>
                }
                
                </button>
            </div>
            
            </div>
    </div>  
  )
}

export default Card
