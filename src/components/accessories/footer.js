import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
 
  
class Footer extends React.Component {
 
    render() {
 
        return (
 
            <footer className="page-footer font-small unique-color-dark bg-dark text-white container-fluid p-0 py-3 mt-5 no-gutters">
 
                <div className="py-2 d-flex flex-column align-items-center flex-md-row justify-content-md-center m-0" style={{width:"100%"}}>
 
                    <div className="text-center text-md-right mb-4" style={{width:'fit-content'}}>
                        <h6 className="mb-0">Get connected with us on social networks:</h6>
                    </div>
                    <div className='ms-md-3' style={{width:'fit-content'}}>
                        <FontAwesomeIcon className='me-5 ms-5' icon={faFacebook} size="2x"/>
                        <FontAwesomeIcon className='me-5' icon={faTwitter} size="2x" style={{margin:'0 10px'}}/>
                        <FontAwesomeIcon className='me-5' icon={faLinkedin} size="2x"/>
                    </div>
 
                </div>
 
                <div className="container text-center text-md-left mt-3">
 
 
                    <div className="row mt-3">
 
 
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
 
 
                           <div>
                                <Link to='/' style={{textDecoration:'none', color:'white'}}><h6 className="text-uppercase font-weight-bold">JobLink</h6></Link>
                            </div>

                            <hr className="mb-4 mt-2 d-inline-block mx-auto" width="60px" />

                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consecteturadipisicing elit.
                            </p>

                        </div>
 
 
                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
 
 
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="mb-4 mt-2 d-inline-block mx-auto" width="60px" />
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>
 
                        </div>
 
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
 
 
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="mb-4 mt-2 d-inline-block mx-auto" width="60px" />
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
 
                        </div>
 
 
                    </div>
 
 
 
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>
 
 
                </div>
 
 
            </footer>
 
        );
 
    }
}
 
export default Footer;