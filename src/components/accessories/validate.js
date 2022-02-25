
export const userSignUpValidation= formValues=>{

    // console.log(formValues,'formValues')

    const errors={};


    if (!formValues.First_Name) {

        errors.First_Name='Please enter your first name'
        
    }

    if (!formValues.Email_Address) {

        errors.Email_Address='Please enter your email address'
        
    }else if (!formValues.Email_Address.split('').includes('@') || !formValues.Email_Address.toUpperCase().split('.').includes('COM') || (!formValues.Email_Address.split('').includes('@') && !formValues.Email_Address.toUpperCase().split('.').includes('COM'))) {
        
        errors.Email_Address= 'Please enter a valid email address'
    }

    if (!formValues.Password) {

        errors.Password='Please enter your password'
        
    } else if(formValues.Password.length<6) {

        errors.Password='Password must contain a minimum of 6 characters'
        
    }

    if (formValues.Birth_Date==='Day') {
        
        errors.Birth_Date= 'Please select a valid date of birth'
    }

    if (formValues.Birth_Month=== 'Month') {
        
        errors.Birth_Month= 'Please select a valid month of birth'
    }

    if (formValues.Birth_Year=== 'Year') {
        
        errors.Birth_Year= 'Please select a valid year of birth'
    }


    if (formValues.Location=== 'Select') {
        
        errors.Location= 'Please select a valid Location'
    }

    if (formValues.Country_Code=== 'Select') {
        
        errors.Country_Code= 'Please select a valid Country code'
    }

    if (formValues.Highest_Qualification=== 'Select') {
        
        errors.Highest_Qualification= 'Please select a valid qualification'
    }

    if (formValues.Current_Job=== 'Select') {
        
        errors.Current_Job= 'Please select your current job'
    }

    if (formValues.Experience=== 'Select') {
        
        errors.Experience= 'Please select a valid option'
    }

    if (formValues.Availability=== 'Select') {
        
        errors.Availability= 'Please indicate when you would be available'
    }


    if (!formValues.Mobile_Number) {

        errors.Mobile_Number='Please enter a valid mobile number'
        
    }
    
    if (!formValues.Files) {

        errors.Files='Please add a CV for application'
  
    }


    return errors

}



export const userPageValidation= formValues=>{

    console.log(formValues,'formValues')

    const errors={};

    
    if (formValues.Location==='Select') {
        
        errors.Location= 'Please select a valid Location'
    }

    if (formValues.preferred_Location==='Select') {
        
        errors.preferred_Location= 'Please select a valid preferred job location'
    }

    if (formValues.Highest_Qualification==='Select') {
        
        errors.Highest_Qualification= 'Please select a valid qualification'
    }

    if (formValues.Current_Job==='Select') {
        
        errors.Current_Job= 'Please select your current job'
    }

    if (formValues.preferred_Job==='Select') {
        
        errors.preferred_Job= 'Please select your preferred job'
    }

    if (formValues.Experience==='Select') {
        
        errors.Experience= 'Please select a valid option'
    }

    if (formValues.Availability==='Select') {
        
        errors.Availability= 'Please indicate when you would be available'
    }


    if (formValues.Work_Type==='Select') {

        errors.Work_Type='Please enter a valid work type'
        
    }
   
    // console.log(errors,'errors_v')

    return errors

}


