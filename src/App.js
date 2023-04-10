import React from 'react';
import { useState } from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';


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
      try{
        if(cartItems.find(item => Number(item.id) === Number(obj.id))){
          setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
        } else {
          axios.post('https://6424ae787ac292e3cfef8991.mockapi.io/cart', obj);
          setFavorites(prev => [...prev, obj])
        }
      } catch(error){
        alert("error!")
      }
      
      
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
    <AppContext.Provider value={{items, favorites, onAddToCart, onAddToFavorite, cartItems}}>

    <div className='wrapper'>
      <div>
        {cartOpened && <Drawer items={cartItems} onCloseCart={()=>setCartOpened(false)} onRemove={onRemoveItemCart} />}
      </div>
      
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
          <Route path='/favorites' element={ <Favorites items={favorites}  /> } />
      </Routes>
      
    </div>

    </AppContext.Provider>
  );
}


export default App;
