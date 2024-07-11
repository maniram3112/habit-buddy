import React, { useState } from "react";

const SignIn = ({handleAuth}) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) =>{
        e.preventDefault();

        if(email === 'test@gmail.com' && password === 'password'){
            handleAuth(true, "Sign in successful");
        }
        else{
            handleAuth(false, "Invalid credentials")
        }
    }
    return(
        <div className="signIn_container">
            <form onSubmit={handleSignIn}>
                <h2>Sign In</h2>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail address"
                required
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                />
                <button type="submit">SignIn</button>
            </form>
        </div>
    );
}

export default SignIn;