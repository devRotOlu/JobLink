
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

import history from '../history'
import UserInfoTab  from './accessories/userInfoTab';
import { getUser,clearUser } from '../actions/actions';
import RenderWorkExperience from './accessories/renderWorkInfo';
import RenderEducationInfo from './accessories/renderEducation'; 


class UserPage extends React.Component{

    constructor(props){

        super(props)

        this.userImage= React.createRef()

    };

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);

        if (this.props.userImage) {

            this.userImage.current.firstElementChild.style.display='none';

            this.userImage.current.lastElementChild.style.display='block';

            this.userImage.current.lastElementChild.firstElementChild.src=`${this.props.userImage}`;
            
        }

    }

    componentWillUnmount(){

        this.props.clearUser()

    }


    render(){

        const {id, userId,userDetails}= this.props;

        const {Location,First_Name,Last_Name,Experience,Experiences,Educations}= userDetails


        return (

            <div className='d-flex flex-lg-column flex-row flex-wrap my-4 mx-auto' style={{width:'93%'}}>

                <div className='card w-100'>

                    <div style={{height:'70px'}}>
                    </div>

                    <div className='d-flex flex-column align-items-center' style={{position:'realtive', backgroundColor:'blue'}}>

                        <div ref={this.userImage} onClick={()=> history.push(`/userpage/updatePage/${id}/${userId}`)} className='m-auto d-flex justify-content-center align-items-center' style={{width:'130px', height:'130px', backgroundColor:'tomato', borderRadius:'65px', position:'relative', top:'-40px', outlineOffset:'-3px', outline:'solid 2px white', cursor:'pointer'}}>

                            <FontAwesomeIcon icon={faUser} size='4x' style={{color:'white'}} />

                            <div className='imageHolder' >

                                <img style={{borderRadius:'65px',outlineOffset:'-3px', outline:'solid 2px white', height:'100%',width:'100%'}} className='profile_image' src='' alt='profile_image'/>
                                
                            </div> 


                        </div>

                        <div style={{ textAlign:'center', color:'white', position:'relative',top:'-30px'}}>
                            <p style={{fontSize:'2rem'}}>{First_Name} {Last_Name}</p>
                            <p>Experience: {Experience}</p>
                            <p>Location:  {Location}</p>
                        </div>

                    </div>
                    
                </div>

                <div className="card mt-4 py-3 flex-grow-lg-0 flex-grow-1" style={{width:'70%'}}>

                    <UserInfoTab pageLink={`/userpage/updatePage/${id}/${userId}`}>

                        <h5>Employment & Availability</h5>
                        <p className="ps-3 pt-3 mb-3">
                                Keeping this section up to date will help employers & recruiters find you. They will know the field you are in, what your preferred industries are, and if you are actively looking.
                        </p>
        
                        <div style={{width:'fit-content'}}>UPDATE</div>

                    </UserInfoTab>
                    
                </div>

                <div className="card mt-4 py-3 flex-grow-lg-0 flex-grow-1" style={{width:'70%'}}>

                    <UserInfoTab pageLink={`/userpage/aboutuser/${id}/${userId}`}>

                        <h5>About Me</h5>
                        <p className="ps-3 pt-3 mb-3">Give a short overview of your Career</p>
                        <div style={{width:'fit-content'}}>ADD</div>

                    </UserInfoTab>

                </div>

                <div className="card mt-4 py-3 flex-grow-lg-0 flex-grow-1" style={{width:'70%'}}>

                    <UserInfoTab Experiences={Experiences} viewLink={`/userpage/experience/${id}/${userId}`} pageLink={`/userpage/userWorkInfo/${id}/${userId}`}>
                        
                        <div>
                            <h5>Work Experience</h5>
                            <p>Give a short overview of your Career</p>
                        </div>
                     
                        <div className="ps-3 pt-3 mb-3" style={{borderTop:'solid thin grey'}}>

                            <RenderWorkExperience userDetails={userDetails} Experiences={Experiences} />

                        </div>

                        <span>VIEW</span>
                        
                        <span>ADD</span>

                    </UserInfoTab> 

                </div>

                <div className="card mt-4 py-3 flex-grow-lg-0 flex-grow-1" style={{width:'70%'}}>

                    <UserInfoTab Educations={Educations} viewLink={`/userpage/education/${id}/${userId}`} pageLink={`/userpage/userEducation/${id}/${userId}`}>
                        

                        <div>
                            <h5>Education</h5>
                            <p>List your qualifications here.</p>
                        </div>

                      
                        <div className="ps-3 pt-3 pb-3" style={{borderTop:'solid thin grey'}}> 

                            <RenderEducationInfo userDetails={userDetails} Educations={Educations}/>

                        </div>

                        <span>VIEW</span>
                        
                        <span>ADD</span>

                    </UserInfoTab> 

                </div>

    

            </div>
        )
    }
}

const mapStateToProps= (state,{match:{params}})=>{

    let {userDetails}=state;

    userDetails=(!userDetails[params.id])? userDetails: userDetails[params.id];

    return {
        userDetails,
        userId: params.userId,
        id: params.id,
        userImage:localStorage.getItem(params.userId)
    }
}

export default connect(mapStateToProps,{
    getUser,clearUser
})(UserPage);