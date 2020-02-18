import React, {useState} from 'react' 
import {Form, Button} from "react-bootstrap"
import styled from "styled-components"
import { sending } from "../reducers/messageReducer"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"
import firestore from "../config/fireStore"


const MessageForm  = (props) => {
    const [content, setContent] = useState("")
    const setMsg = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }
    const sendMsg = (e) => {
        e.preventDefault()
        if(content===""){
            alert("メッセージが未入力です")
        }else{
            props.dispatch(sending(props.name, content))
            firestore.collection("messages").add({
                name: props.name.name,
                content: content,
                id: Number((Math.random() * 1000000000).toFixed(0)),
                date: new Date()
            })
            setContent("")
        }
    }
    return (
        <>
        <Wrap>
            <Inner onSubmit={sendMsg}>
                <Form.Control className="msg-form" 
                onChange={setMsg} value={content}>
                </Form.Control>
                <Button className="btn" type="submit">送信</Button>
            </Inner>
        </Wrap>
        
        </>
    )
}

const Wrap = styled.div`
    border-top: 1px solid gray;
    background-color:#e2ffba;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 70px;
    display: flex;
    align-items: center;
`
const Inner = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    .msg-form {
        width: 500px;
        
    }
    
    
    @media (max-width: 800px) {
        
        .msg-form{
            width: 450px;
        }
        left: 0;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:375px){
        .msg-form {
            width: 250px;
        }
    }

`

export default connect(
    mapStateToProps
)(MessageForm)