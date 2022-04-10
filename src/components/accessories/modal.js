
import React,{useRef} from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


const Modal= ({children,history,id,userId, path})=>{

    const parentRef= useRef()

    const onClickDelete=positn=>{

        parentRef.current.children[positn].lastElementChild.style.display='flex';

    }

    const onClickPromptCancel=positn=>{

        parentRef.current.children[positn].lastElementChild.style.display='none'

    }

    return ReactDOM.createPortal(

            <div className='newModal d-flex justify-content-lg-center'>

                <div className='modalContainer card mt-5 flex-sm-grow-0 flex-grow-1 mx-lg-0 mx-2 mx-sm-4' style={{height:'fit-content', width:'70%'}}>
                
                    <div  className='modalHeader'>

                        {children[0]}

                    </div>

                    <div className='modalBody pt-3 px-3' style={{borderTop:'solid grey thin'}}>

                        <div ref={parentRef}>{React.cloneElement(children[1],{onClickDelete,onClickPromptCancel})}</div> 

                        <div className='formButtonContainer d-flex flex-column flex-sm-row justify-content-sm-between py-3'>

                            <button onClick={()=> history.replace(`/userpage/${id}/${userId}`)} className='formButton'  type='reset'>BACK</button>
                            <button onClick={()=> history.replace(`/userpage/${path}/${id}/${userId}`)} className='formButton mt-sm-0 mt-4' type='submit'>ADD</button>

                        </div>                 

                    </div>

                </div>


            </div>,
        document.getElementById('modal')
    )
}

export default withRouter( Modal);