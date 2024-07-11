import React from "react";
import components from '../../../components';
import './LandingPage.css';
// import images from '../../../assets';

const {Navbar} = components;

const LandingPage = () =>{
    return(
        <div className="landingPage_container">
            {/* <img src={images.landingPageBg} alt="Landing page"/> */}
            <Navbar/>
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        </div>
    )
}

export default LandingPage;