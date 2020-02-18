import firestore from "../config/fireStore"

const db =firestore.collection("messages").doc("content")

const messageReducer = (state=[db], action) => {
    switch(action.type){
        case "ADD_MSG":
            console.log(db)
            return state.concat(action.data)
        default:
            return state
    }
}
const generateId = () =>
  Number((Math.random() * 1000000000).toFixed(0))





export const sending = (name, content) => {
    return {
        type: "ADD_MSG",
        data: {
            name: name,
            content:content,
            id: generateId(),
            date: new Date()
        }
    }
}

export default messageReducer