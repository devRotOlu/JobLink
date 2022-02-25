
import React from 'react'
import { Link } from 'react-router-dom'


const UserInfoTab=({styling,pageLink,children})=>{
            

            const className= styling? styling:'ps-3'
            

            if (!styling) {

    
                return(

                    <React.Fragment>

                        <div>
                        
                            <div className={className}> 
            
                                    {children[0]}

                            </div>
            
                            {children[1]}

                        </div> 
                        <div className="py-3"style={{borderTop:'solid thin grey', textAlign:'right', fontWeight:"bolder"}}>

                                <Link className='me-3' to={pageLink}>{children[2]}</Link>

                        </div>

                    </React.Fragment>
                )
                
            }

        return(

            <React.Fragment>                
                  
                    <div>
                    
                        <div className={className}> 

                             {children[0]}

                        </div>
        
                            {children[1]}

                    </div> 
    
            </React.Fragment>
        )
        
}

export default UserInfoTab;