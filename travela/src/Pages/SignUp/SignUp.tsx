import { FcGoogle } from "react-icons/fc";
import './SignUp.css';
const SignUp = () => {
  return (
    <div className="signup">
        <input type="checkbox" id="chk" aria-hidden="true"/>
        <div className="signup-main">
            <form>
                <label htmlFor = "chk" aria-hidden="true" className='signup-main-label'>Sign Up</label>
                <input type= "email" name="email" placeholder="Email" required/>
                <input type= "Password" name="password" placeholder="Password" required/>
                <button className="signup-button">Sign up</button>
                <div className="separator-container">
                    <div className="separator-line"></div>
                    <div className="separator-text">Or Continue With</div>
                    <div className="separator-line"></div>
                </div>
                <button className="google-signup">
                    <FcGoogle className="google-logo" />
                    <span>Sign up with Google</span>
                </button>
                <p>Already have an account? <span className="signup-span"> Login </span></p>
            </form>

        </div>
    </div>
  )
}

export default SignUp