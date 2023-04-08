import React from 'react'
import Card from '../components/Card'

const Home = ({items, searchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) => {
  return (
    <div className="content">
        <div className="header_cont">
        <h1>{searchValue ? `Search: "${searchValue}"`: "All sneakers" }</h1>
        <div className="search_block">
            <img width={30} height={30} src="/img/search.svg" alt="lupa" />
            <input type="text" placeholder="Search..." onChange={onChangeSearchInput} />
        </div>
        </div>
        <div className="cards">
         
            {items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item) => (
                   <Card 
                   key={item.articule}
                   title={item.title} 
                   articule={item.articule} 
                   price={item.price} 
                   imageUrl={item.imageUrl}
                   onFavorite={onAddToFavorite}
                   onPlus={onAddToCart} 
                   
                />
            ))}

        </div>
      </div>  
  )
}

export default Home
