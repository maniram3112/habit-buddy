import React, { useState } from "react";
import components from '../../../components';
import constants from '../../../constants';
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import './LandingPage.css';
// import images from '../../../assets';

const {Navbar} = components;
const {Content} = constants;

const LandingPage = () =>{

    const [activeSection, setActiveSection] = useState(null);

    const handleAuth = (isAuthenticated, message) => {
        alert(message);
    };

    const handleSectionChange = (section) =>{
        setActiveSection(section);
    }

    return(
        <div className="landingPage_container bg-img">
            <Navbar onSectionChange={handleSectionChange}/>
            <div className={`landingPage-content ${activeSection ? 'shift-left' : ''}`}>
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
            <div className="landingPage-form">
                {
                    activeSection === 'signin' && (
                        <div className="signIn-bg">
                            <SignIn handleAuth={handleAuth}/>
                        </div>
                    )
                }
                {
                    activeSection === 'signup' && (
                        <div className="signUp-bg">
                            <SignUp handleAuth={handleAuth}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LandingPage;