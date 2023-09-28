import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { CartContext } from "./Contexts";

/**
 * Simple example component for fetching and printing the products and
 * adding selected to the cart.
 */
export default function Products(){

    const [products, setProducts] = useState([]);
    const {cart, setCart} = useContext(CartContext);
    
    //UseEffect for retrieving product information
    useEffect(() => {
        axios.get('/products')
            .then((resp)=>{
                setProducts(resp.data);
            })
            .catch (error => {
                console.log(error.message);
                alert(error.response === undefined ? error.message : error.response.data.error);
            })
    },[]);

    //Adds/updates product into the cart
    function updateProducts(product){
        const prod = cart.find( p => p.id === product.id );
        if( prod ){
            prod.count++;
            setCart([...cart]);
        }else{
            setCart([...cart, {...product, count: 1}])
        }
    }

    return(
        <div>
            <ProductList products={products} updateProducts={updateProducts}/>   
            <CartProductList cart={cart} setCart={setCart}/>    
        </div>
    )
}

function ProductList({products, updateProducts}){
    return(
        <div>
            <h2>All the products</h2>
            <ul>
                { products.map(product => 
                    <li key={product.id}>
                        <button onClick={ () => updateProducts(product) }>{product.productName}</button>
                    </li>) 
                }
            </ul>
        </div>
    );
}

function CartProductList({cart, setCart}){
    return(
        <div>
            <h2>Products in the cart</h2>
            <button onClick={()=>setCart([])}>Empty cart</button>
            <ul>
                { cart.map(product => <li key={product.id}><b>{product.count+"x "}</b>{product.productName}</li>) }
            </ul>
        </div>
    );
}