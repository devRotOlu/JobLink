
import React from 'react';

import userPrompt from '../HOCs/deleteAndEditPropmt';


const RenderWorkExperience=({userDetails,Experiences,use,renderDeletePrompt,onClickDelete,onClickEdit})=>{



    if (Object.keys(userDetails).length && Experiences && Experiences.length) {

        if (!use) {

            return  Experiences.map(Experience=>{

                const {Employer_Name,Job_Title,Start_Months,Start_Years,End_Months,End_Years,id}= Experience
    
                return (
    
                    <div key={id} className='mb-3'>
                        <h5>{Employer_Name}</h5>
                        <p>: {Job_Title} | {Start_Months} {Start_Years} - {End_Months} {End_Years}</p>
                    </div>   
                )
    
           })
            
        } else {

            // console.log('in here')

            return  Experiences.map((Experience,index)=>{

                const {Employer_Name,Job_Title,Start_Months,Start_Years,End_Months,End_Years,id}= Experience
    
                return (
    
                    <div key={id} className='mb-3' style={{borderBottom:'grey thin solid'}}>

                        <div>
                            <h5>{Employer_Name}</h5>
                            <p>: {Job_Title} | {Start_Months} {Start_Years} - {End_Months} {End_Years}</p>
                            <p> {Job_Title} at {Employer_Name}</p>

                            <div className='d-flex justify-content-between py-2 mt-2' style={{borderTop:'solid grey thin'}}>

                                <span onClick={()=>onClickDelete(index)} style={{color:'tomato', fontWeight:'bold', cursor:'pointer'}}>DELETE</span>
                                <span onClick={()=>onClickEdit(userDetails.Experiences[index])}  style={{color:'tomato', fontWeight:'bold', cursor:'pointer'}}>EDIT</span>

                            </div>
                            
                        </div>

                        {renderDeletePrompt(index,id)}

                    </div>   

                    
                )
    
           })
            
        }
                          
    }
    return <p>No added Experience</p>;
}

export default userPrompt (RenderWorkExperience,'Experiences','userWorkInfo')
