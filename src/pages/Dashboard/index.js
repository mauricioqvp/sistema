import { useContext } from "react"

import { AuthContext } from '../../contexts/auth';

export default function Dashboard(){
    const { signOut } = useContext(AuthContext);
    return(
        <div>
            <h1>PÁGINA DASHBOARD</h1>
            <button onClick={()=>{signOut()}}>Fazer Logout</button>
        </div>
    )
}