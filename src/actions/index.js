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