
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { deleteUserInfo } from '../../actions/actions';


const userPrompt=(UserViewsPlatform,serverPath,path)=> {

    const UserPrompt= props => {

        const {onClickPromptCancel,id,deleteUserInfo,history,userId,getProp}=props;

        
        const onClickEdit=dataToEdit=>{

            history.replace(`/userpage/${path}/${id}/${userId}`);
            
            getProp(dataToEdit,path);
        
        }


        const onClickPromptDelete=(positn)=>{

            deleteUserInfo(serverPath,positn,id)

        }

        const renderDeletePrompt= (positn,id)=>{

            if ( positn || id ) {

                return (

                    <div className='deletePrompt  px-3 py-4 flex-wrap flex-sm-row justify-content-between my-3 align-content-center' style={{backgroundColor:'black' ,color:'white'}}>
    
                        <span className='flex-grow-1 mb-4 text-lg-left text-center'>Are you Sure you want to delete?</span> 
    
                        <div className='d-flex flex-row flex-grow-1 flex-wrap justify-content-around' style={{width:'60%'}}>
                            <button onClick={()=>onClickPromptCancel(positn)} type='button' className='mb-3 mb-lg-0 px-5 py-2 text-light ' style={{backgroundColor:'black', border:'solid 2px white', fontWeight:'bold', borderRadius:'5px'}}>CANCEL</button>
                            <button onClick={()=>onClickPromptDelete(id)} className='px-5 py-2 text-light' type='submit' style={{backgroundColor:'tomato', fontWeight:'bold', borderRadius:'5px', border:'solid 2px tomato',height:'fit-content'}}>DELETE</button>
                        </div>
    
                    </div>
    
                )
    
                
            }

            return

        }


        return <UserViewsPlatform renderDeletePrompt={renderDeletePrompt}  {...props} onClickEdit={onClickEdit}/>
        
    }

    const mapStateToProps=(state,{match:{params}})=>{

        return{
            id:params.id,
            userId:params.userId
        }

    }

    const wrappedConnect=  connect(mapStateToProps,{
        deleteUserInfo
    })(UserPrompt)

    const WrappedWithRouter= withRouter(wrappedConnect)


    return WrappedWithRouter
    
}

export default userPrompt