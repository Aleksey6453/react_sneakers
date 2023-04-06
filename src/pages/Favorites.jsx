import React from 'react'
import Hero_1 from '../components/Hero_1'
import Card from '../components/Card'


const Favorites = ({items}) => {
  return (
    <div className="content">
        <div className="header_cont">
        <h1>My Favorites</h1>
        </div>
        <div className="cards">
            {items.map((item) => (
                   <Card 
                   key={item.articule}
                   title={item.title} 
                   articule={item.articule} 
                   price={item.price} 
                   imageUrl={item.imageUrl}
                  />
            ))}
        </div>
      
        <Hero_1 />
      </div>  
  )
}

export default Favorites