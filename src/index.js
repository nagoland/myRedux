import React, {useEffect} from 'react' 
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'react-redux'
// import store from "./store"
import { createStore, combineReducers } from "redux"
import nameReducer from "./reducers/nameReducer"
import messageReducer from "./reducers/messageReducer"




const reducer = combineReducers({
    messages: messageReducer, 
    name: nameReducer
})
const store = createStore(reducer)
console.log(store.getState())

// ReactDOM.render(
    
//         <App store={store}/>,
//     document.getElementById("root")
// )

const renderApp = () => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}
  renderApp()
  store.subscribe(renderApp)

// store.subscribe(() => console.log(store.getState()))