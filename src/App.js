import React,{useEffect,useState} from 'react' 
import FirstView,{mapStateToProps} from "./components/FirstView"
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatRoom from "./components/ChatRoom"
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'
  
import * as firebase from "firebase"
import firestore from "./config/fireStore"
import { connect } from 'react-redux';
import AppContext from "./contexts/AppContext"





const App = () => {
  const [fireMsgs, setFireMsgs] = useState([])
  // useEffect(() => {
  //   console.log(store.getState().messages)
  // });
  useEffect(()=>{
    listenForMessages()
    console.log(fireMsgs)
  },[])
  
  const listenForMessages = () => {
    firestore.collection("messages").orderBy("date")
    .onSnapshot((snapshot) => {
        console.log(snapshot)
        const allMessages = []
        snapshot.forEach((doc) => allMessages.push(doc.data()))
        setFireMsgs(allMessages)
    },(error) => console.log(error))
  }


    
    return(
    <>
    <AppContext.Provider value={fireMsgs}>
      <Router>
        <Route exact path="/chatRoom" render={() => <ChatRoom />} />
        <Route exact path="/" render={() => <FirstView />} />
      </Router>
    </AppContext.Provider>
    </>
    )
}

export default connect (
  mapStateToProps
)(App)
