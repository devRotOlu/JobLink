
import React from 'react'
import { Link } from 'react-router-dom'


const UserInfoTab=({styling,pageLink,children,Experiences,Educations,viewLink})=>{

            
            const renderViewLink=(Experiences,Educations)=>{

                if (Experiences && Experiences.length) {

                    return <Link className='ms-3' to={viewLink}>{children[2]}</Link>
                    
                }else if( Educations && Educations.length){

                    return <Link className='ms-3 ' to={viewLink}>{children[2]}</Link>

                }

                return
            }

            const renderPageLink= children=>{

                const lastChildIndex= children.length;

                const lastPropChild= children[lastChildIndex-1];

                return <Link className='ms-auto me-3' to={pageLink}>{lastPropChild}</Link>
            }

            

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
                        <div className="py-3 d-flex flex-row justify-content-between"style={{borderTop:'solid thin grey', fontWeight:"bolder"}}>  

                            {renderViewLink(Experiences,Educations)}

                            {renderPageLink(children)}

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