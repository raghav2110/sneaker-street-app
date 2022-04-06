import "../../styles/signup.css";
import { Navbar } from "../../components";

export function SignUp(){
    return(
        <>
        <Navbar />
        <div className="main-wrapper-login">
            <div className="login-wrapper">
                <div className="login-text">Sign Up</div>
                <div className="input-area">
                    <form className="form-area">
                        <div>
                            <label for="Name" className="email-label">Name</label>
                            <input type="" id="Name" placeholder="Enter Your Name" class="email-input" />
                        </div>
                        <div>
                            <label for="Email" className="email-label">Email</label>
                            <input type="email" id="Email" placeholder="youremail@gmail.com" class="email-input" />
                        </div>
                        <div className="password-wrapper">
                            <label for="Password" className="email-label">Password</label>
                            <input type="password" id="Password" placeholder="Your Password" class="email-input" />
                            <div className="toggle-icon">
                                <span><i className="fa fa-eye-slash fa-lg"></i></span>
                            </div>
                        </div>
                        <div className="password-wrapper">
                            <label for="ConfirmPass" className="email-label">Confirm Password</label>
                            <input type="password" id="ConfirmPass" placeholder="Enter Same Password" class="email-input" />
                        </div>
                        <div className="button-wrapper">
                            <button type="submit" className="btn btn-primary btn-login">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}