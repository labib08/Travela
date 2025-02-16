import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import './SignUp.css';
interface FormData {
    name: string;
    email: string;
    password: string;
  }
const SignUp = () => {
    const url = "http://localhost:5000";
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
      }
      const handleSubmit =async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await axios.post(`${url}/api/user/create`, formData);
        if (response.data.success) {
          console.log("yay");
          toast.success("User registered successfully");
          localStorage.clear();
          localStorage.setItem("token", response.data.token);
          navigate('/');
        }
        else {
          toast.error(response.data.message);
        }
      }
  return (
    <div className="signup">
      <ToastContainer />
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