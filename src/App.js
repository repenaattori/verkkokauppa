import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { CartContext } from './components/CartContext';
import Navbar from './components/Navbar';

function App() {

  //Cart containing product objects
  const [cart, setCart] = useState(()=>{
    const c = localStorage.getItem('cart');
    return JSON.parse(c) || [];
  });


  //Saving cart to localstorage if it changes
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  return (
    <CartContext.Provider value={{cart,setCart}}>
      <Navbar/>
    </CartContext.Provider>
  );
}

export default App;
