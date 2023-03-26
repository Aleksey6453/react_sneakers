import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <div>
        <div className="content">
            <div className="header_cont">
            <h1>All sneakers</h1>
            <div className="search_block">
                <img width={30} height={30} src="/img/search.svg" alt="lupa" />
                <input type="text" placeholder="Search..." />
            </div>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>  
    </div>
  )
}

export default Content
