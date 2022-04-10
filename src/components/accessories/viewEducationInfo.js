
import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';
import { getUser,clearUser } from '../../actions/actions';
import RenderEducationInfo from './renderEducation'; 
import UserInfoTab from './userInfoTab';


class ViewUserEducation extends React.Component {

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);
        
    }


    componentDidUpdate(prevProps){

        if (prevProps.userDetails.Educations && this.props.userDetails.Educations && (prevProps.userDetails.Educations.length !== this.props.userDetails.Educations.length)) {


            this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);
            
        }

    }

    componentWillUnmount(){

        this.props.clearUser()
    }

    
    render()
    {

        const {userDetails,getProp, id, userId}= this.props;

        const {Educations}= userDetails;

        return(

            <Modal id={id} userId={userId} path='userEducation'>
   
                <UserInfoTab styling='bg-primary py-1 text-light ps-3'>

                    <h5>Education</h5>
                    <p className="px-3 pt-3 mb-3">

                        Details of Education; qualifications and institutions are listed below 

                    </p> 
                            
                </UserInfoTab>      

                <RenderEducationInfo userDetails={userDetails} Educations={Educations} use='education' getProp={getProp}/>

            </Modal>            
        )

    }
}

const mapStateToProps=(state,{match:{params},...props})=>{

    const {getProp}= props

    let {userDetails}= state;

    userDetails= (!userDetails[params.id])? userDetails: userDetails[params.id];


    return{

        id: params.id,
        userDetails,
        userId:params.userId,
        getProp
    }

}

export default connect(mapStateToProps,{
    getUser,clearUser
})(ViewUserEducation);




