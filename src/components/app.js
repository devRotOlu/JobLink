
import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';

import history from '../history'
import Home from './home'
import Navbar from './accessories/navbar'; 
import Signup from './signUp';
import SignIn from './signIn';
import UserPage from './userPage'
import UserUpdatePage from './accessories/userUpdatePage'
import AboutUser from './accessories/userInfo';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './app.css'


class App extends React.Component{

    render(){

        return(

            <Router history={history}>

                <div className="container-fluid no-gutters p-0">

                    <Navbar/>

                    <Switch>

                        <Route exact path="/" component={()=><Home/>}/>
                        <Route exact path='/signin' component={()=><SignIn/>}/>
                        <Route exact path='/userpage' component={()=><UserPage/>}/>
                        <Route exact path='/signup' component={()=><Signup/>}/>
                        <Route exact path='/userupdatePage' component={()=><UserUpdatePage/>}/>
                        <Route exact path='/aboutuser' component={()=><AboutUser/>}/>
                        
                    </Switch>             

                </div>
          
          </Router>
        )
    }
}

export default App;




