import { REQ_POSTS_DATA, RESOLVE_POSTS_DATA, ERROR_POSTS_DATA, REQ_POST_DATA, RESOLVE_POST_DATA, ERROR_POST_DATA } from "../action/postActionType"

const initialState = {
    loading:false,
    error:"",
    posts:[],
    post:{}
}


export const myReducer = (state = initialState, action) =>{
    switch(action.type){
        case REQ_POSTS_DATA:
            return{
               ...state,
               loading:true
            }
        case RESOLVE_POSTS_DATA:
            return{
                ...state,
                loading:false,
                posts:action.payload,

            } 
        
        case ERROR_POSTS_DATA:
            return{
                ...state,
                loading:false,
                posts:[],
                error:action.payload
                
            }   
        
        case REQ_POST_DATA:
            return{
                ...state,
                loading:true
            }    
        
        case RESOLVE_POST_DATA:
            return {
                ...state,
                loading:false,
                posts:[action.payload]
            }    
        case ERROR_POST_DATA:
            return{
                ...state,
                posts:[],
                error:payload.error,
                loading:false
            }   
            
        default:
           return  state;    
    }
}