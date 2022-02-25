import React from 'react'
// import Navbar from './navbar'
import Body from './accessories/body'
import Footer from './accessories/footer'
 

class Home extends React.Component {

  
    render() {
 
        return (
 
 
               <div className="container-fluid m-0 no-gutters p-0" >

                    <Body/>
                    <Footer/>
 
                </div>
 
 
        );
 
    }
}
 
export default Home;
