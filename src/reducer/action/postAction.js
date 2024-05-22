import { REQ_POSTS_DATA, RESOLVE_POSTS_DATA, ERROR_POSTS_DATA, REQ_POST_DATA, RESOLVE_POST_DATA, ERROR_POST_DATA } from "./postActionType";
import axios from "axios";
const apiURL = "https://jsonplaceholder.typicode.com/posts";



//multi posts>>>>>>>>>>>>>>>>>>>>>>>>>
const reqPostsAction = () =>{
    return {
        type:REQ_POSTS_DATA
    }
}

const resolvePostsAction = (posts) =>{
    return {
        type:RESOLVE_POSTS_DATA,
        payload:posts
    }
}

const errorPostsAction = (error) =>{
    return {
        type:ERROR_POSTS_DATA,
        payload:error
    }
}

export const fetchPostsAction = () =>{
    return async (dispatch)=>{
        dispatch(reqPostsAction())
        try {
           const res =  await axios(apiURL)
           dispatch(resolvePostsAction(res.data))
        } catch (error) {
            dispatch(errorPostsAction(error))
        }
    }
}


//signle post>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const reqPostAction = () =>{
    return {
        type:REQ_POST_DATA
    }
}

const resolvePostAction = (posts) =>{
    return {
        type:RESOLVE_POST_DATA,
        payload:posts
    }
}

const errorPostAction = (error) =>{
    return {
        type:ERROR_POST_DATA,
        payload:error
    }
}

export const fetchPostAction = (id) =>{
    return async (dispatch)=>{
        dispatch(reqPostAction())
        try {
           const res =  await axios(`${apiURL}/${id}`)
           dispatch(resolvePostAction(res.data))
        } catch (error) {
            dispatch(errorPostAction(error))
        }
    }
}

