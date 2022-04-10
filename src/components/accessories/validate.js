

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

    return errors

}


export const userEducatnInfoValidation= formValues=>{

    const errors={}

    if (!formValues.Institution_Name) {

        errors.Institution_Name='Please enter the name of educational Institution/School/etc' 
        
    }

    if (formValues.Minimum_Qualification==='Select') {

        errors.Minimum_Qualification='Please enter your qualification level' 
        
    }

    if (!formValues.Qualification) {

        errors.Qualification='Please enter the name of your qualification' 
        
    }

    if (formValues.Start_Months==='Select') {

        errors.Start_Months='Please select month'
        
    }

    if (formValues.Start_Years==='Select') {

        errors.Start_Years='Please select year'
        
    }

    if (formValues.End_Months==='Select') {

        errors.End_Months= 'Please select month'
        
    }

    if (formValues.End_Years==='Select') {

        errors.End_Years= 'Please select year'
        
    }

    return errors
}


export const userWorkInfoValidation= formValues=>{

    const errors={}

    if (!formValues.Employer_Name) {

        errors.Employer_Name='Please add the name of your Employer' 
        
    }

    if (!formValues.Job_Title) {

        errors.Job_Title='Please enter your job title' 
        
    }

    if (formValues.Job_Level==='Select') {

        errors.Job_Level='Please enter your job level' 
        
    }

    if (formValues.Country==='Select') {

        errors.Country='Please enter the location of your job'
        
    }

    if (formValues.Work_Type==='Select') {

        errors.Work_Type='Please select your work type'
        
    }

    if (formValues.Job_Function==='Select') {

        errors.Job_Function= 'Please select a job function'
        
    }

    if (!formValues.City) {

        errors.City= 'Please enter the location of your job'
        
    }

    if (formValues.Start_Months==='Month') {

        errors.Start_Months= 'Please select a month'
        
    }

    if (formValues.Start_Years==='Year') {

        errors.Start_Years= 'Please select a year'
        
    }

    if (formValues.End_Months==='Month') {

        errors.End_Months= 'Please select a month'
        
    }

    if (formValues.End_Years==='Year') {

        errors.End_Years= 'Please select a year'
        
    }


    return errors
}