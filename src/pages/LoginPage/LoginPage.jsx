import "./login-page.css";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useState } from "react";
import { validateEmail } from "../../components/Newsletter/Form/Utils";

function LoginPage() {

    const { theme } = useContext(ThemeContext);
    const logoImage = theme === 'dark-mode' ? './logos/cuddle-craze-light.png' : './logos/cuddle-craze-dark.png';

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    // const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        // Rules for form validation
        // const isFirstNameValid = firstName.trim() !== ''; // First name cannot be empty
        const isEmailValid = validateEmail(email); // Email must be valid
        const isPasswordValid = password.isTouched && password.value.length >= 8; // Password must be at least 8 characters long
        //   const isRoleValid = role === 'individual' || role === 'business'; // Role must be either individual or business

        // Form is valid if all rules are satisfied
        return isEmailValid && isPasswordValid;  // && isPasswordValid && isRoleValid && isFirstNameValid && 
    };

    const clearForm = () => {
        // Clear form fields
        // setFirstName('');
        // setLastName('');
        setEmail('');
        setPassword({
            value: '',
            isTouched: false,
        });
        // setRole('role');
    };

    const handlePasswordChange = (e) => {
        // Update the password value and set isTouched to true
        setPassword({
            value: e.target.value,
            isTouched: true,
        });
    };

    const handleSubmit = (e) => {
        // Prevent the default browser refresh
        e.preventDefault();
        if (getIsFormValid()) {
            alert("Subscribed!");
            clearForm();
        } else {
            alert("Form is not valid. Please check your inputs.");
        }
    };

    return (
        <div className="container">
            <div id="login" className="login-container">
                <div className="login-content">
                    <div className="form-container container">
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <h2 className="form-title">Log In</h2>
                                {/* <div className="Field">
                                    <label>
                                        First name <sup>*</sup>
                                    </label>
                                    <input
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="Field">
                                    <label>Last name</label>
                                    <input
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div> */}
                                <div className="Field">
                                    <label>
                                        Email address <sup>*</sup>
                                    </label>
                                    <input
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="Field">
                                    <label>
                                        Password <sup>*</sup>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password.value}
                                        onChange={handlePasswordChange}
                                        onBlur={() =>
                                            setPassword((prev) => ({ ...prev, isTouched: true }))
                                        }
                                    />
                                    {password.isTouched && password.value.length < 8} {/* && (
                                        <PasswordErrorMessage />
                                    )*/ }
                                </div>
                                {/* <div className="Field">
                                    <label>
                                        Role <sup>*</sup>
                                    </label>
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <option value="role">Role</option>
                                        <option value="individual">Individual</option>
                                        <option value="business">Business</option>
                                    </select>
                                </div> */}
                                <button className="button-form" type="submit" disabled={!getIsFormValid()}>
                                    Log In
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <img className="login-image" src={logoImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;