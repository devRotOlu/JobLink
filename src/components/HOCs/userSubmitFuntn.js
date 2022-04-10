
import React from 'react';
import { connect } from 'react-redux';

import JsonServerAxios from '../../apis/jsonServerAxios';
import { submitBtnClicked,getResponse } from '../../actions/actions';


const userSubmitFunction= (UserModificationTab,path)=> {
    
        class UserSubmitFunction extends React.Component{

            constructor(prop){

                super(prop)

                this.loginError=React.createRef();
            }   

            onSubmit= formValues=>{

                const{educationProp, experienceProp}= this.props

                this.loginError.current.classList.remove('animate');


                if (path==='Accounts') {

                    JsonServerAxios.patch(`/${path}/${this.props.id}`, formValues).then( ()=>{

                        this.props.getResponse('Your Profile has been Updated');

                        this.loginError.current.classList.add('animate');

                        setTimeout(() => {

                            this.loginError.current.style.animationPlayState = 'paused';
    
                            this.runAnimation= setTimeout(() => {
    
                                this.loginError.current.style.animationPlayState = 'running';

                                clearTimeout(this.runAnimation);
                                
                            }, 10000);
                            
                            
                        }, 1900);

                        window.scrollTo(0,40);

                    }
                ).catch(
                    
                    error=>{

                        this.props.getResponse('Please, ensure you are connected to the server ')

                        this.loginError.current.classList.add('animate');

                        setTimeout(() => {

                            this.loginError.current.style.animationPlayState = 'paused';                           
                            
                            this.runAnimation= setTimeout(() => {
    
                                this.loginError.current.style.animationPlayState = 'running';

                                clearTimeout(this.runAnimation);
                                
                            }, 10000);
                            
                            
                        }, 1900);

                    }
                )
                   
                }else{

                    var {AccountId}=formValues 
                      
                        AccountId= Number(AccountId)

                        if (educationProp) {

                            var id = educationProp.id;
                            
                        } else if (experienceProp) {

                            var id = experienceProp.id
                            
                        }


                        const postType= (educationProp || experienceProp)?  JsonServerAxios.patch(`/${path}/${id}`, {...formValues,AccountId}): JsonServerAxios.post(`/${path}`, {...formValues,AccountId:AccountId})
                  
                        postType.then( ()=>{

                            this.props.getResponse('Your Profile has been Updated');

                            this.loginError.current.classList.add('animate');

                            setTimeout(() => {

                                this.loginError.current.style.animationPlayState = 'paused';
                                       
                                this.runAnimation= setTimeout(() => {
        
                                    this.loginError.current.style.animationPlayState = 'running';

                                    clearTimeout(this.runAnimation);
                                    
                                }, 10000);
                                
                                
                            }, 1900);

                            window.scrollTo(0,10);

                        }
                        
                    ).catch(
                        
                        error=>{

                            this.props.getResponse('Please, ensure you are connected to the server ');

                            this.loginError.current.classList.add('animate');

                            setTimeout(() => {

                                this.loginError.current.style.animationPlayState = 'paused';
                                
        
                                this.runAnimation= setTimeout(() => {
        
                                    this.loginError.current.style.animationPlayState = 'running';

                                    clearTimeout(this.runAnimation);
                                    
                                }, 10000);
                                
                                
                            }, 1900);

                        }
                    )

                }
                
            }

            
            handleClick=()=> {
                this.props.submitBtnClicked();

                window.scrollTo(0,40);
            }
            
            handleDismissClick=()=> {

                this.loginError.current.style.animationPlayState = 'running';

                clearTimeout(this.runAnimation);
            }

            render(){

                const {response}= this.props

                return( 

                    <UserModificationTab onSubmit={this.onSubmit} handleClick={this.handleClick} handleDismissClick={this.handleDismissClick} {...this.props}>

                        <div ref={this.loginError} className='logInError d-flex flex-row flex-wrap justify-content-center'>
                            <span className='text-center mt-3'>{response}</span> 
                            <span className='ms-sm-3 my-3 ' onClick={this.handleDismissClick} style={{color:'tomato', cursor:'pointer'}}>DISMISS</span>
                        </div>

                    </UserModificationTab>                  
                    
                )
            }
    }

    const mapStateToProps= (state,{match:{params}})=>{

        var {userDetails,response} = state;

        userDetails=(!userDetails[params.userId])? userDetails: userDetails[params.userId];

        return{

            id:params.id,
            userId:params.userId,
            response,
        }
    }

    
    const wrappedConnect= connect(mapStateToProps,{

        submitBtnClicked,getResponse

    })(UserSubmitFunction)

    return wrappedConnect
     
}

export default userSubmitFunction;