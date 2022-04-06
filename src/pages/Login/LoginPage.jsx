import "../../styles/loginPage.css"
import { Navbar } from "../../components";

export function Login(){
    return(
        <>
            <Navbar/>
            <div class="main-wrapper">
                <div class="login-wrapper">
                    <div class="login-text">Login</div>
                    <div class="input-area">
                        <form class="form-area">
                            <div>
                                <label for="Email" class="email-label">Email</label>
                                <input type="email" id="Email" placeholder="youremail@gmail.com" class="email-input" />
                            </div>
                            <div class="password-wrapper">
                                <label for="Password" class="email-label">Password</label>
                                <input type="password" id="Password" placeholder="Your Password" class="email-input" />
                                <div class="toggle-icon">
                                    <span><i class="fa fa-eye-slash fa-lg"></i></span>
                                </div>
                            </div>
                            <div class="remember-forget-area">
                                <div class="remember-area">
                                    <input type="checkbox" />
                                    <label for="Password" class="remember-label">Remember Me</label>
                                </div>
                                <label for="Password" class="email-label">Forget Password?</label>
                            </div>
                            <div class="button-wrapper">
                                <button type="submit" class="btn btn-primary btn-login">Login</button>
                            </div>
                        </form>
                    </div>
                    <p>Don't Have An Account ? <a href="/pages/signupPage.html"><button class="btn btn-sign-up">Sign Up</button></a>.</p>
                </div>
            </div>
    </>
    )
}