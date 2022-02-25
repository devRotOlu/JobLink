 import React from 'react';

 export const  FlexSectioning= props=>{

    return(

        <div className='d-flex flex-sm-row flex-wrap flex-column justify-content-between mb-4 px-sm-4'>  

                {props.children}
            
        </div>

    )
 }

 