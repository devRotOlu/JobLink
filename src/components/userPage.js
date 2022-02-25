
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import history from '../history'
import UserInfoTab  from './accessories/userInfoTab';



class UserPage extends React.Component{


    render(){

        // console.log(this.props.userInfo,'userInfo');

        const{Experience,Location,First_Name,Last_Name}= this.props.userInfo

        return (

            <div className='my-4 mx-auto' style={{width:'93%'}}>

                <div className='card'>

                    <div style={{height:'70px'}}>
                    </div>

                    <div className='d-flex flex-column align-items-center' style={{position:'realtive', backgroundColor:'blue'}}>

                        <div onClick={()=> history.push('/userupdatePage')} className='m-auto d-flex justify-content-center align-items-center' style={{width:'130px', height:'130px', backgroundColor:'tomato', borderRadius:'65px', position:'relative', top:'-40px', outlineOffset:'-3px', outline:'solid 2px white', cursor:'pointer'}}>

                            <FontAwesomeIcon icon={faUser} size='4x' style={{color:'white'}} />


                        </div>

                        <div style={{ textAlign:'center', color:'white', position:'relative',top:'-30px'}}>
                            <p style={{fontSize:'2rem'}}>{First_Name} {Last_Name}</p>
                            <p>Experience: {Experience}</p>
                            <p>Location:  {Location}</p>
                        </div>

                    </div>
                    
                </div>

                <div className="card mt-4 py-3" style={{width:'70%'}}>

                    <UserInfoTab pageLink="/userupdatePage">

                        <h5>Employment & Availability</h5>
                        <p className="ps-3 pt-3 mb-3">
                                Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.
                        </p>
                        <span>UPDATE</span>

                    </UserInfoTab>
                    
                </div>

                <div className="card mt-4 py-3" style={{width:'70%'}}>

                    <UserInfoTab pageLink="/aboutuser">

                        <h5>About Me</h5>
                        <p className="ps-3 pt-3 mb-3">Give a short overview of your Career</p>
                        <span>ADD</span>

                    </UserInfoTab>

                </div>

                <div className="card mt-4 py-3" style={{width:'70%'}}>

                    {/* <UserInfoTab>
                        

                        <div>
                            <h5>Work Experience</h5>
                            <p>Give a short overview of your Career</p>
                        </div>

                      
                        <p className="ps-3 pt-3 mb-3" style={{borderTop:'solid thin grey'}}>I have no experience</p>
                        <span>ADD</span>
                    </UserInfoTab> */}

                </div>

                <div className="card mt-4 py-3" style={{width:'70%'}}>

                    {/* <UserInfoTab>
                        

                        <div>
                            <h5>Education</h5>
                            <p>List your qualifications here.</p>
                        </div>

                      
                        <p className="ps-3 pt-3 mb-3" style={{borderTop:'solid thin grey'}}>qualifications</p>
                        <span>ADD</span>

                    </UserInfoTab> */}

                </div>

    

            </div>
        )
    }
}

const mapStateToProps= state=>{

    return {
        userInfo:state.myInfo,
    }
}

export default connect(mapStateToProps)(UserPage);