import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { UrlContext } from "./Contexts";

/**
 * Simple example component for getting and printing the products.
 */
export default function Products(){

    const [products, setProducts] = useState([]);
    const URL = useContext(UrlContext);

    useEffect(()=>{
        axios.get(URL+'')
            .then((resp)=>{
                setProducts(resp.data);
            })
            .catch (error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    },[]);

    return(
        <ul>
            { products.map(product => <li key={product.id}>{product.name}</li>) }
        </ul>
    )
}