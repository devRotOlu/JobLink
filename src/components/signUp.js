
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {Link } from "react-router-dom";
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';


import {nextBtnClicked, submitBtnClicked,createUser} from '../actions/actions';
import {formFileInput,
        formInput,
        formSelect,
        FormSelect,
        FormInput,
        FormFileInput} from './accessories/formComponents';


import {daysOption,
        monthOption,
        yearOption,
        nationalityOption,
        genderOption,
        stateOption,
        countryCodeOption,
        qualificationOption,
        experienceOption,
        availabiltyOption,
        jobFunctionOptions} from './accessories/selectOptions';
import{ FlexSectioning} from './accessories/flexSectioning';
import {userSignUpValidation} from './accessories/validate'


 
class Signup extends React.Component{

    constructor(props){

        super(props)

        this.secondFormSection= React.createRef();

    };

    handleSubmitClick=()=>{

        if (this.errors) {

            this.props.submitBtnClicked()
        }

    }


    
    onSubmit=(formValues,dispatch,props)=>{

        var {First_Name,Last_Name,Birth_Date}= formValues


        const userId= First_Name.slice(0,2).concat(Last_Name.slice(0,2),Birth_Date)

        this.props.createUser({...formValues,userId})

        // // formValues.append('file',this.files)
        // console.log(formValues,'formValues')
        // // this.props.submitBtnClicked()
        // // let formData = new FormData(this.files);
        // // console.log(formData,'formData')
        // // formData.append("name", formValues.image.name);
        // // formData.append("image", formValues.image);
        // // const config = {
        // //   headers: { "content-type": "multipart/form-data" }
        // // };
        // // const url = "API_URL";
        // // post(url, formData, config)
        // //   .then(function(response) {
        // //     console.log("FILE UPLOADED SUCCESSFULLY");
        // //   })
        // //   .catch(function(error) {
        // //     console.log("ERROR WHILE UPLOADING FILE");
        // //   });

        // // console.log(formData,'formData')

    }

    handleClick=()=>{

        let {formValues}=this.props;

        this.errors=this.props.validate(formValues);

        if (Object.keys(this.errors).length<6) {

            window.scrollTo(0,700);

            this.secondFormSection.current.style.opacity='1';

            this.secondFormSection.current.style.pointerEvents= 'visible';

            return;
            
        }

        this.props.nextBtnClicked();

    }
 
    render() {


        const {isClick, handleSubmit, submitClicked}= this.props;


        
        return (
            <div className='conatiner-fluid d-flex flex-column align-items-center'>

                <div  className='mt-3 d-flex flex-column justify-content-center'>
                    <h3 className='mt-3'>Create an Account</h3>
                    <h4 className='m-auto'>STEP 1 of 2</h4>
                </div>

                <form  style={{width:'95%'}} onSubmit={handleSubmit(this.onSubmit)}> 

                    <div className='card d-flex flex-column  my-4'>

                        <div className='d-flex flex-sm-row flex-column justify-content-sm-around  align-items-center align-items-sm-start  pt-4'>

                            <div className='flex-sm-grow-0 flex-grow-1 w-25' >
                                
                                <h4>PERSONAL INFORMATION</h4>

                                <p>
                                    Information required here are those partaining to you as an individual
                                </p>

                            </div>

                            <div className='flex-sm-grow-0 flex-grow-1 mt-4 mt-sm-0' style={{width:'70%'}}>

                                <div className='d-flex flex-column' 
                                style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>

                                    <FlexSectioning>  

                                        <div className='flex-sm-grow-0 flex-grow-1 mb-sm-0 mb-3' style={{width:'45%'}}>

                                            <Field nextBtnClicked={isClick} name='First_Name' component={formInput} type='text' holder='First Name' />

                                        </div>
                                        <div className='flex-sm-grow-0 flex-grow-1' style={{width:'45%',}}>

                                            <Field name='Last_Name' component={formInput} type='text' holder='Last Name'/>

                                        </div>
                                        
                                    </FlexSectioning>

                                    
                                    <FlexSectioning>  

                                        <div className='flex-sm-grow-0 flex-grow-1 mb-sm-0 mb-3' style={{width:'45%'}}>
                                            <Field nextBtnClicked={isClick} name='Email_Address' component={formInput} type='text' holder='Email Address'/>
                                        </div>

                                        <div className='flex-sm-grow-0 flex-grow-1' style={{width:'45%'}}>

                                            <div>

                                                <Field nextBtnClicked={isClick} name='Password' component={formInput} type='password' holder='Create Password'/>
                                            
                                            </div>

                                            <p style={{fontSize:'13px', color:'grey'}}>Minimum 6 Characters</p>

                                        </div>

                                    </FlexSectioning>  
                                    
                                </div>

                                
                                <div className='d-flex flex-column pt-4' style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>

                                        <h5 className='ms-4'style={{color:'grey', fontSize:'16px'}}>Date of birth</h5>

                                    <FlexSectioning>  

                                        <div className='mb-sm-0 mb-3' style={{width:'30%'}} >
                                            <Field nextBtnClicked={isClick} name='Birth_Date' component={formSelect} options={daysOption} />
                                        </div>

                                        <div className='mb-sm-0 mb-3' style={{width:'30%'}}>
                                            <Field nextBtnClicked={isClick} name='Birth_Month' component={formSelect} options={monthOption}/>
                                        </div>

                                        <div style={{width:'30%'}} >
                                            <Field nextBtnClicked={isClick} name='Birth_Year' component={formSelect} options={yearOption}/>
                                        </div>
                                
                                    </FlexSectioning>  

                                    <FlexSectioning>  

                                        
                                        <div className='flex-sm-grow-0 flex-grow-1 mb-sm-0 mb-3'style={{width:'30%'}}>
                            
                                            <FormSelect heading='Gender' name='Gender' options={genderOption}/>

                                        </div>

                                        <div className='flex-sm-grow-0 flex-grow-1 mb-sm-0 mb-3'style={{width:'30%'}}>
                                            
                                            <FormSelect heading='Nationality' name='Nationality' options={nationalityOption}/>

                                        </div>

                                        <div  style={{width:'30%'}}>
                                        
                                            <FormSelect heading='Location' name='Location' options={stateOption}/>

                                        </div>

                                    </FlexSectioning>  
                
                                    
                                </div>

                                
                                <div className='d-flex flex-sm-row flex-column justify-content-between py-4 px-sm-4' style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>

                                    <div className='flex-sm-grow-0 flex-grow-1 mb-sm-0 mb-3' style={{width:'45%'}}>
                                    
                                        <FormSelect heading='Country Code' name='Country_Code' options={countryCodeOption}/>

                                    </div> 

                                    <div style={{width:'45%'}}>

                                         <FormInput nextBtnClicked={isClick} heading=" Mobile Number" name='Mobile_Number' type='number' id='Mobile_Number'/>
                                         
                                    </div>
                                    
                                </div>

                                <div className='my-4 ms-auto' style={{width:'fit-Content'}}>

                                    <span onClick={this.handleClick} style={{display:'flex', height:'50px', width:'150px', border:'solid thin grey', borderRadius:'5px', cursor:'pointer'}}>

                                        <span style={{width:'60%', backgroundColor:'black', color:'white', height:'100%', lineHeight:'50px', fontSize:'22px', textAlign:'center'}}>NEXT</span>
                                        <span style={{display:'inline-flex', width:'40%', height:'100%', alignItems:'center', justifyContent:'center'}}>
                                            <FontAwesomeIcon icon={faArrowDown}  size='2x'/>
                                        </span>

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='d-flex justify-content-center' style={{marginBottom:'70px'}}><h4>STEP 2 of 2</h4></div>
                        

                    <div ref={this.secondFormSection} className='formSecondSectn card d-flex flex-sm-row flex-column mb-5' style={{cursor:'pointer'}}>

                        <div className='d-flex flex-sm-row flex-column justify-content-sm-around  align-items-center align-items-sm-start  pt-4' style={{width:'100%'}}>

                            <div style={{width:'25%'}}>

                                <h4>
                                    Work Information
                                </h4>
                                <p>
                                    Information required here is your past work experience and your qualifications
                                </p>

                            </div>

                            <div className='flex-sm-grow-0 flex-grow-1 mt-4 mt-sm-0' style={{width:'70%'}}>

                                <div className='d-flex flex-column' 
                                style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>                              
                                        <FlexSectioning>

                                            <div className='flex-sm-grow-0 flex-grow-1  mb-sm-0 mb-3' style={{width:'45%'}}> 
                                            
                                                <FormSelect heading='Highest Qualification' name='Highest_Qualification' options={qualificationOption} submitClicked={submitClicked}/>

                                            </div>

                                            <div className='flex-sm-grow-0 flex-grow-1 ' style={{width:'45%'}}>

                                                <FormSelect heading='Current Job Function' name='Current_Job' options={jobFunctionOptions} submitClicked={submitClicked}/>

                                            </div>

                                        </FlexSectioning>

                                        <FlexSectioning>


                                            <div className='flex-sm-grow-0 flex-grow-1  mb-sm-0 mb-3' style={{width:'45%'}}>

                                                <FormSelect heading='Years of Experience' name='Experience' options={experienceOption} submitClicked={submitClicked}/>

                                            </div>

                                            <div className='flex-sm-grow-0 flex-grow-1' style={{width:'45%'}}>

                                                <FormSelect heading='Availability' name='Availability' options={availabiltyOption} submitClicked={submitClicked}/>
                                                
                                            </div>


                                        </FlexSectioning>                                   

                                </div>

                                <div className='py-4 ps-3' style={{borderBottom:'solid thin grey'}}>
                                    
                                    <div style={{height:'40px', paddingLeft:'10px', boxSizing:'borderBox',cursor:'pointer'}}>

                                       <FormFileInput name='Files' submitClicked={submitClicked} id='user_file' heading='UPLOAD FILE' accepted='.doc,..docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' />
                                    
                                    </div>

                                    <p className='mt-3'>Upload a CV not more than 10MB. Files should be Pdf, doc, docx, rtf.</p>

                                </div>
                                
                                <div className='py-4 ps-3' style={{borderBottom:'solid thin grey'}}>

                                    <p > By clicking "Create Your Account", you agree to our Terms & Conditions and Privacy Policy</p>

                                    <span>Already have an account?</span>

                                    <div className='d-inline ms-2'>
                                        <Link to='/' style={{color:'turquoise'}}>
                                          Login
                                        </Link>
                                    </div>

                                </div>

                                <div className='my-4' style={{width:'fit-content', marginLeft:'auto'}} >
                                    <button onClick={this.handleSubmitClick} className='p-3 bg-dark text-light' style={{borderRadius:'5px'}}>CREATE YOUR ACCOUNT</button>
                                </div>

                            </div>


                        </div>

                    </div>

                </form>
            </div>
 
        );
 
    }
}
 
const wrappedForm=reduxForm({
    form: 'accountForm', 
    validate:userSignUpValidation,  
})(Signup);

const mapSateToProps= state=>{
    
    var formValues=null

    if (state.form.accountForm) {

        let {values}=state.form.accountForm

        formValues=values
        
    }



    return{
        initialValues:{
            Birth_Date: 'Day',
            Birth_Month: 'Month',
            Birth_Year: 'Year',
            Gender: 'Male',
            Nationality: 'Select',
            Location:'Select',
            Country_Code: 'Select',
            Highest_Qualification: 'Select',
            Current_Job:'Select',
            Experience: 'Select',
            Availability:'Select',
            Files:null,
        },

        isClick:state.isClick,
        submitClicked:state.submitClicked,
        formValues: formValues,
    }
}

export default connect(mapSateToProps,{
    nextBtnClicked, submitBtnClicked,createUser
})(wrappedForm)


//style={{pointerEvents: 'none', opacity:'0.7'}}

