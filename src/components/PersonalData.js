import { useContext, useEffect, useState } from "react"
import { TokenContext } from "./Contexts"
import axios from "axios";


/**
 * This example components retrieves the user data from the server if the user is logged in
 * Bearer token is set in axios defaults in AuthorizationExample.js
 */
export default function PersonalData(){

    const {token, setToken} = useContext(TokenContext);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        axios.get('/getuserdata')
            .then(resp => setUser(resp.data))
            .catch(error => console.log(error.message))
    }, [token])

    return (
        <div>
            {user === null ? <h2>No authorized personal data</h2>:
                <div>
                    <h2>Welcome {user.fname + " " +  user.lname}</h2>
                    <button onClick={()=>setToken('')}>Logout</button>
                </div> 
            }
        </div>
    )
}