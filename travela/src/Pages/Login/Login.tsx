import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
interface FormData {
    email: string;
    password: string;
  }
const Login = () => {
    const [formData, setFormData] = useState<FormData>({
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
                    <label htmlFor = "chk" aria-hidden="true" className='signup-main-label' >Login</label>
                    <input type= "email" name="email" placeholder="Email" onChange={handleChange} required/>
                    <input type= "Password" name="password" placeholder="Password" onChange={handleChange} required/>
                    <button className="signup-button">Login</button>
                    <div className="separator-container">
                        <div className="separator-line"></div>
                        <div className="separator-text">Or Continue With</div>
                        <div className="separator-line"></div>
                    </div>
                    <button className="google-signup">
                        <FcGoogle className="google-logo" />
                        <span>Login with Google</span>
                    </button>
                    <p>Don't have an account? <span className="signup-span"> <Link to ="/signup" className="signup-link">Sign up </Link> </span></p>
                </form>

            </div>
        </div>
  )
}

export default Login