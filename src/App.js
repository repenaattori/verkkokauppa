import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { CartContext, TokenContext, UrlContext } from './components/Contexts';
import Navbar from './components/Navbar';
import Products from './components/Products';

const URL = 'http://localhost:8888/';

function App() {

  //Cart containing product objects
  const [cart, setCart] = useState(()=>{
    const storageCart = localStorage.getItem('cart');
    return JSON.parse(storageCart) || [];
  });

  //Login information
  const [token, setToken] = useState(()=>{
    return sessionStorage.getItem('token') || undefined;
  });

  //Saving cart to localstorage if it changes
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  //Saving token to sessionstorage if it changes
  useEffect(()=>{
    sessionStorage.setItem('token', token);
  },[token]);


  return (
    <CartContext.Provider value={{cart,setCart}}>
    <TokenContext.Provider value={{token,setToken}}>
    <UrlContext.Provider value={URL}>
      <Products/>
    </UrlContext.Provider>
    </TokenContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
