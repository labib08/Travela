
const SignUp = () => {
  return (
    <div className="signup">
        <input type="checkbox" id="chk" aria-hidden="true"/>
        <div className="signup-main">
            <form>
                <label htmlFor = "chk" aria-hidden="true">Sign Up</label>
                <input type= "text" name="txt" placeholder="Username" required/>
                <input type= "email" name="email" placeholder="Email" required/>
                <input type= "Password" name="password" placeholder="Password" required/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="login">
            <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type= "email" name="email" placeholder="Email" required/>
                <input type= "Password" name="password" placeholder="Password" required/>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp