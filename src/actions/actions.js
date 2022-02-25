
import {JOB_SEARCH_TERM,
        TOP_JOBS,
        CLICK_NEXT, 
        CLICK_SUBMIT,
        CREATE_USER,
        GET_USER} from './actionType';

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

//    if (searchTerm1==='All Job Function') {

//     searchTerm1=randomJobFunction()
       
//    }

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

export const submitBtnClicked=()=>{

    return{
        type:CLICK_SUBMIT,
        payLoad:true,
    }
}


export const createUser=(formValues)=> async (dispatch,getState)=>{

    const response= await JsonServerAxios.post('/Users',formValues);

    dispatch({
        type:CREATE_USER,
        payLoad: response.data
    })

};

export const getUser=(email,password)=> async (dispatch,getState)=>{

    const response= await JsonServerAxios.get(`/Users?Email_Address=${email}&Password=${password}`);


    dispatch({
        type:GET_USER,
        payLoad: response.data[0]
    })
    
};




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