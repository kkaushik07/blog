import _ from "lodash"

import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPost = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({
            type: "FETCH_POSTS",
            payload: response
        })
    }
}

export const fetchUser = (id) => (dispatch, getState) => _fetchUser(id,dispatch)

const _fetchUser = _.memoize(async (id,dispatch)=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`)

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})