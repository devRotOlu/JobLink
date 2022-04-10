import React from 'react';
import { connect } from 'react-redux';

import Modal from './modal';
import { getUser,clearUser } from '../../actions/actions';
import RenderWorkExperience from './renderWorkInfo';
import UserInfoTab from './userInfoTab';


class ViewUserExperience extends React.Component {

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`)

    }

    componentDidUpdate(prevProps){

        if (prevProps.userDetails.Experiences && this.props.userDetails.Experiences && (prevProps.userDetails.Experiences.length !== this.props.userDetails.Experiences.length)) {

            this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);
            
        }

    }

    componentWillUnmount(){

        this.props.clearUser()
    }

    render()
    
    {
        const {userDetails,getProp, id, userId}= this.props;

        const {Experiences}= userDetails


        return (

            <Modal id={id} userId={userId} path='userWorkInfo'>

                <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                    <h5>Work Experience</h5>
                    <p className="px-3 pt-3 mb-3">

                        Details of work experience are listed below 

                    </p> 

                </UserInfoTab>


                <RenderWorkExperience userDetails={userDetails} Experiences={Experiences} use='experience' getProp={getProp}/>
            
            </Modal>
        )

    }
}

const mapStateToProps=(state,{match:{params},...props})=>{

    const {getProp}= props

    var {userDetails}= state;

    userDetails=(!userDetails[params.id])? userDetails: userDetails[params.id];

    return{
        id: params.id,
        userDetails,
        userId:params.userId,
        getProp

    }

}

export default connect(mapStateToProps,{
    getUser,clearUser
})(ViewUserExperience)