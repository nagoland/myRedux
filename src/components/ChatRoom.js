import React from 'react' 
import ViewMessage from "./ViewMessage"
import MessageForm from "./MessageForm"
import styled from "styled-components"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"


const ChatRoom = (props) => {
    return(
    <FixedBackground>
    <Wrap>
        <h1>{props.name.name}さん</h1>
        <ViewMessage />
    </Wrap>
    <MessageForm />
    </FixedBackground>
    )
}

const Wrap = styled.div`
    background-color: #e2ffba;
    min-height: 100%;
    background-attachment: fixed;
    overflow: auto;
    
`

const FixedBackground = styled.div`
    height: 100vh;
`

export default connect(
    mapStateToProps,
)(ChatRoom)