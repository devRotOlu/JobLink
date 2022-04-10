
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import history from '../history';
import { Link } from 'react-router-dom';


import {verifyUser} from '../actions/actions';

 

class SignUp extends React.Component {

    constructor(props){

        super(props)

        this.loginError=React.createRef();;
    }


    renderInput=({type,placeholder,input})=>{


        return  <input {...input} type={type} placeholder={placeholder} className="loginField form-control" style={{height:'45px'}}/>

    }

    onSubmit= formValues=>{

        const {email,password}= formValues

        if (email && password) {

            this.loginError.current.classList.remove('animate');

            this.props.verifyUser('Accounts',email,password);

            setTimeout(() => {


                if (Object.keys(this.props.myInfo).length) {

                    const {id,userId}=this.props.myInfo
    
                    history.replace(`/userpage/${id}/${userId}`);

                }else{

                    this.loginError.current.classList.add('animate');

                    setTimeout(() => {
                        
                       this.loginError.current.style.animationPlayState = 'paused';
                        
                       this.runAnimation= setTimeout(() => {  

                            this.loginError.current.style.animationPlayState = 'running';
                            
                        }, 10000);
                        
                        
                    }, 1950);

                }
                
            }, 1000); 
            
        }


    }

    handleClick=()=> {

        this.loginError.current.style.animationPlayState = 'running';
        clearTimeout(this.loginError)
    };
      
    

 
    render() {

        const {handleSubmit}= this.props

        
        return (
 
            <div className="container-fluid" style={{position:'relative'}}>

                <div className="row justify-content-start">
                    <form action="" className=" signUpForm border border-top-0 d-flex flex-column align-items-center py-5" style={{ width: '700px' }} onSubmit={handleSubmit(this.onSubmit)}>
                        <h5 className='mb-4'>Sign in and get productive</h5>

                        <div className="input-group mb-4 w-75">
                            <div className="input-group-prepend"><span style={{height:'100%'}} className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span></div>
                            <Field type='text' name="email" component={this.renderInput} placeholder="Email" id="email"/>
                        </div>
                        <div className="input-group mb-4 w-75">
                            <div className="input-group-prepend"><span style={{height:'100%'}} className="input-group-text"><FontAwesomeIcon icon={faLock} /></span></div>
                            <Field type='password' name="password" component={this.renderInput} placeholder="Password" id="password"/>
                        </div>
                        <div className="input-group mb-4 w-75" style={{height:'45px'}}>
 
                            <input style={{height:'100%', fontWeight:'bold'}} type="submit" value="Sign In" className="btn btn-outline-dark btn-block w-100" />
                        </div>

                        <p style={{fontWeight:'bold'}}>Don't have an account?</p>
                        <Link to='/signup' className='mt-3' style={{fontWeight:'bold'}}>Sign Up</Link>

                    </form>
                  
                </div>


                <div ref={this.loginError} className='logInError d-flex flex-row flex-wrap justify-content-center'>

                    <span className='text-center mt-3'>
                        Please ensure your username/password combination is correct
                    </span> 
                    <span className='ms-sm-3 my-3 ' onClick={this.handleClick} style={{color:'tomato', cursor:'pointer'}}>
                        DISMISS
                    </span>

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
        verifyUser
    }
)(wrappedForm)