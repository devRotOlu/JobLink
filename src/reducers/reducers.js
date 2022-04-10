import _ from 'lodash';

import {JOB_SEARCH_TERM,
        TOP_JOBS,
        CLICK_NEXT,
        CLICK_SUBMIT,
        CREATE_USER,
        GET_USER,
        VERIFY_USER,
        GET_RESPONSE,
        DELETE_INFO,
        ROTATION_ANGLE,
        CLEAR_ANGLE,
        UNCLICK_SUBMIT,
        UNCLICK_NEXT,
        CLEAR_USER,
        REMOVE_USER} from '../actions/actionType'


export const passJobs=(state=null, action)=>{

    if (action.type===JOB_SEARCH_TERM ) {

        return action.payLoad
        
    }

    return state

}


export const passTopJobs=(state=[], action)=>{

    if (action.type===TOP_JOBS) {

        return action.payLoad
        
    }

    return state

}


export const nextBtnClIckState=(state=null,action)=>{

    switch (action.type) {

        case CLICK_NEXT:
            
            return {...state,'click':action.payLoad};

        case UNCLICK_NEXT:

            return null
    
        default:
            
            return state;
    }

}


export const submitBtnClickState=(state=null,action)=>{

    switch (action.type) {

        case CLICK_SUBMIT:
            
            return {...state,'submit':action.payLoad};
        
        case UNCLICK_SUBMIT:

            return null
    
        default:

            return state;
    }

    
}


export const userInfo=(state=null,action)=>{

    switch (action.type) {

        case CREATE_USER:
            
           return {...state,[action.payLoad.userId]:action.payLoad}

    
        default:

            return state;
    }
}


export const verifyUserInfo=(state={}, action)=>{


        switch (action.type) {

            case REMOVE_USER:
                
                return {}

            case VERIFY_USER:

                return {...action.payLoad}
        
            default:

                return state;
        }
}


export const getUserInfo=(state={},action)=>{

    switch (action.type) {

        case GET_USER:

            return  {...state,[action.payLoad.id]:action.payLoad}

        case DELETE_INFO:
            
            return (Object.keys(state).length)? {...(state[action.user]),[action.value]:_.omit(state[action.user][action.value],action.payLoad)}:state;

        case CLEAR_USER:

            return {}
    
        default:

            return state;
    }
  
}


export const passResponse=(state=null,action)=>{

    if (action.type===GET_RESPONSE) {

        return action.payLoad
        
    }

    return state
}


export const getRotationAngle=(state=0,action)=>{
    
    switch (action.type) {

        case CLEAR_ANGLE:
            
            return action.payLoad;

        case ROTATION_ANGLE:

            return action.payLoad + state;
    
        default:

            return state;
    }

}