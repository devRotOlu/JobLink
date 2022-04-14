
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';

import { getTopJobs } from '../actions/actions';



const JobPage= ({job,...props})=>{

    useEffect(()=>{

       props.getTopJobs();

       window.scrollTo(0,10);

    },[])


      return (

            <div>

                <div className=' card my-4 mx-auto py-2' style={{width:'90%'}}>

                    <span className='ms-4' >Job Details</span>

                </div>

                <div className=' d-flex flex-sm-row justify-content-between mx-auto'style={{width:'90%'}}>

                    <div className='card flex-grow-1 flex-sm-grow-0' style={{width:'70%'}}>

                        <div className='d-flex flex-row justify-content-end py-3' style={{borderBottom:'solid grey thin'}}> 

                            <span className='me-4 px-2 py-1' style={{color:'tomato', border:'solid thin tomato', borderRadius:'15px',fontSize:'13px'}}>FEATURED</span>

                        </div>

                        <div className='py-4 ps-5 d-flex flex-row' style={{borderBottom:'solid thin grey'}}>

                            <div className='bg-secondary d-flex flex-row justify-content-center align-items-center me-4' style={{width:'60px', height:'60px', borderRadius:'50%'}}>

                                <FontAwesomeIcon icon={faBriefcase } size='2x' style={{color:'white'}}/>

                            </div>

                            <div style={{width:'50%'}}>

                                <h6>{job.title}</h6>
                                <span>{job.company_name}</span>
                                <span>{job.location} | {job.location? job.job_types[0] : null}</span>

                            </div>


                        </div>

                        <div className='py-4' style={{borderBottom:'solid thin grey'}}>

                            <div className='mx-3'>

                                <h6 className='mb-3' style={{fontWeight:'bold'}}>Job Description/Requirements</h6>

                                {job.description}

                            </div>

                        </div>

                        <div className='ms-4 py-4'>

                            <h5 style={{display:'inline'}}>Job link:</h5> <a style={{ color:'blue',cursor:'pointer'}}>{job.url}</a>

                        </div>

                    </div>


                </div>

            </div>
        )
    
}


const mapStateToProps=({topJobs},{index})=>{

    const job=topJobs[index]? topJobs[index]: {};

    return {
        job
    }
}

export default connect(mapStateToProps,{
    getTopJobs
}) (JobPage)