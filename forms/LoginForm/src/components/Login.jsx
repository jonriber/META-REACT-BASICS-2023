import { useState } from "react";
import validateEmail from "../utils/validadeEmail";
import PasswordErrorMessage from "./PasswordErrorMessage";
import "../styles/Login.css";

function Login() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    });
    const [role, setRole] = useState("role");
  
    const getIsFormValid = () => {
      // Implement this function
      if (!firstName) return false
      if (!validateEmail(email)) return false
      if (password.length < 8) return false
      if(role === "role") return false
      return true;
    };
  
    const clearForm = () => {
      // Implement this function
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword({
      value: "",
      isTouched: false,
      })
      setRole("role")
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      alert("Account created!");
      clearForm();
    };
  
    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name" />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name" />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                value={password.value}
                onChange={(e) => setPassword({ ...password, value: e.target.value })}
                type={"password"}
                placeholder="Password"
                onBlur={() => { 
                 setPassword({ ...password, isTouched: true }); 
               }}
              />
              {password.value.length < 8 && password.isTouched &&
                <PasswordErrorMessage/>}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role" >Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    );
  }

  export default Login