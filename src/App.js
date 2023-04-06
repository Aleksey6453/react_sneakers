import { useState } from 'react';
import CartItem from './components/CartItem';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect } from 'react';
import Card from './components/Card';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])

    const onChangeSearchInput = (e)=> {
      console.log(e.target.value)
      setSearchValue(e.target.value)
    }

    useEffect(()=>{
      axios.get('https://6424ae787ac292e3cfef8991.mockapi.io/items').then((res)=>{
        setItems(res.data)
      });
      axios.get('https://6424ae787ac292e3cfef8991.mockapi.io/cart').then((res)=>{
        setCartItems(res.data)
      });
      axios.get('https://6424ae787ac292e3cfef8991.mockapi.io/cart').then((res)=>{
        setFavorites(res.data)
      });
    },[])

    const onAddToCart = (obj) => {
      axios.post('https://6424ae787ac292e3cfef8991.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj])
    }

    const onAddToFavorite = (obj) => {
      if(favorites.find(obj => obj.id === obj.id)){
        axios.delete(`/cart/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        axios.post('https://6424ae787ac292e3cfef8991.mockapi.io/cart', obj);
        setFavorites(prev => [...prev, obj])
      }
    }

    const onRemoveItemCart = (id) => {
      axios.delete(`https://6424ae787ac292e3cfef8991.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
      // console.log(id)
    }

  
  return (
    <div className='wrapper'>
      {cartOpened && <Drawer items={cartItems} onCloseCart={()=>setCartOpened(false)} onRemove={onRemoveItemCart} />}

      <Header onClickCart={()=>setCartOpened(true)} />  

      <Routes>
          <Route path='/' exact element= {
            <>
              <Hero />
              <Home items={items}
                    searchValue={searchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                  />
            </> 
          }/>
          <Route path='/favorites' element={ <Favorites items={favorites} /> } />
      </Routes>
      
      

      {/* <div className="content">
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
                   onPlus={onAddToCart} />
            ))}

        </div>
      </div>          */}
    </div>
  );
}


export default App;
