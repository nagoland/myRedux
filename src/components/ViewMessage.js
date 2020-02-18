import React, {useContext} from 'react' 
import styled from "styled-components"
import Message from "./Message"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"
import AppContext from "../contexts/AppContext"
const ViewMessage = (props) => {
    const fireMsgs = useContext(AppContext)
    console.log(props.messages)

    const showMsg = () => {
        return(
            props.messages.map((message, index) => (
                <Message key={index} message={message} index={index}/>
        ))
        )
    }

    const showFireMsgs = () => {
        return (
            fireMsgs.map((msg, index)=>(
                <Message msg={msg} index={index}/>
            ))
        )
    }
    return(
        <Wrap>
        {
            showFireMsgs()
        }

        </ Wrap>
    )
}

const Wrap = styled.div`
    padding-left: 10px;
    margin-bottom: 100px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
        padding: 0;
    }
`

export default connect(
    mapStateToProps
)(ViewMessage)