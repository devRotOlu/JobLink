
import {JOB_SEARCH_TERM,
        TOP_JOBS,
        CLICK_NEXT,
        CLICK_SUBMIT,
        CREATE_USER,
        GET_USER} from '../actions/actionType'


export const passJobs=(state=null, action)=>{

    if (action.type===JOB_SEARCH_TERM ) {

        return action.payLoad
        
    }

    return state

}


export const passTopJobs=(state=null, action)=>{

    if (action.type===TOP_JOBS) {

        return action.payLoad
        
    }

    return state

}

export const nextBtnClIckState=(state=false,action)=>{

    if (action.type===CLICK_NEXT) {

        return action.payLoad        
    }

    return state
}

export const submitBtnClickState=(state=false,action)=>{

    if (action.type===CLICK_SUBMIT) {

        return action.payLoad
        
    }

    return state
}


export const userInfo=(state=null,action)=>{

    switch (action.type) {

        case CREATE_USER:
            
           return {...state,[action.payLoad.userId]:action.payLoad}

    
        default:
            return state;
    }
}

export const getUserInfo=(state={}, action)=>{

        if (action.type===GET_USER) {


            return action.payLoad
            
        }

        return state
}