import React from 'react' 
import styled from "styled-components"

const Message = ({message, index}) => {
    console.log(message)
    const h = ("0"+ message.date.getHours()).slice(-2)
    const m = ("0"+ message.date.getMinutes()).slice(-2)
    const s = ("0"+ message.date.getSeconds()).slice(-2)
    
    return(
    <li>
        <span>
            {`${h}:${m}:${s}`}
        </span>
        
       {message.content}
    </li>
    )
}


export default Message