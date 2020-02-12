import React, {useState} from 'react' 
import {Form, Button} from "react-bootstrap"
import styled from "styled-components"
import { sending } from "../reducers/messageReducer"

const MessageForm  = ({store}) => {
    const [content, setContent] = useState("")
    const setMsg = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }
    const sendMsg = (e) => {
        e.preventDefault()
        store.dispatch(sending("wataru", content))
        // setContent("")
        console.log(store.getState().messages)
        // store.getState().name.name
        setContent("")
        store.getState().messages.map(msg=>{
            console.log(msg.content)
        })
    }
    return (
        <>
            <Wrap onSubmit={sendMsg}>
                <Form.Control className="msg-form" 
                onChange={setMsg} value={content}></Form.Control>
                <Button className="btn" type="submit">送信</Button>
            </Wrap>
        </>
    )
}

const Wrap = styled.form`
    display: flex;
    position: fixed;
    bottom: 10px;
    left: 10px;
    .msg-form {
        width: 400px;
    }

`

export default MessageForm