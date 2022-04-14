
import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const CheckIfSignedIn= ({children,index,myInfo})=>{

    if (Object.keys(myInfo).length) {

        console.log(children,'children')

       return   (<React.Fragment>

                    {React.cloneElement(children[1],{index})}

                </React.Fragment>  )      
    }
    
   return <Redirect to='/signin'/>

}

const mapStateToProps=({myInfo},{match:{params:{index}},children})=>({index,children,myInfo})

export default connect(mapStateToProps)(CheckIfSignedIn)