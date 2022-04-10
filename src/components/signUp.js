
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {Link } from "react-router-dom";
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';


import {nextBtnClicked, 
        submitBtnClicked,
        createUser,
        getResponse,
        unClickNextBtnClicked,
        unClickSubmitBtnClicked} from '../actions/actions';

import {
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
import jsonServerAxios from '../apis/jsonServerAxios';


 
class Signup extends React.Component{

    constructor(props){

        super(props)

        this.secondFormSection= React.createRef();
        this.loginError=React.createRef();
    };

    handleSubmitClick=()=>{

        if (this.errors) {

               this.props.submitBtnClicked()
        }
    }

    componentWillUnmount(){

        this.props.unClickNextBtnClicked();
        this.props.unClickSubmitBtnClicked();
    }

    // componentDidMount(){
    //     console.log(this.secondFormSection.current.getBoundingClientRect().height)

    // }

    
    onSubmit=(formValues,dispatch,props)=>{

        var {First_Name,Last_Name,Birth_Date}= formValues;

        const formEmail= formValues.Email_Address;

        var emailServerValidation;

        this.loginError.current.classList.remove('animate');

        clearInterval(this.runAnimation);

        jsonServerAxios.get(`/Accounts`).then(

            response=> {

                emailServerValidation= response.data.some(object=>object.Email_Address===formEmail);

                if (!emailServerValidation) {

                    const userId= First_Name.slice(0,2).concat(Last_Name.slice(0,2),Birth_Date);
                  
                    this.props.getResponse('Sucessful Registration!');

                    this.props.createUser({...formValues,userId});

                    this.loginError.current.classList.add('animate');
                 
                    setTimeout(() => {

                        this.loginError.current.style.animationPlayState = 'paused';

                        this.runAnimation=setInterval(() => {

                            this.loginError.current.style.animationPlayState = 'running'
                            
                        }, 10000);
                            
                    }, 1900); 

                    this.props.history.replace('/signin')
                                               
                            
                }else{
        
                    this.props.getResponse('This Email has been Registered. Failed Registration!')

                    this.loginError.current.classList.add('animate')
        
                    setTimeout(() => {

                        this.loginError.current.style.animationPlayState = 'paused';

                        this.runAnimation=setInterval(() => {

                            this.loginError.current.style.animationPlayState = 'running'
                            
                        }, 10000);
                            
                    }, 1900);                 
        
                }
        

            }
        )

        

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

    handleDismissClick=()=> this.loginError.current.style.animationPlayState = 'running';

       



    handleClick=()=>{

        let {formValues}=this.props;

        this.errors=this.props.validate(formValues);

        if (Object.keys(this.errors).length<6) {
            
            const scrollPosition= this.secondFormSection.current.getBoundingClientRect().height + 300

            window.scrollTo(0,scrollPosition );

            this.secondFormSection.current.style.opacity='1';

            this.secondFormSection.current.style.pointerEvents= 'visible';

            return;
            
        }

        this.props.nextBtnClicked();

    }

    render() {


        const {isClick, handleSubmit, submitClicked,response}= this.props;

        
        return (

            <div className='conatiner-fluid d-flex flex-column align-items-center' style={{position:'relative'}}>

                <div  className='mt-3 d-flex flex-column justify-content-center'>
                    <h3 className='mt-3'>Create an Account</h3>
                    <h4 className='m-auto'>STEP 1 of 2</h4>
                </div>

                <form  style={{width:'95%'}} onSubmit={handleSubmit(this.onSubmit)}> 

                    <div className='card d-flex flex-column mt-4 mb-2 px-0'>

                        <div className='row  pt-4 justify-content-center justify-content-sm-around mx-auto' style={{width:'100%'}}>

                            <div className='col-sm-3 col-12' >
                                
                                <h4>PERSONAL INFORMATION</h4>

                                <p >
                                    Information required here are those partaining to you as an individual 
                                </p>
                        

                            </div>

                            <div className='col-sm-8 col-12 col-12 mt-sm-0 mt-4 px-0'>

                                <div className='d-flex flex-column' 
                                style={{borderBottom:'solid grey thin'}}>

                                    <FlexSectioning>  

                                        <div className='col-sm-6 mb-sm-0 mb-4' >

                                            <Field nextBtnClicked={isClick} name='First_Name' component={formInput} type='text' holder='First Name' />

                                        </div>

                                        <div className='col-sm-6'>

                                            <Field name='Last_Name' component={formInput} type='text' holder='Last Name'/>

                                        </div>
                                        
                                    </FlexSectioning>

                                    
                                    <FlexSectioning>  

                                        <div className='col-sm-6 mb-sm-0 mb-4'>
                                            <Field nextBtnClicked={isClick} name='Email_Address' component={formInput} type='text' holder='Email Address'/>
                                        </div>

                                        <div className='col-sm-6'>

                                            <div>

                                                <Field nextBtnClicked={isClick} name='Password' component={formInput} type='password' holder='Create Password'/>
                                            
                                            </div>

                                            <p style={{fontSize:'13px', color:'grey'}}>Minimum 6 Characters</p>

                                        </div>

                                    </FlexSectioning>  
                                    
                                </div>

                                
                                <div className='d-flex flex-column' style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>

                                        <h5 className='mt-4'style={{color:'grey', fontSize:'16px', paddingLeft:'11px'}}>Date of birth</h5>

                                    <FlexSectioning>  

                                        <div className='col-sm-4 mb-sm-0 mb-3 '>
                                            <Field nextBtnClicked={isClick} name='Birth_Date' component={formSelect} options={daysOption} />
                                        </div>

                                        <div className='col-sm-4 mb-sm-0 mb-3 '>
                                            <Field nextBtnClicked={isClick} name='Birth_Month' component={formSelect} options={monthOption}/>
                                        </div>

                                        <div className='col-sm-4'>
                                            <Field nextBtnClicked={isClick} name='Birth_Year' component={formSelect} options={yearOption}/>
                                        </div>
                                
                                    </FlexSectioning>  

                                    <FlexSectioning>  

                                        
                                        <div className='col-sm-4 mb-sm-0 mb-3 '>
                            
                                            <FormSelect heading='Gender' name='Gender' options={genderOption}/>

                                        </div>

                            
                                        <div className='col-sm-4 mb-sm-0 mb-3' >

                                            <FormSelect heading='Nationality' name='Nationality' options={nationalityOption}/>

                                        </div>

                                        <div className='col-sm-4'  >
                                        
                                            <FormSelect heading='Location' name='Location' options={stateOption}/>

                                        </div>

                                    </FlexSectioning>  
                
                                    
                                </div>

                                
                                <div className='d-flex flex-sm-row flex-column justify-content-between pt-4' style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>

                                    <FlexSectioning> 
                                    
                                        <div className='col-sm-6 col-12 mb-sm-0 mb-3'>
                                        
                                            <FormSelect heading='Country Code' name='Country_Code' options={countryCodeOption}/>

                                        </div> 

                                        <div className='col-sm-6 col-12'>

                                            <FormInput nextBtnClicked={isClick} heading=" Mobile Number" name='Mobile_Number' type='number' id='Mobile_Number'/>
                                            
                                        </div>

                                    </FlexSectioning>
                                    
                                </div>

                                <div className='d-flex justify-content-sm-end my-4 px-sm-0 p-3' style={{width:'100%'}}>

                                    <div className='flex-sm-grow-0 flex-grow-1 mx-sm-3 d-flex flex-row  justify-content-stretch align-items-center' onClick={this.handleClick} style={{display:'flex', height:'50px', border:'solid thin grey', borderRadius:'5px', cursor:'pointer', minWidth:'130px'}}>

                                        <span  style={{backgroundColor:'black', color:'white',fontSize:'22px',width:'55%',height:'100%', lineHeight:'50px', textAlign:'center'}}>NEXT</span>
                                        <span className='bg-light d-block d-flex justify-content-center align-items-center ' style={{width:'45%',height:'100%',borderRadius:'5px'}} >
                                            <FontAwesomeIcon icon={faArrowDown}  size='2x'/>
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='d-flex justify-content-center' style={{marginBottom:'70px'}}><h4>STEP 2 of 2</h4></div>
                        

                    <div ref={this.secondFormSection} className='formSecondSectn card d-flex flex-sm-row flex-column mb-5' style={{cursor:'pointer'}}>

                        <div className='row pt-4 justify-content-sm-around mx-auto px-0' style={{width:'100%'}}>

                            <div className='col-sm-3 col-12'>

                                <h4>
                                    Work Information
                                </h4>
                                <p className='d-sm-block d-inline'>
                                    Information required here is your past work experience and your qualifications  
                                </p>
                                

                            </div>

                            <div className='col-sm-8 col-12 mt-4 mt-sm-0 px-0'>

                                <div className='d-flex flex-column' 
                                style={{ boxSizing:'borderBox', borderBottom:'solid grey thin'}}>                              
                                        <FlexSectioning>

                                            <div className='col-sm-6 col-12 mb-sm-0 mb-3' > 
                                            
                                                <FormSelect heading='Highest Qualification' name='Highest_Qualification' options={qualificationOption} submitClicked={submitClicked}/>

                                            </div>

                                            <div className='col-sm-6 col-12'>

                                                <FormSelect heading='Current Job Function' name='Current_Job' options={jobFunctionOptions} submitClicked={submitClicked}/>

                                            </div>

                                        </FlexSectioning>

                                        <FlexSectioning>


                                            <div className='col-sm-6 col-12 mb-sm-0 mb-3'>

                                                <FormSelect heading='Years of Experience' name='Experience' options={experienceOption} submitClicked={submitClicked}/>

                                            </div>

                                            <div className='col-sm-6 col-12'>

                                                <FormSelect heading='Availability' name='Availability' options={availabiltyOption} submitClicked={submitClicked}/>
                                                
                                            </div>


                                        </FlexSectioning>                                   

                                </div>

                                <div className='py-4 px-3 mx-auto' style={{borderBottom:'solid thin grey'}}>
                                    
                                    <div style={{height:'40px', paddingLeft:'10px', boxSizing:'borderBox',cursor:'pointer'}}>

                                       <FormFileInput name='Files' submitClicked={submitClicked} id='user_file' heading='UPLOAD FILE' accepted='.doc,..docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' />
                                    
                                    </div>

                                    <p className='mt-3 '>Upload a CV not more than 10MB. Files should be Pdf, doc, docx, rtf.</p>

                                </div>
                                
                                <div className='py-4 ps-3' style={{borderBottom:'solid thin grey'}}>

                                    <p > By clicking "Create Your Account", you agree to our Terms & Conditions and Privacy Policy</p>

                                    <span>Already have an account?</span>

                                    <div className='d-inline ms-2'>
                                        <Link to='/signin' style={{color:'turquoise'}}>
                                          Login
                                        </Link>
                                    </div>

                                </div>

                                <div className=' d-flex flex-row justify-content-sm-end my-4 px-sm-0 p-3'>
                                    <button onClick={this.handleSubmitClick} className='flex-sm-grow-0 flex-grow-1 mx-sm-3 p-3 bg-dark text-light' style={{borderRadius:'5px',boxSizing:'border-box',cursor:'pointer' }}>CREATE YOUR ACCOUNT</button>
                                </div>

                            </div>  


                        </div>

                    </div>

                </form>


                <div ref={this.loginError} className='logInError d-flex flex-row flex-wrap justify-content-center' style={{bottom:'0px'}}>

                    <span className='text-center mt-3'>
                        {response}
                    </span> 
                    <span className='ms-sm-3 my-3 ' onClick={this.handleDismissClick} style={{color:'tomato', cursor:'pointer'}}>
                        DISMISS
                    </span>

                 </div>


            </div>
 
        );
 
    }
}
 
const wrappedForm=reduxForm({
    form: 'accountForm', 
    validate:userSignUpValidation,  
})(Signup);

const mapSateToProps= state=>{
    
    var formValues=null;

    const{userDetails,form:{accountForm},response,isClick,submitClicked}=state

    if (accountForm) {

        let {values}=accountForm

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

        isClick,
        submitClicked,
        formValues: formValues,
        userDetails,
        response,
    }
}

export default connect(mapSateToProps,{
    nextBtnClicked, submitBtnClicked,createUser,getResponse,
    unClickNextBtnClicked,unClickSubmitBtnClicked
})(wrappedForm)


//style={{pointerEvents: 'none', opacity:'0.7'}}

