import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { Link } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, isLoading } = useSignup()
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPass, setErrorPass] = useState('');




  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorPass('Passwords do not match');
      return;
    }
    else{
      setErrorPass('');
    }

    await signup(email, password)
  }
  const styl = { boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.25)' };

  return (
    <div className="login-container">
      <div style={styl} className="login-form">
        <form className="login" onSubmit={handleSubmit}>
          <h3 className="login-form-name">BMeet</h3>


          <input
            style={styl}
            className="login-input input-field"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            style={styl}
            className="login-input input-field"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            style={styl}
            className="login-input input-field"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />

          <button style={styl} className="login-button login-input signup-button" disabled={isLoading}>Sign up</button>
          {error? (error && <div className="error">{error}</div>):
          (errorPass && <div className="error">{errorPass}</div>)}


        </form>
        <Link to="/login">
          <h5 className="except"> Or Login</h5>

        </Link>

      </div>
    </div>

  )
}

export default Signup