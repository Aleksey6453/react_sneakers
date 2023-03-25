

function App() {
  return (
    <div className='wrapper'>
      <div className="overlay">
        <div className="drawer">
          <div className="fl_between al_items_cen">
            <h2>Cart</h2>
            <button className="new_btn">
                    <svg width="20px" 
                          height="20px" 
                          viewBox="0 0 24 24" 
                          fill="#707C79" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#707C79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
              </button>
          </div>
          
          <div className="cartItems">
            <div className="cartItem">
              <img src="/img/sneakers/1.jpg" alt="sneaker" />
              <div className="fl_between al_items_cen">
                <div>
                  <p>Title of model</p>
                  <p>articule</p>
                  <b>300 $</b>
                </div>
                <button className="new_btn">
                    <svg width="20px" 
                          height="20px" 
                          viewBox="0 0 24 24" 
                          fill="#E2E200" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#707C79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                </button>
              </div>
            </div>


          </div>
          <ul>
            <li className="fl_between">
              <span>Order summary:</span>
              <div></div>
              <b>300 $</b>
            </li>
            <li className="fl_between">
            <span>Discount 5%:</span>
              <div></div>
              <b>15$</b>
            </li>
            <button className="btn">Place an order </button>
          </ul>
         
        </div>
      </div>
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
                <svg fill="black" 
                     width="30px" 
                     height="30px" 
                     viewBox="0 0 32 32" 
                     version="1.1"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
                </svg>
           </li>
           <li className="padding_l_10"><span className="flex_li_half"> 1205 $</span></li>
           <li className="icon padding_l_40 flex_li">
                <svg width="30px" 
                    height="30px" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14.4C11.0617 14.402 10.1439 14.1254 9.36285 13.6054C8.58183 13.0853 7.97274 12.3451 7.61274 11.4786C7.25274 10.6121 7.15803 9.65817 7.34061 8.73777C7.52318 7.81737 7.97483 6.97186 8.63833 6.30836C9.30183 5.64486 10.1473 5.19321 11.0677 5.01064C11.9881 4.82806 12.942 4.92277 13.8085 5.28277C14.6751 5.64277 15.4153 6.25186 15.9353 7.03288C16.4554 7.8139 16.732 8.7317 16.73 9.67004C16.73 10.9245 16.2317 12.1276 15.3446 13.0147C14.4576 13.9017 13.2545 14.4 12 14.4ZM12 6.40004C11.3588 6.39806 10.7314 6.5864 10.1972 6.94121C9.66311 7.29602 9.24628 7.80134 8.99952 8.3932C8.75275 8.98505 8.68716 9.63682 8.81105 10.266C8.93493 10.8951 9.24272 11.4734 9.69544 11.9275C10.1482 12.3816 10.7255 12.6912 11.3542 12.817C11.983 12.9429 12.635 12.8793 13.2276 12.6344C13.8202 12.3894 14.3268 11.9741 14.6833 11.4411C15.0397 10.9081 15.23 10.2813 15.23 9.64004C15.2221 8.78767 14.8787 7.97275 14.274 7.37189C13.6694 6.77103 12.8524 6.43263 12 6.43004V6.40004Z" fill="#000000"/>
                      <path d="M19 19.28C18.832 19.2794 18.6691 19.2217 18.5383 19.1163C18.4074 19.0109 18.3163 18.864 18.28 18.7C17.9815 17.4723 17.2788 16.3807 16.2848 15.6008C15.2909 14.8208 14.0634 14.3979 12.8 14.4H11.2C9.93828 14.4001 8.71317 14.8241 7.72124 15.6039C6.72932 16.3836 6.02807 17.474 5.73 18.7C5.70636 18.7958 5.66408 18.8861 5.60555 18.9656C5.54703 19.0452 5.47341 19.1124 5.38891 19.1635C5.30441 19.2145 5.21068 19.2485 5.11306 19.2633C5.01545 19.2781 4.91587 19.2736 4.82 19.25C4.72414 19.2263 4.63387 19.1841 4.55435 19.1255C4.47482 19.067 4.40761 18.9934 4.35654 18.9089C4.30546 18.8244 4.27154 18.7307 4.25669 18.633C4.24184 18.5354 4.24636 18.4358 4.27 18.34C4.64867 16.7879 5.53761 15.408 6.79426 14.4216C8.0509 13.4351 9.60243 12.8993 11.2 12.9H12.79C14.3898 12.8963 15.9442 13.4322 17.2017 14.4212C18.4592 15.4102 19.3465 16.7944 19.72 18.35C19.7655 18.5435 19.7334 18.7471 19.6306 18.9172C19.5278 19.0873 19.3625 19.2103 19.17 19.26L19 19.28Z" fill="#000000"/>
                      <path d="M12 22.31C9.96088 22.31 7.96755 21.7053 6.27208 20.5725C4.57661 19.4396 3.25515 17.8294 2.47481 15.9455C1.69447 14.0616 1.4903 11.9886 1.88811 9.98863C2.28592 7.98868 3.26786 6.15162 4.70974 4.70974C6.15162 3.26786 7.98868 2.28592 9.98863 1.88811C11.9886 1.4903 14.0616 1.69447 15.9455 2.47481C17.8294 3.25515 19.4396 4.57661 20.5725 6.27208C21.7053 7.96755 22.31 9.96088 22.31 12C22.3074 14.7336 21.2203 17.3544 19.2874 19.2874C17.3544 21.2203 14.7336 22.3074 12 22.31ZM12 3.19001C10.2576 3.19001 8.55423 3.7067 7.10543 4.67476C5.65664 5.64282 4.52744 7.01875 3.86063 8.62857C3.19382 10.2384 3.01935 12.0098 3.35929 13.7188C3.69922 15.4277 4.5383 16.9975 5.7704 18.2296C7.0025 19.4617 8.57229 20.3008 10.2813 20.6407C11.9902 20.9807 13.7616 20.8062 15.3714 20.1394C16.9813 19.4726 18.3572 18.3434 19.3253 16.8946C20.2933 15.4458 20.81 13.7425 20.81 12C20.8074 9.66426 19.8783 7.42494 18.2267 5.77332C16.5751 4.1217 14.3358 3.19265 12 3.19001Z" fill="#000000"/>
                </svg>
           </li>
           <li className="icon padding_l_10 flex_li">
                <svg width="30px" 
                     height="30px"
                     viewBox="0 0 24 24" 
                     fill="none"
                     stroke="white" 
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
           </li>
        </ul>
      </header>  
      <div className="content">
        <div className="header_cont">
          <h1>All sneakers</h1>
          <div className="search_block">
            <img width={30} height={30} src="/img/search.svg" alt="lupa" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="cards">
            <div className="card">
              {/* <button className="button_like">
                  <img width={30} height={30} src="/img/heart-not-fill.svg" alt="unlike" />
              </button> */}
              <img src="/img/sneakers/1.jpg" alt="sneaker" />
              <div className="fl_between al_items_end">
                <div className="list_card">
                  <h4 className="title_cart">Title of model</h4>
                  <b className="mar_bot_10">articule</b>
                  <span>Price</span>
                  <span><b> 300 $ </b></span>
                </div>
                <div className="fl_col">
                  <button className="button_like">
                      <img width={30} height={30} src="/img/heart-not-fill.svg" alt="unlike" />
                  </button>
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
    </div>
  );
}

export default App;
