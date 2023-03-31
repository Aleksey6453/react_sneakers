import { useState } from 'react';
import CartItem from './components/CartItem';
import Content from './components/Content';
import Drawer from './components/Drawer';
import Header from './components/Header';



function App() {


  const [cartOpened, setCartOpened] = useState(false)
  // const [cartElement, setCartElement] = useState([
  //   {
  //     title:'Air max 97 First',
  //     articule: '1111',
  //     price: 222 ,
  //     imageUrl: 'img/sneakers/1.jpg'
  //   },
  //   {
  //     title:'Air max 97 Two',
  //     articule: '2222',
  //     price: 257 ,
  //     imageUrl: 'img/sneakers/2.jpg'
  //   },
  // ])

  return (
    <div className='wrapper'>
      {cartOpened && <Drawer  onCloseCart={()=>setCartOpened(false)} />}
     
      <Header onClickCart={()=>setCartOpened(true)} />
      <Content />         
    </div>
  );
}

export default App;
