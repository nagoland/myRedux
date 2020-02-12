import React, {useState} from 'react' 
import {Form, Button} from "react-bootstrap"
import styled from "styled-components"
import { sending } from "../reducers/messageReducer"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"

const MessageForm  = (props) => {
    const [content, setContent] = useState("")
    const setMsg = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }
    const sendMsg = (e) => {
        e.preventDefault()
        props.dispatch(sending("wataru", content))
        setContent("")
        // store.getState().name.name
        setContent("")
        props.messages.map(msg=>{
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

export default connect(
    mapStateToProps
)(MessageForm)