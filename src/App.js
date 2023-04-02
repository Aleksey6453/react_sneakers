import { useState } from 'react';
import CartItem from './components/CartItem';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect } from 'react';
import Card from './components/Card';
import axios from 'axios';




function App() {

  const [cartOpened, setCartOpened] = useState(false)
 
  const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const onChangeSearchInput = (e)=> {
      console.log(e.target.value)
      setSearchValue(e.target.value)
    }

    useEffect(()=>{
      axios.get('https://6424ae787ac292e3cfef8991.mockapi.io/items').then((res)=>{
        setItems(res.data)
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
                   onFavorite={()=> console.log('heart')}
                   onPlus={onAddToCart} />
            ))}

        </div>
    </div>         
    </div>
  );
}

export default App;
