import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../../assests/images/google.png';
import gitHubLogo from '../../../assests/images/github (1).png';
import facebookLogo from '../../../assests/images/facebook.png';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [err, setErr] = useState("");
    const { loginUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.from?.pathname;

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        loginUser(userEmail, userPassword)
            .then(result => {
                console.log(result.user);
                setErr("");
                toast.success("Login Successful")
                navigate(from, { replace: true });
            })
            .catch(err => {
                setErr(err.message);
                toast.error(err.message.slice(10));
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div>
            <div className={`box mx-auto mt-10`}>
                <form onSubmit={handleLogin} autocomplete="off">
                    <h2 className='text-xl'>Log in</h2>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link to="#">Forgot Password ?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className='third-party-login-div'>
                <button><img className='third-party-login-img' src={googleLogo} alt="img" /></button>
                <button><img className='third-party-login-img' src={gitHubLogo} alt="img" /></button>
                <button><img className='third-party-login-img' src={facebookLogo} alt="img" /></button>
            </div>
        </div>
    );
};

export default Login;