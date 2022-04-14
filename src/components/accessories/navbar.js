
import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { connect } from "react-redux";

import {removeUser} from '../../actions/actions'
import '../app.css';
 
const Navbar=({myInfo,removeUser})=> {

  // useEffect(()=>{
  //   removeUser();
  //   console.log('in here')
  // },[])

  const checkIfSignedIn=()=> {

    if (Object.keys(myInfo).length) {

      return '/'
    
    }

    return '/signin'

  }

  
    return (

      <nav className="navbar  navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'green'}}>
      <div className="container-fluid">
        <Link className="navbar-brand ms-3" to='/' style={{fontSize:'50px'}}>JobLink</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-inline-flex d-none" style={{opacity:'0'}} >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu d-flex" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
           
          </ul>
          <div className=''>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-lg-row"  >

                <li className="nav-item me-lg-5 d-flex flex-row justify-content-center align-items-center d-lg-inline-flex mt-lg-0 mt-2 ">
                  <Link className="nav-link flex-grow-1 text-center" to='/' style={{minWidth:'fit-content'}} >Home</Link>
                </li>
                <li className="nav-item me-lg-5 d-flex flex-row justify-content-center align-items-center d-lg-inline-flex">
                  <Link className="nav-link flex-grow-1 text-center" to={checkIfSignedIn()}>{Object.keys(myInfo).length? 'Sign Out' : 'Sign In'}</Link>
                </li>
                <li className="nav-item me-lg-5 d-flex flex-row justify-content-center align-items-center d-lg-inline-flex">
                  <Link className="nav-link flex-grow-1 text-center" to='/signup' >Sign Up</Link>
                </li>

              </ul>

          </div>
        </div>
      </div>
    </nav>
    
    );
}

const mapStateToProps=({myInfo})=>{

  return{
    myInfo
  }

}

export default connect(mapStateToProps,{
  removeUser
}) (Navbar);

