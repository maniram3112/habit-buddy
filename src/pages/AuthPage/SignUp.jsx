import React, { useState } from "react";

const SignUp = ({handleAuth}) => {

    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        handleAuth(true, "Sign up Successful");
    }

    return(
        <div className="signUp_container">
            <form onSubmit={handleSignUp}>
                <h2>Sign Up</h2>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Mail Address"
                required
                />
                <input
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter a Username"
                required
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create your password"
                required
                />
                <input
                type="password"
                placeholder="Re-enter your password"
                required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;