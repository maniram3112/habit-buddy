import React from "react";
import components from '../../../components';
import constants from '../../../constants';
import './LandingPage.css';
// import images from '../../../assets';

const {Navbar} = components;
const {Content} = constants;

const LandingPage = () =>{
    return(
        <div className="landingPage_container">
            {/* <img src={images.landingPageBg} alt="Landing page"/> */}
            <Navbar/>
            <div className="landingPage-content">
                <div className="content">
                    <p>{Content.whyHabits.title}</p>
                    <p>{Content.whyHabits.text}</p>
                </div>
                <div className="content">
                    <p>{Content.benefitsOfGoodHabits.title}</p>
                    <p>{Content.benefitsOfGoodHabits.text}</p>
                </div>
                <div className="content">
                    <p>{Content.disadvantagesOfBadHabits.title}</p>
                    <p>{Content.disadvantagesOfBadHabits.text}</p>
                </div>
                <div className="content">
                    <p>{Content.ConsistencyImportance.title}</p>
                    <p>{Content.ConsistencyImportance.text}</p>
                </div>
            </div>
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        </div>
    )
}

export default LandingPage;