import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';

import UserInfoTab from './userInfoTab';
import '../app.css'
import {formInput,
        formSelect,
        FormInput,
        FormSelect,
        FormCheckBox,
        FormFileInput} from './formComponents'
import {FlexSectioning} from './flexSectioning'
import {
    stateOption,
    qualificationOption,
    experienceOption,
    availabiltyOption,
    jobFunctionOptions,
    workTypeOption,
    moneyOption} from './selectOptions';
import {submitBtnClicked,createUser} from '../../actions/actions';
import {userPageValidation} from './validate'
import JsonServerAxios from '../../apis/jsonServerAxios'



class UserUpdatePage extends React.Component{

    constructor(props){

        super(props)

        this.picsUpload= React.createRef();

    };

    uploadPics= picsPath=>{

        this.picsUpload.current.firstElementChild.style.display='none'
        this.picsUpload.current.lastElementChild.style.display='block'
        this.picsUpload.current.lastElementChild.firstElementChild.src=`${picsPath}`

    }

    onSubmit= formValues=>{

        JsonServerAxios.patch(`/Users/${this.props.id}`, formValues);
        
    }

    handleClick=()=>{

        this.props.submitBtnClicked()

    } 

    render(){

        const {submitClicked,handleSubmit,userInfo,reset}= this.props


        console.log(this.props,'props'); 

        return (
            <div className="container-fluid d-flex my-4 flex-column flex-sm-row justify-content-sm-around ">

                <div className="card" style={{width:'67%'}}>

                    <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                        <h5>Employment & Availability</h5>
                        <p className="ps-3 pt-3 mb-3">
                            Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.
                        </p> 

                    </UserInfoTab>


                    <div className='d-flex flex-sm-row justify-content-sm-around'style={{borderTop:'solid thin grey', padding:'40px 0'}}>

                        <div ref={this.picsUpload} className='m-auto d-flex justify-content-center align-items-center' style={{width:'180px', height:'180px', backgroundColor:'tomato', borderRadius:'90px',outlineOffset:'-3px', outline:'solid 2px white'}}>

                            <FontAwesomeIcon icon={faUser} size='4x' style={{color:'white'}} />

                            <div className='imageHolder' >

                                <img style={{borderRadius:'90px',outlineOffset:'-3px', outline:'solid 2px white'}} className='profile_image' src='' alt='profile_image'/>
                            
                            </div>


                        </div>

                        <div style={{ marginRight:'2rem', width:'47%',}}>

                            <div style={{backgroundColor:'tomato',borderRadius:'5px', color:'white', width:'100%',cursor:'pointer', position:'relative'}}>

                                <FormFileInput className='backgroundIcon' name='images' id='user_image'  accepted='image/*' heading='UPLOAD PHOTO' uploadPics={this.uploadPics}/>

                            </div>
                            
                            <p className='mt-3'>
                                Upload an image no larger than 5MB for file types .jpg .gif .png .bmp
                            </p>

                        </div>

                        
                    </div>

                    <form onSubmit={handleSubmit(this.onSubmit)} className='pt-5' style={{borderTop:'solid thin grey'}}>

                           <FlexSectioning>

                                <div style={{width:'47%'}}>

                                    
                                    <FormInput name='career_headline' heading='Professional Headline' id='career_headline' type='text'/>

                                </div>

                                <div style={{width:'47%'}}>

                                    <FormSelect name='Highest_Qualification' heading='Highest Qualification' options={qualificationOption} value={userInfo.Highest_Qualification} submitClicked={submitClicked} />

                                </div>

                            </FlexSectioning>

                            <FlexSectioning>

                                <div style={{width:'47%'}}>

                                     <FormSelect heading='Current Job Function' name='Current_Job' options={jobFunctionOptions} submitClicked={submitClicked} value={userInfo.Current_Job}/>

                                </div>

                                <div style={{width:'47%'}}>

                                    <FormSelect heading='Preferred Job Function' name='preferred_Job' options={jobFunctionOptions} submitClicked={submitClicked}/>

                                </div>

                            </FlexSectioning>


                            <FlexSectioning >

                                <div style={{width:'47%'}}>

                                    <FormSelect heading='Location' name='Location' options={stateOption} value={userInfo.Location} submitClicked={submitClicked}/>

                                </div>

                                <div style={{width:'47%'}}>

                                    <FormSelect heading=' Preferred Job Location' name='preferred_Location' options={stateOption} submitClicked={submitClicked}/>

                                </div>

                            </FlexSectioning>

                            <FlexSectioning >

                                <div style={{width:'47%'}}>

                                    <FormSelect heading='Years of Experience' name='Experience' options={experienceOption} submitClicked={submitClicked} value={userInfo.Experience}/>

                                </div>

                                <div style={{width:'47%'}}>

                                    <FormSelect heading='Work Type' name='Work_Type' options={workTypeOption} submitClicked={submitClicked}/>

                                </div>

                            </FlexSectioning>

                            <FlexSectioning >

                                <div style={{width:'47%'}}>

                                    <FormSelect heading='Availability' name='Availability' options={availabiltyOption} submitClicked={submitClicked} value={userInfo.Availability}/>

                                </div>

                                <div style={{width:'47%'}}>

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

                            <div className="px-sm-4">

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

                            <div className='formButtonContainer d-flex flex-sm-row justify-content-between py-4 px-4'style={{width:'100%', borderTop:'solid thin grey'}}>
                                <button className='formButton' onClick={reset} type='reset'>CANCEL</button>
                                <button className='formButton' onClick={this.handleClick} type='submit'>SAVE</button>
                            </div>

                        </form>
                           
                </div>

                <div style={{width:'25%', backgroundColor:'green'}}>                    
                    
                </div>

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


const mapStateToProps= state=>{

    const {myInfo, submitClicked,form:{userUpdate}}= state;


    const {Location,Highest_Qualification,Current_Job,Experience, Availability,id}= myInfo

    var formValues=null

    if (state.form.userUpdate) {

        let {values}=userUpdate

        formValues=values
        
    }

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

        userInfo:myInfo,
        submitClicked:submitClicked,
        formValues: formValues,
        id:id,

    }
}


export default connect(mapStateToProps,{

     submitBtnClicked

})(WrappedForm)


// class PureComp extends React.PureComponent{

// }
