
import React,{useContext} from 'react';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router';

import '../app.css'



const JobsArray=({jobsTitle,CompanyName, daysPosted,jobLocation,index,history})=>{


    if (daysPosted) {


        return(
            <div className='col-sm-6 col-md-4 mb-3 justify-items-center'>
                        
                        <div className="card w-9"  style={{height:'100%', cursor:'pointer'}}>
    
                            <div className="card-body w-8">
                                <h5 className="card-title">{jobsTitle}</h5>

                                <div>
                                    <div style={{display:'inline'}}><FontAwesomeIcon icon={faBriefcase} size='3x'/></div>
                                    <div style={{display:'inline'}}>
                                        <h6 className="card-subtitle mb-2 text-muted">Company: {CompanyName}</h6>
                                        <h6>Posted: {daysPosted}</h6>
                                        <h6>{jobLocation}</h6>
                                    </div>
                                </div>
                            </div>
    
                        </div>
            </div>
        )
        
    }

    return(

        <div className='jobs col-sm-6 col-md-4 mb-3 justify-items-center'>
                        
                        <div className="card w-9"  style={{height:'100%'}} >
    
                            <div className="card-body">
                                
                                <h6 className='card-title' onClick={()=>history.push(`/joblink/jobpage/${index}`)} style={{cursor:'pointer'}}>{jobsTitle}</h6>

                                <div>
                                    <div style={{display:'inline',marginBottom:'10px'}}>
                                        <FontAwesomeIcon icon={faBriefcase} size='3x'/>
                                    </div>

                                    <div className='jobDetails' style={{display:'inline',marginBottom:'10px'}}>                                      
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            Company: {CompanyName}
                                        </h6>
                                        <h6>{jobLocation}</h6>
                                    </div>
                                </div>
                            </div>
    
                        </div>
            </div>
    )

    
}

export default withRouter (JobsArray);