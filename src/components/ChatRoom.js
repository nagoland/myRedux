import React from 'react' 
import ViewMessage from "./ViewMessage"
import MessageForm from "./MessageForm"
import styled from "styled-components"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"



const ChatRoom = () => {
    if(performance.navigation.type === 1){
        
            window.location.href = "../"
    }

    return(
        
    <FixedBackground>
    <Wrap>
        
        {/* <Link to="../" className="return"><Button>戻る</Button></Link> */}
        <ViewMessage />
    </Wrap>
    <MessageForm />
    </FixedBackground>
    )
}

const Wrap = styled.div`
    background-color: #e2ffba;
    min-height: 100%;
    
    /* background-attachment: fixed; */
    overflow: auto;
    
    
`

const FixedBackground = styled.div`
    height: 100vh;
`

export default ChatRoom
// connect(
//     mapStateToProps,
// )(ChatRoom)