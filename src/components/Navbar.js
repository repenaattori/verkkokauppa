import { useContext, useState } from "react";
import { CartContext } from "./Contexts";

export default function Navbar(){

    const {cart, setCart } = useContext(CartContext);
    const [text, setText ] = useState('');

    function upateChart(){
        setCart([...cart, {name: text}]);
    }

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={upateChart}>ADD</button>
            <ul>
                {
                    cart.map((p,i) => <li key={p.name+i}>{p.name}</li>)
                }
            </ul>
        </div>
    );
}