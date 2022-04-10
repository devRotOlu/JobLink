import React from 'react';
import { reduxForm,Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import UserInfoTab from './userInfoTab';
import UserProfileBoard from './userProfileBoard';
import { formTextArea } from './formComponents';
import userSubmitFunction from '../HOCs/userSubmitFuntn';
import { ContainerForUserTab } from './flexSectioning';
import { getUser,clearUser } from '../../actions/actions';



class AboutUser extends React.Component{

    componentDidMount(){

        this.props.getUser(`Accounts/${this.props.id}?_embed=Educations&_embed=Experiences`);

        window.scrollTo(0,10);

    };

    componentWillUnmount(){

        this.props.clearUser()

        
    }
    

    render()
    
    {


        return (

            <div className="container-fluid ">

                <ContainerForUserTab>
                    
                    <div className="card">

                        <UserInfoTab styling='bg-primary py-1 text-light ps-3'>     

                            <h5>About Me</h5>
                            <p className="ps-3 pt-3 mb-3">

                                Give a short overview of your career history and skills.

                            </p> 

                        </UserInfoTab>

                        <form  onSubmit={this.props.handleSubmit(this.props.onSubmit)}>

                            <div className='mx-auto pb-3' style={{width:'96%'}}>

                                <Field name='about_User' component={formTextArea} rows='20'/>

                            </div>


                            <div className='formButtonContainer d-flex flex-column flex-sm-row justify-content-sm-between py-4 px-3'style={{width:'100%', borderTop:'solid thin grey'}}>

                                <button className='formButton' onClick={this.props.reset} type='reset'>CANCEL</button>
                                <button className='formButton mt-sm-0 mt-4' onClick={this.props.handleClick} type='submit'>SAVE</button>

                            </div>

                        </form>


                    </div>

                    <UserProfileBoard userId={this.props.userId} id={this.props.id}/>

                </ContainerForUserTab>

                {this.props.children}

            </div>

        )
    }
}

const wrappedForm = reduxForm({
    form:'aboutUser'
}) (AboutUser);

const mapStateToProps= (state,{match:{params}})=>{

    return {
        userId:params.userId,
        id:params.id
    } 
}

const wrappedConnect= connect(mapStateToProps,{
    getUser,clearUser
})(wrappedForm)

const wrappedRouter= withRouter(wrappedConnect)

export default userSubmitFunction(wrappedRouter,'Accounts')