import React,{useEffect} from 'react' 
import FirstView from "./components/FirstView"
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatRoom from "./components/ChatRoom"
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'


const App = ({store}) => {
  useEffect(() => {
    console.log(store.getState().messages)
  });
    
    return(
    <>
    <Router>
      <Route exact path="/chatRoom" render={() => <ChatRoom store={store}/>} />
      <Route exact path="/" render={() => <FirstView store={store}/>} />
    </Router>
    </>
    )
}

export default App