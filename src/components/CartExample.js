import { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import Products from './Products';
import { useParams } from 'react-router-dom';


/**
 * Component for cart example.
 * Initializes and updates cart in session storage.
 */
export default function CartExample() {

  //Cart containing product objects
  const [cart, setCart] = useState(()=>{
    const storageCart = sessionStorage.getItem('cart');
    return JSON.parse(storageCart) || [];
  });

  //Saving cart to localstorage if it changes
  useEffect(()=>{
    sessionStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);


  //Providing the cart context to the child components
  return (
    <CartContext.Provider value={{cart,setCart}}>
      <Products/>
    </CartContext.Provider>
  );
}

