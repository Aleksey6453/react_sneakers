import { useState } from 'react';
import CartItem from './components/CartItem';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect } from 'react'
import Card from './components/Card'



function App() {

  const [cartOpened, setCartOpened] = useState(false)

  const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
      fetch('https://6424ae787ac292e3cfef8991.mockapi.io/items').then((res)=>{
        return res.json();
      })
      .then(json =>{
        setItems(json)
      })
    },[])

    const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj])
      
    }
    


  return (
    <div className='wrapper'>
      {cartOpened && <Drawer items={cartItems} onCloseCart={()=>setCartOpened(false)} />}
     
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content">
        <div className="header_cont">
        <h1>All sneakers</h1>
        <div className="search_block">
            <img width={30} height={30} src="/img/search.svg" alt="lupa" />
            <input type="text" placeholder="Search..." />
        </div>
        </div>
        <div className="cards">
         
            {items.map((item) => (
                   <Card title={item.title} 
                   articule={item.articule} 
                   price={item.price} 
                   imageUrl={item.imageUrl}
                   onFavorite={()=> console.log('heart')}
                   onPlus={onAddToCart} />
            ))}

        </div>
    </div>         
    </div>
  );
}

export default App;
