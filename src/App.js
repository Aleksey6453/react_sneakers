

function App() {
  return (
    <div className=' wrapper'>
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
           <li className="icon flex_li">
                <svg fill="white" 
                     width="30px" 
                     height="30px" 
                     viewBox="0 0 32 32" 
                     version="1.1"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
                </svg>
           </li>
           <li className="padding_l_10"><span className="flex_li_half"> 1205 $</span></li>
           <li className="icon padding_l_10 flex_li"><svg fill="white" 
                    width="30px" 
                    height="30px" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5347,16.5117 L15.0777,14.9407 C16.2477,14.0257 16.9997,12.6007 16.9997,10.9997 C16.9997,8.2387 14.7617,5.9997 11.9997,5.9997 C9.2387,5.9997 6.9997,8.2387 6.9997,10.9997 C6.9997,12.6007 7.7517,14.0257 8.9227,14.9407 L5.4657,16.5117 C5.1367,16.6617 4.8477,16.8787 4.6157,17.1457 C3.5967,15.6867 2.9997,13.9127 2.9997,11.9997 C2.9997,7.0297 7.0297,2.9997 11.9997,2.9997 C16.9707,2.9997 20.9997,7.0297 20.9997,11.9997 C20.9997,13.9127 20.4027,15.6867 19.3847,17.1457 C19.1527,16.8787 18.8637,16.6617 18.5347,16.5117 M7.9997,10.9997 C7.9997,8.7907 9.7907,6.9997 11.9997,6.9997 C14.2087,6.9997 15.9997,8.7907 15.9997,10.9997 C15.9997,13.2087 14.2087,14.9997 11.9997,14.9997 C9.7907,14.9997 7.9997,13.2087 7.9997,10.9997 M11.9997,20.9997 C9.3127,20.9997 6.9017,19.8227 5.2517,17.9557 C5.4057,17.7247 5.6217,17.5387 5.8797,17.4227 L9.9617,15.5667 C10.5837,15.8447 11.2737,15.9997 11.9997,15.9997 C12.7257,15.9997 13.4157,15.8447 14.0387,15.5667 L18.1207,17.4227 C18.3777,17.5387 18.5937,17.7247 18.7477,17.9557 C17.0987,19.8227 14.6867,20.9997 11.9997,20.9997 M11.9997,1.9997 C6.4767,1.9997 1.9997,6.4767 1.9997,11.9997 C1.9997,17.5227 6.4767,21.9997 11.9997,21.9997 C17.5227,21.9997 21.9997,17.5227 21.9997,11.9997 C21.9997,6.4767 17.5227,1.9997 11.9997,1.9997"/>
                </svg>
           </li>
        </ul>
      </header>  
      <div className="content">
        <div className="header_cont">
          <h1>All sneakers</h1>
        </div>
        <div className="cards">
            <div className="card">
              <img src="/img/sneakers/1.jpg" alt="sneaker" />
              <div className="fl_beetwen al_items_end">
                <div className="list_card">
                  <h4 className="title_cart">Title of model</h4>
                  <b className="mar_bot_10">articule</b>
                  <span>Price</span>
                  <span><b> 1205 $ </b></span>
                </div>
              <button className="new_btn">
                  <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fill-rule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                  </svg>
              </button>
              </div>
            </div>  
            <div className="card">
              <img src="/img/sneakers/2.jpg" alt="sneaker" />
              <div className="fl_beetwen al_items_end">
                <div className="list_card">
                  <h4 className="title_cart">Title of model</h4>
                  <b className="mar_bot_10">articule</b>
                  <span>Price</span>
                  <span><b> 1205 $ </b></span>
                </div>
              <button className="new_btn">
                  <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fill-rule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                  </svg>
              </button>
              </div>
            </div>  
            <div className="card">
              <img src="/img/sneakers/3.jpg" alt="sneaker" />
              <div className="fl_beetwen al_items_end">
                <div className="list_card">
                  <h4 className="title_cart">Title of model</h4>
                  <b className="mar_bot_10">articule</b>
                  <span>Price</span>
                  <span><b> 1205 $ </b></span>
                </div>
              <button className="new_btn">
                  <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fill-rule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                  </svg>
              </button>
              </div>
            </div>  
            <div className="card">
              <img src="/img/sneakers/4.jpg" alt="sneaker" />
              <div className="fl_beetwen al_items_end">
                <div className="list_card">
                  <h4 className="title_cart">Title of model</h4>
                  <b className="mar_bot_10">articule</b>
                  <span>Price</span>
                  <span><b> 1205 $ </b></span>
                </div>
              <button className="new_btn">
                  <svg width="20px" 
                    height="20px" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none">
                    <path fill="black" 
                    fill-rule="evenodd" 
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                  </svg>
              </button>
              </div>
            </div> 
  
        </div>
       
       
      </div>           
    </div>
  );
}

export default App;
