

function App() {
  return (
    <div className='main wrapper'>
      <header className="header">
        <div className="header_left">
          <img src="/img/logo.png" alt="logo" className="logo" />
          <div className="padding_l_10">
            <h3 className="title_header m_p_0">
              Sneakers Store 97
            </h3>
            <p className="m_p_0">
              The store is dedicated to the air max 97 
            </p>
          </div>
        </div>
        <ul className="header_right">
           <li className="flex_li"> <img src="/img/basket.png" alt="basket" className="icon"/>  </li> 
           <li className="padding_l_10"><span className="flex_li_half"> 1205 $</span></li>
           <li> <img src="/img/user.png" alt="face" className="icon padding_l_10"/> </li>
        </ul>
      </header>  
      <div className="content">
        <h1>All sneakers</h1>
      </div>           
    </div>
  );
}

export default App;
