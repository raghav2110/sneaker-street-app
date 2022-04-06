import "../../styles/loginPage.css"
import { Navbar } from "../../components";
import { Link } from "react-router-dom";

export function Login(){
    return(
        <>
            <Navbar/>
            <div className="main-wrapper-login">
                <div className="login-wrapper">
                    <div className="login-text">Login</div>
                    <div className="input-area">
                        <form className="form-area">
                            <div>
                                <label for="Email" className="email-label">Email</label>
                                <input type="email" id="Email" placeholder="youremail@gmail.com" className="email-input" />
                            </div>
                            <div className="password-wrapper">
                                <label for="Password" className="email-label">Password</label>
                                <input type="password" id="Password" placeholder="Your Password" className="email-input" />
                                <div className="toggle-icon">
                                    <span><i className="fa fa-eye-slash fa-lg"></i></span>
                                </div>
                            </div>
                            <div className="remember-forget-area">
                                <div className="remember-area">
                                    <input type="checkbox" />
                                    <label for="Password" className="remember-label">Remember Me</label>
                                </div>
                                <label for="Password" className="email-label">Forget Password?</label>
                            </div>
                            <div className="button-wrapper">
                                <button type="submit" className="btn btn-primary btn-login">Login</button>
                            </div>
                        </form>
                    </div>
                    <p>Don't Have An Account ? <a href="/pages/signupPage.html">
                        <Link to="/SignUp">
                            <button className="btn btn-sign-up">Sign Up</button>
                        </Link>
                    </a>.</p>
                </div>
            </div>
    </>
    )
}