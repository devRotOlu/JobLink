
import React from 'react';
import { reduxForm,Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import userSubmitFunction from '../HOCs/userSubmitFuntn';
import UserProfileBoard from './userProfileBoard';
import UserInfoTab from './userInfoTab';
import { FlexSectioning,ContainerForUserTab } from './flexSectioning';
import { FormSelect,
         FormInput,
         FormCheckBox,
         formSelect,
        formTextArea} from './formComponents';
import {jobLevelOption,
        countriesOption,
        salaryoptions,
        jobFunctionOptions,
        workTypeOption,
        monthOption,
        yearOption} from './selectOptions';
import {userWorkInfoValidation}  from './validate';
import { getUser,unClickNextBtnClicked, unClickSubmitBtnClicked,clearUser} from '../../actions/actions';



class UserWorkInfo extends React.Component{

    constructor(props){

        super(props);

        this.toHide= React.createRef()
    }

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);

        window.scrollTo(0,10);

    };


    toHidedate= e=>{

        if (e.target.value==='false') {

            this.toHide.current.style.display='none'

            return
            
        }

        this.toHide.current.style.display='block'

    }


    componentWillUnmount(){

        this.props.resetProp('userWorkInfo');
        this.props.unClickNextBtnClicked();
        this.props.unClickSubmitBtnClicked();
        this.props.clearUser()

    }

    render(){

        const {onSubmit,handleClick,reset,handleSubmit,submitClicked,userId,id,children}= this.props

        return( 

            <div className="container-fluid">

                <ContainerForUserTab>  

                    <div className="card">

                        <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                            <h5>Add Work Experience</h5>
                            <p className="px-3 pt-3 mb-3">

                                Information on work experience is required here  

                            </p> 

                        </UserInfoTab>


                        <form onSubmit={handleSubmit(onSubmit)} style={{borderTop:'solid thin grey'}}>

                            <div className='pt-3'>

                                <FlexSectioning >

                                    <div className='col-sm-6'>

                                        <FormInput name='Employer_Name' heading='Employer' id='Employer_Name' type='text' submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-4 mt-sm-0'>

                                        <FormInput name='Job_Title' heading='Job_Title' id='Job_Title' type='text' submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Job Level' name='Job_Level' options={jobLevelOption} submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-4 mt-sm-0'>

                                        <FormSelect heading='Country' name='Country' options={countriesOption} submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Monthly Salary' name='Monthly_Salary' options={salaryoptions} submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-4 mt-sm-0'>

                                        <FormSelect heading='Work Type' name='Work_Type' options={workTypeOption}   
                                        submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>


                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <FormSelect heading='Job Function' name='Job_Function' options={jobFunctionOptions} submitClicked={submitClicked}/>

                                    </div>

                                    <div className='col-sm-6 mt-4 mt-sm-0'>

                                        <FormInput name='City' heading='City' id='City' type='text' submitClicked={submitClicked}/>

                                    </div>

                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='col-sm-6'>

                                        <label><h5 style={{color:'grey', fontSize:'16px'}}>Start date</h5></label>

                                        <div className="d-flex flex-sm-row flex-column justify-content-sm-start">

                                            <div className='me-sm-4' style={{minWidth:'45%'}}>


                                                <Field name='Start_Months' options={monthOption} component={formSelect} submitClicked={submitClicked} />

                                            </div>

                                                <div className='mt-4 mt-sm-0'  style={{minWidth:'45%'}}>

                                                    <Field name='Start_Years' options={yearOption} component={formSelect} submitClicked={submitClicked} />        

                                                </div>

                                        </div>

                                    </div>

                                    <div ref={this.toHide} className='col-sm-6 mt-4 mt-sm-0'>

                                        <label><h5 style={{color:'grey', fontSize:'16px'}}>End date</h5></label>

                                        <div className="d-flex flex-sm-row flex-column justify-content-End">

                                            <div className='me-0 me-sm-4' style={{minWidth:'45%'}}>


                                                <Field name='End_Months' options={monthOption} component={formSelect} submitClicked={submitClicked} />

                                            </div>

                                                <div className='mt-4 mt-sm-0' style={{minWidth:'45%'}}>

                                                    <Field name='End_Years' options={yearOption} component={formSelect} submitClicked={submitClicked} />        

                                                </div>

                                        </div>

                                    </div>



                                </FlexSectioning>

                                <FlexSectioning>

                                    <div className='d-flex flex-start' style={{width:'100'}}>

                                        <FormCheckBox whenClicked={this.toHidedate} name='date_toogle' id='date_toogle' info='I am still studying this' />

                                    </div>

                                </FlexSectioning>

                            </div>

                            <div className='mx-auto pb-3 mt-3' style={{width:'95%'}}>

                                <label htmlFor='job_duties'><h5 style={{color:'grey', fontSize:'16px'}}>Job Responsibilities</h5></label>

                                <Field name='job duties' component={formTextArea} rows='15' id='job_duties'/>

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

const wrappedForm=reduxForm({
    form:'userWorkInfo',
    validate:userWorkInfoValidation,
})(UserWorkInfo);

const mapStateToProps=(state,{match:{params},...props})=>{

    let {resetProp,experienceProp}= props;

    if (experienceProp) {

        var {Job_Level,Country,Start_Months,End_Months,Employer_Name,Monthly_Salary}= experienceProp
        var {Start_Years,  Work_Type,  Job_Function, End_Years,Job_Title,City}= experienceProp
        
    }

    const {submitClicked}= state;

    return {

        initialValues:{
            Job_Level: Job_Level || 'Select',
            Country: Country ||  'Select',
            Work_Type: Work_Type || 'Select',
            Job_Function: Job_Function || 'Select',
            Start_Months: Start_Months || 'Month',
            Start_Years: Start_Years || 'Year',
            End_Months: End_Months || 'Month',
            End_Years: End_Years || 'Year',
            City: City || '',
            Monthly_Salary: Monthly_Salary || '',
            Employer_Name: Employer_Name || '',
            Job_Title: Job_Title ||'',
            date_toogle:'false',
            AccountId:params.id,
            userId:params.userId,
        },

        submitClicked,
        userId: params.userId,
        id:params.id,
        resetProp
    }
}

const wrappedConnect= connect(mapStateToProps,{

    getUser,unClickNextBtnClicked, unClickSubmitBtnClicked,clearUser
    
})(wrappedForm);

const wrappedRouter=withRouter(wrappedConnect)

export default userSubmitFunction(wrappedRouter,'Experiences');