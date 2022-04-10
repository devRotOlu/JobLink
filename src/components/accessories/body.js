
import React,{useContext} from "react";
import {reduxForm} from 'redux-form'
import Typewriter from 'typewriter-effect';

import '../app.css';
import SearchJobs from './jobSearch'
import TopJobs from './topJobs'
// import ItemSelectedContext from "../../context/itemSelected";
 
const  Body= ()=>{


    return (
        <React.Fragment> 

                <div className="container-fluid p-0">

                    <img src="Image/bodyimage.png"  className="d-block w-100"   alt="bg-image"  />`
                    
                </div>
                
                <div className="text m-auto text-center">
                
                    <Typewriter options={{strings: ['Apply for Jobs', 'Post Job opening',],autoStart: true,loop: true,}}/>

                </div>

                <div className='container-fliuid'>

                    <SearchJobs/>

                    <div>
                        <h2 style={{textAlign:'center', marginTop:'50px'}}>TOP JOBS</h2>
                        <TopJobs/>
                    </div>
                    

                </div>
            
                <div className='container'>

                    <h2 className='display-4 text-center mb-4'>TESTIMONIAL</h2>

                    <div className='d-flex flex-row justify-content-center'>

                        <div id="carouselExampleControls" className="carousel slide w-75 text-center" data-bs-ride="carousel">

                            <div className="carousel-inner">

                                <div className="carousel-item active">

                                    <div className="card testimonialItems d-flex flex-wrap flex-row">

                                        <div style={{width:'380px',maxHeight:'400px'}} className='mx-2 flex-grow-1'>

                                            <img src="Image/member4.jpg" className='img-fluid h-100' alt=""/>

                                        </div> 

                                        <div className="testimonialHolder w-50 my-4 mx-2 flex-grow-1">
                                            <p className='text-center lead'>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit optio repudiandae voluptas quam quidem ipsam quibusdam veritatis dolorum porro distinctio, minima fuga unde tempora illum corporis nisi, itaque est sapiente.
                                            </p>
                                            <h3>John Kolawola</h3>
                                        </div>

                                    </div>

                                </div>
                                <div className="carousel-item">

                                    <div className="card testimonialItems d-flex flex-wrap flex-row ">

                                        <div style={{width:'380px',maxHeight:'400px'}} className='mx-2 flex-grow-1'>

                                            <img src="Image/member5.jpg" className='img-fluid h-100'  alt=""/>      

                                        </div>

                                        <div className=" testimonialHolder  w-50 my-4 mx-2 flex-grow-1  ">
                                            <p className='text-center lead'>
                                                I recommend Joblink to every fresh Graduate, and any person looking for a new role. This plafrorm exposed me to jobs in various Countries, there lists are always updated and the service they render is top notch.  
                                            </p>
                                            <h3>Ebuka Smith</h3>
                                        </div >    
                                        
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="card testimonialItems d-flex flex-wrap flex-row">

                                        <div style={{width:'380px',maxHeight:'400px'}} className='mx-2 flex-grow-1'>

                                            <img src="Image/member6.jpg" className='img-fluid h-100'  alt=""/>  

                                        </div>

                                        <div className="testimonialHolder w-50 my-4 mx-2 flex-grow-1">
                                            <p className='text-center lead'>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit optio repudiandae voluptas quam quidem ipsam quibusdam veritatis dolorum porro distinctio, minima fuga unde tempora illum corporis nisi, itaque est sapiente.
                                            </p>
                                            <h3>Hassan Idrissu</h3>
                                        </div>                                
                                    
                                    </div>

                                </div>

                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'grey'}}></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'grey'}}></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>

                </div>

            </React.Fragment>
    );
}

export default reduxForm({
    form: 'jobSearch',
    intialValues: {
        allJobFunction: { label: 'All Job Functions',value: 'All Job Functions'},
        jobLocation:{ label: 'Rest of Nigeria',value: 'Rest of Nigeria'},
      }
}) (Body);


