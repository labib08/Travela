import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import './SignUp.css';
interface FormData {
    name: string;
    email: string;
    password: string;
  }
const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
      }
      const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
      }
  return (
    <div className="signup">
        <input type="checkbox" id="chk" aria-hidden="true"/>
        <div className="signup-main">
            <form onSubmit={handleSubmit}>
                <label htmlFor = "chk" aria-hidden="true" className='signup-main-label'>Sign Up</label>
                <input type= "text" name="name" placeholder="Name" onChange={handleChange} required/>
                <input type= "email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type= "Password" name="password" placeholder="Password" onChange={handleChange} required/>
                <button className="signup-button">Sign up</button>
                <div className="separator-container">
                    <div className="separator-line"></div>
                    <div className="separator-text">Or Continue With</div>
                    <div className="separator-line"></div>
                </div>
                <button className="google-signup" >
                    <FcGoogle className="google-logo" />
                    <span>Sign up with Google</span>
                </button>
                <p>Already have an account? <span className="signup-span"> <Link to ="/login" className="signup-link"> Login </Link> </span></p>
            </form>

        </div>
    </div>
  )
}

export default SignUp