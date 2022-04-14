
import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import history from '../history'
import Home from './home'
import Navbar from './accessories/navbar'; 
import Signup from './signUp';
import SignIn from './signIn';
import UserPage from './userPage'
import UserUpdatePage from './accessories/userUpdatePage'
import AboutUser from './accessories/aboutUser';
import UserEducationInfo from './accessories/userEducationInfo';
import UserWorkInfo from './accessories/userWorkExperience';
import Footer from './accessories/footer';
import Education from './accessories/viewEducationInfo';
import Experience from './accessories/viewExperienceInfo';
import JobPage from './jobPage';
import CheckIfSignedIn from './accessories/checkIfSignedIn'
import './app.css';




class App extends React.Component{

    educationProp=null;
    experienceProp=null;

    getProp= (dataToEdit,path)=>{

        if (path==='userEducation') {

            this.educationProp= dataToEdit;

            return
            
        }

        this.experienceProp= dataToEdit;
    }

    resetProp= path=>{
        
        if (path==='userEducation') {
            
            this.educationProp= null;

            return
        }

        this.experienceProp=null;

    }


    render(){


        return(

            <Router history={history}>

                <div className="container-fluid no-gutters p-0">

                    <Navbar/>

                    <Switch>

                        <Route exact path="/" component={Home}/>
                        <Route exact path='/signin' component={SignIn}/>
                        <Route exact path='/userpage/:id/:userId' component={UserPage}/>
                        <Route exact path='/signup' component={Signup}/>
                        <Route exact path='/userpage/updatePage/:id/:userId' component={UserUpdatePage}/>
                        <Route exact path='/userpage/aboutuser/:id/:userId' component={AboutUser}/>
                        <Route exact path='/userpage/userEducation/:id/:userId' render={props=><UserEducationInfo    educationProp={this.educationProp} {...props} resetProp={this.resetProp} />} />
                        <Route exact path='/userpage/userWorkInfo/:id/:userId' render={props=><UserWorkInfo experienceProp={this.experienceProp} {...props} resetProp={this.resetProp}/> }/>
                        <Route exact path='/userpage/education/:id/:userId' render={props=><Education getProp={this.getProp} {...props} />}/>
                        <Route exact path='/userpage/experience/:id/:userId' render={props=><Experience getProp={this.getProp} {...props}/>}/>
                        <Route exact path='/joblink/jobpage/:index' render={props=> <CheckIfSignedIn {...props}><JobPage/><JobPage/></CheckIfSignedIn>}/>
                        
                    </Switch>
                    
                    <Footer/>             

                </div>
          
          </Router>
        )
    }
}

export default  App;




