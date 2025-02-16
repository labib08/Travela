import { Alert, CircularProgress, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
interface FormData {
    email: string;
    password: string;
  }
const Login = () => {
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
        email: '',
        password: ''
      })
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
      }
      const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await axios.post(`${url}/api/user/login`, formData);
        if (response.data.success) {

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
          console.log(message)
          //toast.error(response.data.message);
          setLoading(false);
          setOpen(true);
        }
      }
  return (
    <div className="signup">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className="signup-main">
                <form onSubmit={handleSubmit}>
                    <label htmlFor = "chk" aria-hidden="true" className='signup-main-label' >Login</label>
                    <input type= "email" name="email" placeholder="Email" onChange={handleChange} required/>
                    <input type= "Password" name="password" placeholder="Password" onChange={handleChange} required/>
                    <button className="signup-button" disabled={loading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {loading ? (
                      <>
                        <CircularProgress size={24} color="inherit" style={{ marginRight: 8 }} />
                        Logging in
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                    <div className="separator-container">
                        <div className="separator-line"></div>
                        <div className="separator-text">Or Continue With</div>
                        <div className="separator-line"></div>
                    </div>
                    <button className="google-signup">
                        <FcGoogle className="google-logo" />
                        <span>Login with Google</span>
                    </button>
                    <p>Don't have an account? <span className="signup-span"> <Link to ="/signup" className="signup-link">Log In </Link> </span></p>
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

export default Login