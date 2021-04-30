import { combineReducers } from "redux"


 const fetchPostReducer = (state=null,action) => {
    if (action.type === 'FETCH_POSTS'){
        return action.payload
    }

   return state
}

const fetchUserReducer = (state=[],action) => {
    if (action.type === 'FETCH_USER'){
        return [...state,action.payload]
    }

   return state
}

export default combineReducers ({
    fetchPost: fetchPostReducer,
    Users: fetchUserReducer
})