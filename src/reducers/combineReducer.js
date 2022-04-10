
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import { nextBtnClIckState,
         passJobs,
         passTopJobs,
         submitBtnClickState,
         userInfo,
         verifyUserInfo,
         getUserInfo,
         passResponse,
         getRotationAngle} from "./reducers";
 
export default combineReducers({
    form:formReducer,
    jobs: passJobs,
    topJobs:passTopJobs,
    isClick:nextBtnClIckState,
    submitClicked:submitBtnClickState,
    user:userInfo,
    myInfo:verifyUserInfo,
    userDetails:getUserInfo,
    response:passResponse,
    rotationAngle:getRotationAngle,
})