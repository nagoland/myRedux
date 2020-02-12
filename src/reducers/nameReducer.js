const initialState = [{
    name: "wataru",
    id: 1234
}]
const nameReducer = (state = [] , action) => {
    switch(action.type){
        case "JOIN" :
        return state = {name: action.name, id: action.id}
        default:
            return state
    }
}
const generateId = () =>
  Number((Math.random() * 1000000000).toFixed(0))
export const naming = (name) => {
    return {
        type:"JOIN",
        name,
        id: generateId()
    }
}

export default nameReducer