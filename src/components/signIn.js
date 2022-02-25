
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';


import {getUser} from '../actions/actions'
import SearchJobs from './accessories/jobSearch'
import history from '../history'
 
class SignUp extends React.Component {

    
 
    renderInput=({type,placeholder,input})=>{


        return  <input {...input} type={type} placeholder={placeholder} className="form-control"/>

    }

    onSubmit= formValues=>{

        const {email,password}= formValues

        if (email && password) {

            this.props.getUser(email,password)

            setTimeout(() => {

                if (Object.keys(this.props.myInfo).length>1) {
    
                    history.push('/userpage')
                    
                }
                
            }, 1000); 
            
        }


    }
 
    render() {

        const {handleSubmit}= this.props

        
        return (
 
            <div className="container">
                <div className="row justify-content-center" style={{ height: '100vh' }}>
                    <form action="" className="border align-self-center p-4" style={{ width: '350px' }} onSubmit={handleSubmit(this.onSubmit)}>
                        <h3 className="text-center">Sign In</h3>
                        <hr />
                        {/* <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span></div>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" onChange={this.props.onHandleChange} />
                        </div> */}
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                            <Field type='text' name="email" component={this.renderInput} placeholder="Email" id="email"/>
                        </div>
                        <div className="input-group mb-4">
                            <div className="input-group-prepend"><span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></div>
                            <Field type='password' name="password" component={this.renderInput} placeholder="Password" id="password"/>
                        </div>
                        <div className="input-group mb-4">
 
                            <input type="submit" value="Sign In" className="btn btn-outline-danger btn-block m-auto" />
                        </div>

                    </form>
                  
                </div>
               
            </div>
  
                    
 
 
        );
 
    }
}
 
const mapStateToProps=state=>{

    return {myInfo: state.myInfo}

}

const wrappedForm= reduxForm({

    form:'signIn'

})( SignUp);

export default connect(mapStateToProps,
    {
        getUser  
    }
)(wrappedForm)