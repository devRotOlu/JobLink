import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import UserInfoTab from './userInfoTab';
import '../app.css'
import {formInput,
        formSelect,
        FormInput,
        FormSelect,
        FormCheckBox,
        FormFileInput} from './formComponents'
import {FlexSectioning, ContainerForUserTab} from './flexSectioning'
import {
    stateOption,
    qualificationOption,
    experienceOption,
    availabiltyOption,
    jobFunctionOptions,
    workTypeOption,
    moneyOption} from './selectOptions';
import {userPageValidation} from './validate'
import userSubmitFunction from '../HOCs/userSubmitFuntn';
import UserProfileBoard from './userProfileBoard';
import { getUser, clearUser,unClickSubmitBtnClicked } from '../../actions/actions';



class UserUpdatePage extends React.Component{

    constructor(props){

        super(props)

        this.picsUpload= React.createRef();

    };

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);

        window.scrollTo(0,10);

    };

    componentWillUnmount(){

        this.props.clearUser()
        this.props.unClickSubmitBtnClicked()
    }

    uploadPics= picsPath=>{

        this.picsUpload.current.firstElementChild.style.display='none';
        this.picsUpload.current.lastElementChild.style.display='block';
        this.picsUpload.current.lastElementChild.firstElementChild.src=`${picsPath}`;

    };

    render(){


        const {submitClicked,handleSubmit,userDetails,onSubmit,reset,handleClick, userId,id,children}= this.props 

        return (
            <div className="container-fluid" style={{position:'relative'}}>

               <ContainerForUserTab>
                   
                   <div className='card'>

                        <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                            <h5>Employment & Availability</h5>
                            <p className="px-3 pt-3 mb-3 ">
                                Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.
                           </p> 

                        </UserInfoTab>


                        <div className='d-flex flex-lg-row justify-content-lg-around flex-column align-items-center py-5'style={{borderTop:'solid thin grey'}}>

                            <div ref={this.picsUpload} className='m-auto d-flex justify-content-center align-items-center' style={{width:'180px', height:'180px', backgroundColor:'tomato', borderRadius:'90px',outlineOffset:'-3px', outline:'solid 2px white'}}>

                                <FontAwesomeIcon icon={faUser} size='4x' style={{color:'white'}} />

                                <div className='imageHolder' >

                                    <img style={{borderRadius:'90px',outlineOffset:'-3px', outline:'solid 2px white'}} className='profile_image' src='' alt='profile_image'/>
                                
                                </div>


                            </div>

                            <div className='mt-lg-0 mt-4 align-self-center mx-4 flex-grow-0 '
                            style={{minWidth:'47%',}}>

                                <div style={{backgroundColor:'tomato',borderRadius:'5px', color:'white', width:'100%',cursor:'pointer', position:'relative'}}>

                                    <FormFileInput className='backgroundIcon' name='images' id='user_image'  accepted='image/*' heading='UPLOAD PHOTO' uploadPics={this.uploadPics} userId={userId}/>

                                </div>
                                
                                <div></div>
                                <p className='mt-3 d-lg-block d-inline'>
                                    Upload an image no larger than 5MB 
                                </p>
                                <span> for file types .jpg .gif .png .bmp</span>

                            </div>

                            
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className='pt-5' style={{borderTop:'solid thin grey'}}>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        
                                        <FormInput name='career_headline' heading='Professional Headline' id='career_headline' type='text'/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <FormSelect name='Highest_Qualification' heading='Highest Qualification' options={qualificationOption} value={userDetails.Highest_Qualification} submitClicked={submitClicked} />

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Current Job Function' name='Current_Job' options={jobFunctionOptions} submitClicked={submitClicked} value={userDetails.Current_Job}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <FormSelect heading='Preferred Job Function' name='preferred_Job' options={jobFunctionOptions} submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>


                                <FlexSectioning >

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Location' name='Location' options={stateOption} value={userDetails.Location} submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <FormSelect heading=' Preferred Job Location' name='preferred_Location' options={stateOption} submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning >

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Years of Experience' name='Experience' options={experienceOption} submitClicked={submitClicked} value={userDetails.Experience}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <FormSelect heading='Work Type' name='Work_Type' options={workTypeOption} submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning >

                                    <div className='col-sm-6 align-self-sm-end'>

                                        <FormSelect heading='Availability' name='Availability' options={availabiltyOption} submitClicked={submitClicked} value={userDetails.Availability}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <label><h5 style={{color:'grey', fontSize:'16px'}}>Monthly Salary Expectation(Gross)</h5></label>

                                        <div className="d-flex flex-row justify-content-between">

                                            <div style={{width:'35%'}}>


                                                <Field name='Salary_Expectation' options={moneyOption} component={formSelect} />

                                            </div>

                                            <div style={{width:'62%'}}>

                                                <Field name='Salary_Expectation-digit' component={formInput} type='number' />

                                            </div>

                                        </div>

                                    </div>

                                </FlexSectioning>

                                <div className="px-3">

                                    <h5 style={{color:'grey', fontSize:'16px'}}>Preferences</h5>

                                    <div className='mt-3 ms-2'>

                                        <FormCheckBox name='Active_Job_Seeker' id='Job_Seeker' info='I am actively looking for a job'/>

                                    </div>

                                    <div className='mt-3 ms-2'>

                                        <FormCheckBox name='profile_Consent' id='Profile_Consent' info='Display my profile to potential employers'/>
                                    
                                    </div>
                                    
                                    <div className='mt-3 ms-2 pb-3'>

                                        <FormCheckBox name='mobile_Job_Seeker' id='relocation' info='Willing to relocate'/>

                                    </div>

                                </div>

                                <div className='formButtonContainer d-flex flex-column flex-sm-row justify-content-sm-between py-4 px-3'style={{width:'100%', borderTop:'solid thin grey'}}>

                                    <button className='formButton' onClick={reset} type='reset'>CANCEL</button>
                                    <button className='formButton mt-sm-0 mt-4' onClick={handleClick} type='submit'>SAVE</button>

                                </div>


                        </form>
                           
                    </div>             

                    <UserProfileBoard userId={userId} id={id}/>
            

                </ContainerForUserTab>

                    {children}
               
            </div>
        )
    }
}

const WrappedForm= reduxForm(
    {
        form:'userUpdate',
        validate:userPageValidation,
    }
) (UserUpdatePage);


const mapStateToProps= (state,{match:{params}})=>{

    var {userDetails, submitClicked}= state;

    userDetails=(!userDetails[params.id])? userDetails: userDetails[params.id];

    const {Location,Highest_Qualification,Current_Job,Experience, Availability}= userDetails;

    return {

        initialValues:{
            preferred_Location: 'Select',
            Work_Type:'Select',
            preferred_Job: 'Select',
            Location,
            Highest_Qualification,
            Current_Job,
            Experience,
            Availability,
            Active_Job_Seeker:false,
            profile_Consent:false,
            mobile_Job_Seeker:false,
        },

        userDetails,
        submitClicked:submitClicked,
        userId:params.userId,
        id: params.id,
    }
}

const wrappedConnect= connect(mapStateToProps,{
    getUser,clearUser,unClickSubmitBtnClicked
})(WrappedForm);

const wrappedRouter=withRouter(wrappedConnect);

export default userSubmitFunction(wrappedRouter,'Accounts');



