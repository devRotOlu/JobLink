
import React from 'react';
import {Field} from 'redux-form';


const renderError=(meta,nextBtnClicked,submitClicked)=>{

    const {error,touched}= meta;

    if (nextBtnClicked && error) {


        return <p className='errorMessage mt-3'>{error}</p>
                      
    }
    
    if (submitClicked && error && touched) {


        return <p className='errorMessage mt-3'>{error}</p>
        
    }

    return

}


export const formSelect=(fieldProps)=>{

    var {input,options,meta, nextBtnClicked, submitClicked,initialvalue}= fieldProps;


    if (input.value=='') {
        
        input.value=initialvalue
    }

    return  (
                <React.Fragment>           
                    <select className='fields' {...input} style={{width:'100%', height:'40px', paddingLeft:'10px', boxSizing:'border-box'}}>
                    {options()} 
                    </select>
                    {renderError(meta,nextBtnClicked, submitClicked)}
                </React.Fragment>
            )

}


export const formInput=(fieldProps)=>{


    // if (fieldProps.holder) {

        const {input, nextBtnClicked,holder,type,meta, id,submitClicked}=fieldProps;


         return( 

             <React.Fragment>
                <input className='fields' style={{width:'100%',height:'40px', paddingLeft:'10px', boxSizing:'border-box'}} {...input} type={type} placeholder={holder} id={id}/>

                {renderError(meta, nextBtnClicked,submitClicked)}
            </React.Fragment>
         )
        
    // }

    /// for inputs without placeholder

    // const {input, nextBtnClicked,type,meta}=fieldProps;

    // return (
    //     <React.Fragment>
    //         <input className='fields' style={{width:'100%',height:'40px', paddingLeft:'10px', boxSizing:'borderBox'}} {...input} type={type}/>
    //         {renderError(meta, nextBtnClicked)}
    //     </React.Fragment>
    // )

}

// const onFileChange= (event,input)=>{

//     event.preventDefault();

//     let imageFile = event.target.files[0];

//     let fileAsURL = new FileReader();

//     fileAsURL.readAsDataURL(imageFile);

//     fileAsURL.onload = ()=>{
//         var rawLog = fileAsURL.result;
//         console.log(rawLog);
//     };

// }

    // console.log(fileAsURL,'fileAsURL')
   
    // if (imageFile) {
    //   const localImageUrl = URL.createObjectURL(imageFile);
    //   const imageObject = new window.Image();

    //   imageObject.onload = () => {
    //     imageFile.width = imageObject.naturalWidth;
    //     imageFile.height = imageObject.naturalHeight;
    //     input.onChange(imageFile);       
    //     URL.revokeObjectURL(imageFile);
    //   };

    //   imageObject.src = localImageUrl;

    // }  
    
// };



// export const formFileInput= formProps=>{

//     console.log(formProps,'formProps')

//     const {input,type}=formProps;


//         return( 

//             <React.Fragment>
//                 <input className='fields' style={{width:'30%',height:'40px', paddingLeft:'10px', boxSizing:'borderBox'}}  onChange={event=>onFileChange(event,input)} type={type} accept='.doc,..docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'/>

//             </React.Fragment>
//          )
           
// }



// onFileChange= (event)=>{

//     event.preventDefault();

//     const { input: { onFileChange } } = this.props

//     let imageFile = event.target.files[0];

//     onFileChange(imageFile)

// }


export const FormFileInput =props=>{

    const {name, heading,submitClicked,id,accepted,uploadPics,userId}=props


    const formFileInput= fieldProps=>{ 
        
        const {meta,submitClicked,accepted} = fieldProps

        const onFileChange= (event)=>{

            event.preventDefault();
        
            const { input: { onChange } }=fieldProps
        
            let fileAsURL = new FileReader();

            //let fileAsString= new FileReader();

            fileAsURL.readAsDataURL(event.target.files[0]);

            //console.log(fileAsString.readAsBinaryString(event.target.files[0]),'file')
    
            fileAsURL.onload = event=>{

                if (uploadPics) {
    
                    uploadPics(event.target.result);

                    localStorage.setItem(userId,fileAsURL.result);

                    return
                    
                }

                onChange(fileAsURL.result);
            }; 
        }
    

        return( 

                <React.Fragment>

                    <div style={{width:'30%'}}>

                        <input className='fileInput fields' onChange={event=>onFileChange(event)}  type='file' accept={accepted} style={{height:'40px', width:'100%'}}/>
                        {renderError(meta,submitClicked)}

                    </div>

                </React.Fragment>
        )
           }

    return(

        <React.Fragment>

            <label style={{width:'100%', textAlign:'center',lineHeight:'40px',cursor:'pointer'}} htmlFor={id}>
                {heading}
            </label>

            <Field name={name} component={formFileInput} submitClicked={submitClicked} id={id} accepted={accepted}/>

        </React.Fragment>
    )


}



export const FormSelect=props=>{

    const {heading, name, options,nextBtnClicked, submitClicked,value}= props

    return(

         <React.Fragment>
            <label><h5 style={{color:'grey', fontSize:'16px'}}>{heading}</h5></label>
            <Field name={name} component={formSelect} options={options} nextBtnClicked={nextBtnClicked} initialvalue={value} submitClicked={submitClicked}/>
        </React.Fragment>
    )
}

export const FormInput= props=>{

    const{heading, nextBtnClicked,name, type, id,submitClicked}= props

    return(
        

        <React.Fragment>

            <label  htmlFor={id} ><h5 style={{color:'grey', fontSize:'16px'}}>{heading}</h5></label>

            <Field submitClicked={submitClicked} nextBtnClicked={nextBtnClicked} name={name} component={formInput} type={type} id={id}/>

        </React.Fragment>
    )
}


const formCheckBox=props=>{

    const {input,userDetails,whenClicked}= props;

    let {name}=input; 


    if (userDetails && Object.keys(userDetails).length && (userDetails[name] && userDetails[name].length)) {

        return(

            <React.Fragment>
    
                <input type='checkbox'{...input} defaultChecked name={name} style={{width:'18px', height:'18px'}}/>
    
            </React.Fragment>
        )
        
    }


    return(
        <React.Fragment>

            <input type='checkbox' onClick={whenClicked} {...input} name={name} style={{width:'18px', height:'18px'}}/>

        </React.Fragment>
    )
}


export const FormCheckBox= props=>{

    const {name,info, id,userDetails,rotationangle,whenClicked}= props;


    return(
        <div className='d-flex flex-row justify-content-start align-items-center'>

             <Field component={formCheckBox} id={id} name={name} userDetails={userDetails} rotationangle={rotationangle} whenClicked={whenClicked} normalize={value=> rotationangle || value } />

             <label style={{marginLeft:'15px'}} htmlFor={id}>

                 <h5 style={{color:'grey', fontSize:'16px', display:'inline',cursor:'pointer'}}>{info}</h5>

            </label>

        </div>
    )
}



export const formTextArea=( {input,rows,id})=>{


         return( 

             <React.Fragment>

                <textarea className='textArea' {...input} rows={rows} id={id} style={{width:'100%', padding:'20px 0 0 20px'}}>
                
                </textarea>

            </React.Fragment>
         )

}
