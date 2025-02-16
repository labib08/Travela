import { Alert, CircularProgress, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './SignUp.css';
interface FormData {
    name: string;
    email: string;
    password: string;
  }
const SignUp = () => {
    const url = "http://localhost:5000";
    const [open, setOpen] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean>();
    const handleClose = () => {
      setOpen(false);
    };
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<String>("");
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
        setLoading(true);
        const response = await axios.post(`${url}/api/user/create`, formData);

        if (response.data.success) {
          console.log("yay");
          setIsSuccess(true);
          setOpen(true);
          setMessage("User registered successfully");
          //toast.success("User registered successfully");
          localStorage.clear();
          localStorage.setItem("token", response.data.token);
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 5000);

        }
        else {
          setIsSuccess(false)
          setMessage(response.data.message);
          //toast.error(response.data.message);
          setLoading(false);
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
                <button className="signup-button" disabled={loading}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
                </button>
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
            {isSuccess ? (
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
              >
                {message}
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Alert
                onClose={handleClose}
                severity="error"
              >
                {message}
              </Alert>
            </Snackbar>
          )}
        </div>
    </div>
  )
}

export default SignUp