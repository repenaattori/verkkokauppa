export default function Cart(){

    const {cart, setCart } = useContext(CartContext);

    return(
        <li>
            { cart.map(prod => <li id={prod.id}>prod.name</li>) }
        </li>
    )
}