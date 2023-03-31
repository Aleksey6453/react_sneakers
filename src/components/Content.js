import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'

const Content = () => {
    
    const [items, setItems] = useState([])

    useEffect(()=>{
      fetch('https://6424ae787ac292e3cfef8991.mockapi.io/items').then((res)=>{
        return res.json();
      })
      .then(json =>{
        setItems(json)
      })
    },[])

   

    // const arr = [
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
    //   {
    //     title:'Air max 97 Three',
    //     articule: '3333',
    //     price: 313 ,
    //     imageUrl: 'img/sneakers/3.jpg'
    //   },
    //   {
    //     title:'Air max 97 Four',
    //     articule: '4444',
    //     price: 157 ,
    //     imageUrl: 'img/sneakers/4.jpg'
    //   },
    //   {
    //     title:'Air max 97 Five',
    //     articule: '5555',
    //     price: 356 ,
    //     imageUrl: 'img/sneakers/5.jpg'
    //   }
    // ]


  return (
    <div className="content">
        <div className="header_cont">
        <h1>All sneakers</h1>
        <div className="search_block">
            <img width={30} height={30} src="/img/search.svg" alt="lupa" />
            <input type="text" placeholder="Search..." />
        </div>
        </div>
        <div className="cards">
         
            {items.map((obj) => (
                   <Card title={obj.title} 
                   articule={obj.articule} 
                   price={obj.price} 
                   imageUrl={obj.imageUrl}
                   onClickFavorite={()=> console.log('Add to favorite')}
                   onClickPlus={() => console.log('Press to plus')} />
            ))}

        </div>
    </div>  
  )
}

export default Content
