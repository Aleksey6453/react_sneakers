import React from 'react'
import Hero_1 from '../components/Hero_1'
import Card from '../components/Card'
import AppContext from '../context'


const Favorites = ({onAddToFavorite}) => {
  const {favorites} = React.useContext(AppContext);

  const onTest = () => {
    console.log('test')
  }
  return (
    <div className="content">
        <div className="header_cont">
        <h1>My Favorites</h1>
        </div>
        <div className="cards">
            {favorites.map((item) => (
                   <Card 
                   key={item.articule}
                  //  title={item.title} 
                  //  articule={item.articule} 
                  //  price={item.price} 
                  //  imageUrl={item.imageUrl}
                   onPlus={onTest}
                   onFavorite={onTest}
                   {... item}
                  />
            ))}
        </div>
      
        <Hero_1 />
      </div>  
  )
}

export default Favorites
