import React from 'react' 
import styled from "styled-components"
import Message from "./Message"
const ViewMessage = ({store}) => {
    console.log(store.getState().messages)

    const showMsg = () => {
        return(
            store.getState().messages.map((message, index) => (
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

export default ViewMessage