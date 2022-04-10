
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import UserProfileBoard from './userProfileBoard';
import userSubmitFunction from '../HOCs/userSubmitFuntn';
import UserInfoTab from './userInfoTab';
import {formTextArea} from "./formComponents"
import { FlexSectioning,ContainerForUserTab } from './flexSectioning';
import { FormInput,FormSelect,formSelect,FormCheckBox } from './formComponents';
import { submitBtnClicked } from '../../actions/actions';
import { qualificationOption,
        monthOption,
        yearOption } from './selectOptions';
import { userEducatnInfoValidation } from './validate';
import { getUser, unClickNextBtnClicked,unClickSubmitBtnClicked,clearUser} from '../../actions/actions';



class UserEducationInfo extends React.Component{

    constructor(props){

        super(props);

        this.toHide= React.createRef()
    }

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);

        window.scrollTo(0,10);

    };



    toHideDate= e=>{

        if (e.target.value==='false') {

            this.toHide.current.style.display='none'

            return
            
        }

        this.toHide.current.style.display='block'

    }



    componentWillUnmount(){

        this.props.resetProp('userEducation');
        this.props.unClickNextBtnClicked();
        this.props.unClickSubmitBtnClicked();
        this.props.clearUser()
    }

    
    render(){


        const {onSubmit,handleClick,reset,handleSubmit,submitClicked,userId,id,children}= this.props

        return (

            <div className="container-fluid" style={{position:'relative'}}>

                <ContainerForUserTab>

                    <div className="card">

                        <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                            <h5>Add Education</h5>
                            <p className="px-3 pt-3 mb-3">

                                Details of your Education; Institutions and Qualifications are expected here. 

                            </p> 

                        </UserInfoTab>


                        <form onSubmit={handleSubmit(onSubmit)} style={{borderTop:'solid thin grey'}}>

                            <div className='pt-3'>

                                <FlexSectioning >

                                    <div className='col-sm-6'>

                                        <FormInput name='Institution_Name' heading='Name of Educational Institution/School/etc.' id='Institution_Name' type='text' submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4'>

                                        <FormSelect heading='Minimum Qualification' name='Minimum_Qualification' options={qualificationOption} submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <FormInput name='Qualification' heading='Qualification' id='Qualification' type='text' submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4 '>

                                        <label><h5 style={{color:'grey', fontSize:'16px'}}>Start date</h5></label>

                                        <div className="d-flex flex-sm-row flex-column justify-content-sm-start">

                                            <div className='me-sm-4'  style={{minWidth:'45%'}}>


                                                <Field name='Start_Months' options={monthOption} component={formSelect} submitClicked={submitClicked} />

                                            </div>

                                                <div className='mt-sm-0 mt-4' style={{minWidth:'45%'}}>

                                                    <Field name='Start_Years' options={yearOption} component={formSelect} submitClicked={submitClicked} />        

                                                </div>

                                        </div>

                                    </div>


                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-4'>

                                        <FormCheckBox whenClicked={this.toHideDate} name='date_toggle' id='date_toggler' info='I am still studying this'/>

                                    </div>

                                    <div className='col-sm-6 mt-sm-0 mt-4' ref={this.toHide}>

                                        <label><h5 style={{color:'grey', fontSize:'16px'}}>End date</h5></label>

                                        <div className="d-flex flex-sm-row flex-column justify-content-sm-start">

                                            <div className='me-sm-4' style={{minWidth:'45%'}}>


                                                <Field name='End_Months' options={monthOption} component={formSelect} submitClicked={submitClicked} />

                                            </div>

                                            <div className='mt-sm-0 mt-4' style={{minWidth:'45%'}}>

                                                <Field name='End_Years' options={yearOption} component={formSelect} submitClicked={submitClicked} />        

                                            </div>

                                        </div>

                                    </div>

                                </FlexSectioning>

                            </div>

                            <div className='mx-auto pb-3 mt-3' style={{width:'95%'}}>

                                <label htmlFor='about_User'><h5 style={{color:'grey', fontSize:'16px'}}>Description</h5></label>

                                <Field name='about_User' component={formTextArea} rows='15' id='about_User'/>

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

const wrappedForm= reduxForm({
    form: 'userEduInfo',
    validate:userEducatnInfoValidation,
})(UserEducationInfo)

const mapStateToProps= (state,{match:{params},...props})=>{

    let{resetProp,educationProp}= props;

    if (educationProp) {

        var {Minimum_Qualification,End_Months,Start_Months,End_Years}= educationProp
        var {Start_Years, Institution_Name, Qualification}= educationProp
        
    }

    const {submitClicked}= state;

    return {

        initialValues:{
            Minimum_Qualification: Minimum_Qualification || 'Select',
            End_Months: End_Months || 'Select',
            Start_Months: Start_Months || 'Select',
            End_Years: End_Years || 'Select',
            Start_Years: Start_Years || 'Select',
            Institution_Name: Institution_Name || '',
            Qualification:  Qualification || '',
            date_toggle: 'false',
            userId:params.userId,
            AccountId:params.id,
        },

        submitClicked:submitClicked,
        userId:params.userId,
        id:params.id,
        resetProp
    }
}

const wrappedConnect= connect(mapStateToProps,{
    submitBtnClicked, getUser,unClickNextBtnClicked,unClickSubmitBtnClicked,clearUser,
})(wrappedForm)

const wrappedRouter=withRouter(wrappedConnect) 

export default userSubmitFunction(wrappedRouter,'Educations');