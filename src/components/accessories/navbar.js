
import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import '../app.css';
 
class Navbar extends React.Component {

  render() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className=" d-flex flex-row justify-content-around ">
          <Link  className="navbar-brand" to='/'><h1 className='display-3'>JobLink</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <Link  className="nav-link active" aria-current="page" to='/'>
                   <h4 className='h4' style={{color:'yellowGreen'}}>Home</h4>
                  </Link>
              </li>
              <li className="nav-item">
                
                <Link  className="nav-link" to='/signin'><h4 className='h4'>Sign In</h4></Link>

              </li>
              <li className="nav-item">
                <Link  className="nav-link" to='/signup'><h4 className='h4'>Sign Up</h4></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    );
  }
}
export default Navbar;

/*
<form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>


/* 
            <nav className="container-fluid navbar navbar-expand-lg navbar-light sticky-top">

                <div>
                    <a className="navbar-brand" href="/">

                    <div style={{position:'relative'}}>

                        <FontAwesomeIcon icon={faBriefcase} style={{position:"absolute", marginTop:'28px'}}/>

                        <span style={{ color: "red", fontSize: "50px", fontWeight: "bold", marginLeft:'10px' }}>
                        Joblink
                        </span>

                        <span style={{ color: "red", fontSize: "25px", fontWeight: "bold",  }}>
                        .
                        </span>

                    </div>

                    </a>
                </div>
                
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button> */
        
            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">

            //         <ul className="navbar-nav ml-auto my-20 ">

            //             <li className="nav-item active">
            //             <a className="nav-link" href="#">
            //                 Home <span className="sr-only">(current)</span>
            //             </a>
            //             </li>
            //             <li className="nav-item">
            //             <a className="nav-link" href="#">
            //                 Employers
            //             </a>
            //             </li>
            //             <li className="nav-item">
            //             <a className="nav-link" to="/signin">
            //                 Login <span className="sr-only">(current)</span>
            //             </a>
                        
            //             </li>
            //             <li className="nav-item">
            //             <NavLink className="nav-link btn btn-danger" to="/signup">
            //                 Signup
            //             </NavLink>
            //             </li>

            //         </ul>
                    
            //     </div>
            // </nav> */}
