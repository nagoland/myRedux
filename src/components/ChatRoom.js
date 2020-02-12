import React from 'react' 
import ViewMessage from "./ViewMessage"
import MessageForm from "./MessageForm"
import styled from "styled-components"


const ChatRoom = ({store}) => {
    return(
    <FixedBackground>
    <Wrap>
        <h1>{store.getState().name.name}さん</h1>
        <ViewMessage store={store}/>
    </Wrap>
    <MessageForm store={store}/>
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

export default ChatRoom