

function App() {
  return (
    <div className='main wrapper'>
      <header className="header">
        <div className="header_left">
          <img src="/img/logo.png" alt="logo" className="logo" />
          <div>
            <h3>
              Sneakers Store
            </h3>
            <p>
              Text about this store
            </p>
          </div>
        </div>
        <ul className="header_right">
           <li className="flex_li"> <svg className="flex_li_half" /> <span className="flex_li_half"> 1205 $</span> </li> 
           <li> <img src="" alt="face" /> </li>
        </ul>
      </header>  
      <div className="content">
        <h1>All sneakers</h1>
      </div>           
    </div>
  );
}

export default App;
