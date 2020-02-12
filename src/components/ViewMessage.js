import React from 'react' 
import styled from "styled-components"
import Message from "./Message"
import {connect} from "react-redux"
import {mapStateToProps} from "./FirstView"
const ViewMessage = (props) => {
    console.log(props.messages)

    const showMsg = () => {
        return(
            props.messages.map((message, index) => (
                <Message key={index} message={message} />
        ))
        )
    }
    return(
        <>
        {
            showMsg()
        }
        </>
    )
}

const Wrap = styled.div`
`

export default connect(
    mapStateToProps
)(ViewMessage)