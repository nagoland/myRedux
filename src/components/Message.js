import React from 'react' 
import styled from "styled-components"
import {Card} from "react-bootstrap"

const Message = ({msg, index}) => {
    console.log(index)
    console.log(msg.date.seconds)
    const d = new Date(msg.date.seconds * 1000)
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day  = d.getDate();
    const hour = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
    const min  = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
    const date = `${year}/${month}/${day} ${hour}:${min}`
    // const h = ("0"+ msg.date.getHours()).slice(-2)
    // const m = ("0"+ msg.date.getMinutes()).slice(-2)
    // const s = ("0"+ msg.date.getSeconds()).slice(-2)
    
    return(
    <Wrap>
        <Card bg="light" className="content">

            <div className="top">
                <span>{index+1} </span>
                <span className="name">{msg.name}さん</span>
                <span className="date">{date}</span>
            </div>
            <span className="bottom">{msg.content}</span>
        </Card>
    </Wrap>

    )
}
const Wrap = styled.li`
    list-style: none;
    width: 500px;
    margin-top: 10px;

    .content{
        padding: 10px;
    }
    .top {
        margin-bottom: 10px;
    }

    @media (max-width: 900px){
        width:80vw;
        max-width: 500px;
    }
    
`

export default Message