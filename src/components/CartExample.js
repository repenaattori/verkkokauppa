import { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import Products from './Products';


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


  //Providing the cart and url contexts to the child components
  return (
    <CartContext.Provider value={{cart,setCart}}>
      <Products/>
    </CartContext.Provider>
  );
}

