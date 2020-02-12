import React,{ useState } from 'react' 
import styled from "styled-components"
import {Form, Button} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'
import { naming } from "../reducers/nameReducer"
import { connect } from 'react-redux'



const FirstView = (props) => {
    // console.log(store)
    const [name, setName] = useState("")
    const [text, setText] = useState("What's your name?")

    const settingName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const getName = (e) => {
        e.preventDefault()
        if(name === null || name ===""){
            console.log("入力しろ")
        }else{
            setText(`welcome ${name}!`)
            props.naming(name)
            setName("")
            // console.log(store.getState().name.id)
        }
    }
    return(
        <Wrap>
            {props.name.name}
            <h1 className="title">Let's chat!</h1>
            <form className="input-name">
                <Form.Control placeholder="your name" className="form-control" 
                onChange={settingName} value={name}></Form.Control>

                <Button onClick={getName} className="btn">join</Button>
            </form>
            <h2>{text}</h2>
            <Link to="/chatRoom"><Button>chat room</Button></Link>
            <Form.Text className="text-muted">
            
        We'll never share your email with anyone else.</Form.Text>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    .input-name {
        display: flex;
        .form-control {
            margin-right: 5px;
        }
        .btn {
            letter-spacing: 1px;
        }
    }
    


`
export const mapStateToProps = (state) => {
    return {
        name: state.name,
        messages: state.messages
    }
}

const mapDispatchToProps = {
    naming,
  }

const connectedFirstView = connect(
    mapStateToProps,
    mapDispatchToProps
    )
(FirstView)

export default connectedFirstView