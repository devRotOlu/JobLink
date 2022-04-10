
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
        REMOVE_USER} from './actionType';

import Axios from '../apis/axios';

import TopJobAxios from '../apis/topJobAxios';

import JsonServerAxios from '../apis/jsonServerAxios'

import { randomCountryCode} from '../components/accessories/selectOptions';


export const getSearchTerm= (searchTerm1,searchTerm2)=>{
    
    var countryCode='ng';

   searchTerm2=(searchTerm2==='Rest of Nigeria')? null: searchTerm2

   if (searchTerm2==="Outside of Nigeria") {

        countryCode= randomCountryCode();

        searchTerm2=null ;    
   }


 searchTerm1=(searchTerm1==='All Job Function')? 'science': searchTerm1
    

    return async (dispatch,getState)=>{
    

        const response = await Axios.get('/indeed_jobs',{

            params: {
                    search_query:searchTerm1,
                    page: '1',
                    country_code: countryCode,
                    location:searchTerm2,
            },
        }) 

        dispatch({
            type: JOB_SEARCH_TERM,
            payLoad: response.data.jobs
        })
    }
}



export const getTopJobs=()=>async(dispatch)=>{

    const response=await TopJobAxios.get('/job-board-api')

    dispatch({
        type:TOP_JOBS,
        payLoad: response.data.data
    })

}


export const nextBtnClicked=()=>{

    return{
        type:CLICK_NEXT,
        payLoad: true,
    }
}

export const unClickNextBtnClicked=()=>{

    return{
        type: UNCLICK_NEXT
    }
}

export const submitBtnClicked=()=>{

    return{
        type:CLICK_SUBMIT,
        payLoad:true,
    }
}

export const unClickSubmitBtnClicked=()=>{

    return{
        type: UNCLICK_SUBMIT
    }
}



export const createUser=(formValues)=> async (dispatch,getState)=>{

    const response= await JsonServerAxios.post('/Accounts',formValues);

    dispatch({
        type:CREATE_USER,
        payLoad: response.data
    })

};

export const verifyUser=(path,email,password)=> async (dispatch,getState)=>{

    const response= await JsonServerAxios.get(`/${path}?Email_Address=${email}&Password=${password}`);

    dispatch({
        type:VERIFY_USER,
        payLoad: response.data[0]
    })
    
};

export const removeUser=()=>{

    return{
        type:REMOVE_USER,
    }
}

export const getUser=(path)=> async(dispatch,getState)=>{

     const response= await JsonServerAxios.get(`/${path}`)

    dispatch({
        type:GET_USER,
        payLoad:response.data
    })
}

export const clearUser=()=>{

    return{
        type:CLEAR_USER
    }
}

export const deleteUserInfo=(path,id,userId)=> async (dispatch,getState)=>{
    
    await JsonServerAxios.delete(`/${path}/${id}`).catch(
        error=> error
    )

    dispatch({
        type:DELETE_INFO,
        payLoad: id,
        value:path,
        user:userId
    })
}

export const getResponse= response=>{

    return{
        type: GET_RESPONSE,
        payLoad:response
    }
}

export const rotateProgressBar= angle=>{

    return {
        type:ROTATION_ANGLE,
        payLoad: angle
    }
}

export const clearProgressBar=()=>{

    return {

        type:CLEAR_ANGLE,
        payLoad:0,

    }
}





// export const createUser= formValues=> async (dispatch,getState)=>{

//     const {userId}= getState().auth;

//     const response= await streams.post('/streams', {...formValues,userId});

//     dispatch({
//         type:CREATE_STREAM,
//         payLoad: response.data
//     })

//     // programmatic navigation to get User back to root route

//     history.push('/')
// };