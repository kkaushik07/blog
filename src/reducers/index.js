import { combineReducers } from "redux"

 const fetchPostReducer = (state=null,action) => {
    if (action.type === 'FETCH_POSTS'){
        return action.payload
    }

   return state
}

export default combineReducers ({
    fetchPost: fetchPostReducer
})