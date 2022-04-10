
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';

import '../app.css';
import { FormCheckBox } from './formComponents';
import { getUser,rotateProgressBar,clearProgressBar } from '../../actions/actions';


class UserProfileBoard extends React.Component{
    

    constructor(props){

        super(props)

        this.profileRef= React.createRef()

        this.rotatingAngle={

            about_User: 21.6,
            Experiences: 63,
            Educations: 41.4,
            images:12.6,
            Files:14.4,
            preferred_Job:3.6,
            preferred_Location: 3.6,
            Salary_Expectation:12.6,
            Work_Type:3.6,
            career_headline:3.6,
        }
        
    }


    progressBarRotation= angle=>{
    
        const firstChild=this.profileRef.current.firstElementChild;

        firstChild.style.transform=`rotate(${angle}deg)`;
        firstChild.firstElementChild.style.transform=`rotate(${angle}deg)`;
        firstChild.nextElementSibling.firstElementChild.style.transform=`rotate(${angle}deg)`;

    }


    componentDidUpdate(prevProps){

        const {userDetails, rotateProgressBar,clearProgressBar,getUser,id}= this.props;

        if (prevProps.userDetails !== userDetails) {

            clearProgressBar();

            getUser(`Accounts/${id}?_embed=Educations&_embed=Experiences`);

            Object.keys(this.rotatingAngle).forEach(

                element=>{

                    if (userDetails[element] && userDetails[element].length) {

                        rotateProgressBar(this.rotatingAngle[element]);
                        
                    }
                }
            )
            
            setTimeout(() => {

                this.progressBarRotation(this.props.rotationAngle)
                
            }, 1000);
            
        }

    }


    render(){

        const {userDetails,percent}= this.props

        return(

            <div>  

                <div className='card' >

                    <div className='d-flex flex-row flex-wrap justify-content-around align-items-center' style={{backgroundColor:'blue',padding:'20px 0'}}>

                        <div className="circle-wrap my-3">

                            <div ref={this.profileRef} className="circle">
                                
                                <div className="mask full">
                                <div className="fill"></div>
                                </div>
                            
                                <div className="mask half">
                                <div className="fill"></div>
                                </div>
                                
                                <div className="inside-circle">
                                    <span>{percent}</span>
                                </div>
                                
                            </div>

                        </div>

                        <div style={{width:'150px'}}>

                            <p className='text-center' style={{color:'white', fontWeight:'bold'}}>Complete your profile for better visibility</p>

                        </div>

                    </div>    

                    <div  style={{padding:'30px 1em',pointerEvents:'none'}}>

                        <div className='d-flex flex-row justify-content-between'>
                            <FormCheckBox userDetails={userDetails} name='about_User' id='about_User' info='About Me' />
                            <span className='ms-3'>12%</span>
                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>
                            <FormCheckBox userDetails={userDetails} name='Experiences' id='work_experience' info='Work Experience' />
                            <span className='ms-3'>35%</span>
                        </div> 

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='Educations' id='education' info='Education' rotationangle='41.4' />
                            <span className='ms-3'>23%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='images' id='profile_photo' info='Profile Photo' />
                            <span className='ms-3'>7%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='Files' id='CV' info='Upload CV' />
                            <span className='ms-3' >8%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='preferred_Job' id='preferred_job' info='Preferred Job Function'/>
                            <span className='ms-3'>2%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='preferred_Location' id='preferred_location' info='Preferred Location'/>
                            <span className='ms-3'>2%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='Salary_Expectation' id='salary' info='Monthly Salary Expectation Gross'/>
                            <span className='ms-3'>7%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='Work_Type' id='work_type' info='Work Type'/>
                            <span className='ms-3' >2%</span>

                        </div>

                        <div className='d-flex flex-row justify-content-between mt-4' style={{marginTop:'20px'}}>

                            <FormCheckBox userDetails={userDetails} name='career_headline' id='professional_headline' info='Professional Headline'/>
                            <span className='ms-3'>2%</span>

                        </div>


                    </div>              


                </div> 

            </div>
        )
    }
}


const mapStateToProps=( state,{match:{params}})=>{

    let {userDetails,rotationAngle}=state;

    userDetails=(!userDetails[params.id])? userDetails: userDetails[params.id];

    return{
        userDetails,
        id:params.id,
        rotationAngle,
        percent:`${Math.round(((rotationAngle/180)*100))}%`,
    }
}

const wrappedForm=reduxForm(

   {
        form:'userProfile',
    }

)(UserProfileBoard)

const wrappedConnect=connect(mapStateToProps,{
    getUser,rotateProgressBar,clearProgressBar
})(wrappedForm);


export default withRouter(wrappedConnect)