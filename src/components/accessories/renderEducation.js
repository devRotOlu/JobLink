
import React from 'react';

import '../app.css';
import userPrompt from '../HOCs/deleteAndEditPropmt';



const RenderEducationInfo= ({userDetails,Educations,use,renderDeletePrompt,onClickDelete,onClickEdit,getEducationProp})=>{


    if (Object.keys(userDetails).length && Educations && Educations.length) {
        

       if (!use) {

            return  Educations.map(Education=>{

                const {Institution_Name,Qualification,Start_Months,Start_Years,End_Months,End_Years,id}= Education

                return (

                    <div key={id} className='mb-3'>
                        <h5>{Institution_Name}</h5>
                        <p>: {Qualification} | {Start_Months} {Start_Years} - {End_Months} {End_Years}</p>
                    </div>             
                )

            }) 
           
       } else {

            return  Educations.map((Education,index)=>{

                const {Institution_Name,Qualification,Start_Months,Start_Years,End_Months,End_Years,id}= Education;


                return (

                        <div key={id} className='mb-3 pb-2' style={{borderBottom:'grey thin solid'}}>


                            <div className='educationList'>

                                <h5>{Institution_Name}</h5>
                                <p>: {Qualification} | {Start_Months} {Start_Years} - {End_Months} {End_Years}</p>
                                <p>{Qualification} certificate at the {Institution_Name} </p>

                                <div className='d-flex justify-content-between py-2 mt-2' style={{borderTop:'solid grey thin'}}>

                                    <span onClick={()=>onClickDelete(index)}  style={{color:'tomato', fontWeight:'bold',cursor:'pointer'}}>DELETE</span>
                                    <span onClick={()=>onClickEdit(userDetails.Educations[index])} style={{color:'tomato', fontWeight:'bold', cursor:'pointer'}}>EDIT</span>

                                </div>

                            </div>

                            {renderDeletePrompt(index,id)}


                        </div>            
                )

            })           
   
        } 

    }

    return <p>No added qualification</p>;
}

export default userPrompt(RenderEducationInfo,'Educations','userEducation')


