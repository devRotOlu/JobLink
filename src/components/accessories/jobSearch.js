
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {getSearchTerm} from '../../actions/actions'
import {stateOptions, jobFunctionOptions} from './selectOptions'
import JobsArray from './jobsArray';



class SearchJobs extends React.Component{


    formSelect=(props)=>{

        const {input,options}= props
      
        // console.log(props)
    
        return  (
                <select className='mb-4'{...input} style={{width:'250px', height:'47px', padding:'10px', fontWeight:'bold'}} value={input.value}>
    
                    {options()}
        
                </select>
                )
    }

    renderJobs=()=>{

        const {jobs} = this.props

        if (jobs) {

            return jobs.map((job,index)=>{


                const {days_ago,company_name,job_location,job_title}=job
    
    
                return(
                    <JobsArray key={index} jobsTitle={job_title} CompanyName={company_name} daysPosted={days_ago} jobLocation={job_location} />
                )
    
            })
            
        }

        return <h2>Loading Jobs....</h2>

    }


    onSubmit=( {jobType,jobLocation})=>{


        this.props.getSearchTerm(jobType,jobLocation);
            
    }



    render(){

        const {handleSubmit}= this.props 


        if (this.props.jobs) {

            return (

                <React.Fragment>

                    <form onSubmit={handleSubmit(this.onSubmit)} id='jobForm' className='container my-4 d-flex flex-column flex-wrap flex-sm-row justify-content-around align-items-center'>
                    
                    <Field name='jobType' component={this.formSelect} options={jobFunctionOptions}  label='All Job Functions'/>
                    
                    <Field name='jobLocation' component={this.formSelect} options={stateOptions}/>
                    <button className='btn btn-lg btn-success text-white mb-4'>Search</button>

                    </form>

                    <div className='container-fluid my-5'>

                        <div className='row'>

                            {this.renderJobs()}

                        </div>

                    </div>

                </React.Fragment>

                )
            
        }

        return(

            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)} id='jobForm' className='container my-4 d-flex flex-column flex-wrap flex-sm-row justify-content-around align-items-center'>

                    <div>
                        <Field name='jobType' component={this.formSelect} options={jobFunctionOptions}  id={'jobForm'}/>
                    </div>

                    <Field name='jobLocation' component={this.formSelect} options={stateOptions}  id={'jobForm'}/>

                    <button className='btn btn-lg btn-success text-white mb-4'>Search</button>
                </form>
            </React.Fragment>
        )
    }
}

const WrappedForm= reduxForm({
    form: 'jobForm',
}) (SearchJobs)

const mapStateToProps= state=>{

    return {jobs: state.jobs}
}

export default connect(mapStateToProps,{
    getSearchTerm
})(WrappedForm)