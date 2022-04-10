import React from 'react';
import {connect} from 'react-redux';

import { getTopJobs } from '../../actions/actions';
import JobsArray from './jobsArray';



class TopJobs extends React.Component{

    componentDidMount(){

        this.props.getTopJobs()

    }


    renderTopJobs= ()=>{

        const {topJobs}= this.props

        if (topJobs) {

            return topJobs.map((job,index)=>{

                const {company_name,title,location}= job
        
                    if (index<12) {
        
                        return <JobsArray key={index} jobsTitle={title} CompanyName={company_name} index={index} jobLocation={location} />
                    
                    }
        
               })
            
        }

        return <h2 className='text-center'>Loading Jobs....</h2>
    }

    render(){
        
        return(
            
            <div className='topJob-container container-fluid my-5 mx-auto' style={{width:'90%'}}>

                        <div className='row'>

                            {this.renderTopJobs()}

                        </div>

                    </div>
        )
   }
}

const mapStateToProps=state=>{
    
    return {topJobs:state.topJobs}
}

export default connect(mapStateToProps,{
    getTopJobs
})(TopJobs)