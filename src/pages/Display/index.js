import {DisplayStyle} from "./Display.js"
import { useState } from "react"
const Display = ({isAuthenticated}) => {

    const [color, setColor] = useState("green")


    
    return (
           <DisplayStyle> 
               { isAuthenticated ? 
                <p style = {{color: "#12CBC4"}}>Usuário autenticado!!</p>   
                :
                <p style = {{color: "#ED4C67"}}>Usuário não autenticado!!</p>
            }
           </DisplayStyle> 
    )
}

export default Display 