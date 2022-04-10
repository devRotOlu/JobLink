
import React from 'react';

 export const  FlexSectioning= props=>{

    return(

        <div className='row justify-content-sm-between mb-4 mx-auto' style={{width:'100%'}}>  

                {props.children}
            
        </div>

    )
 }


 export const ContainerForUserTab= props=>{

    return(
        <div className='row mt-5 justify-content-sm-around mx-sm-0 mx-2'>

            <div className='col-md-7 g-0 mb-5 order-md-1 order-2'>

                {props.children[0]}

            </div>

            <div className='col-md-4 g-0 mb-5 order-md-2 order-1'>

                {props.children[1]}

            </div>

           

        </div>
    )
 }


        


 