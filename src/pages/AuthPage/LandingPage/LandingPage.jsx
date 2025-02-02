import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import components from '../../../components';
import constants from '../../../constants';
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import './LandingPage.css';

const { Navbar } = components;
const { Content } = constants;

const LandingPage = ({ handleAuth }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [user, ] = useState({ email: 'test@gmail.com', password: 'password' });
    const navigate = useNavigate();

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleAuthWrapper = (isAuthenticated, message) => {
        handleAuth(isAuthenticated, message);
        if (isAuthenticated) {
            navigate('/home');
        }
    };

    return (
        <div className="landingPage_container bg-img">
            <Navbar onSectionChange={handleSectionChange} />
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
                {activeSection === 'signin' && (
                    <div className="signIn-bg bg">
                        <SignIn handleAuth={handleAuthWrapper} />
                    </div>
                )}
                {activeSection === 'signup' && (
                    <div className="signUp-bg">
                        <SignUp handleAuth={handleAuthWrapper} />
                    </div>
                )}
                {activeSection === 'credential' && (
                    <div className="credentials-bg">
                        <h2>User Credentials</h2>
                        <div className="credentials-form">
                            <label>
                                <p>Email:</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    readOnly
                                />
                            </label>
                            <label>
                                <p>Password:</p>
                                <input
                                    type="text"
                                    name="password"
                                    value={user.password}
                                    readOnly
                                />
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
