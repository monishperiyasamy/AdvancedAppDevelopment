import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import '../assets/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from '../component/NavigationBar';

function Login() {
    const initialStateErrors = {
        email: { required: false, invalid: false },
        password: { required: false, invalid: false, format: false },
      
       
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [load, setLoad] = useState(false);
    const [register_inputs, setRegisterInputs] = useState({
       
        email: '',
        password: '',
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setRegisterInputs({ ...register_inputs, [name]: value });
    };

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let error = { ...initialStateErrors };
        let hasError = false;

        if (!register_inputs.email) {
            error.email.required = true;
            hasError = true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(register_inputs.email)) {
            error.email.invalid = true;
            hasError = true;
        }

        if (!register_inputs.password) {
            error.password.required = true;
            hasError = true;
        } else if (register_inputs.password.length < 8) {
            error.password.invalid = true;
            hasError = true;
        } else {
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/;
            if (!passwordPattern.test(register_inputs.password)) {
                error.password.format = true;
                hasError = true;
            }
        }

      
        if (!hasError) {
            setLoad(true);
            if (register_inputs.email.trim() === 'admin@gmail.com' && register_inputs.password.trim() === 'Admin@12345') {
                console.log("Login successful!");
                navigate('/admin');
            } else {
                navigate('/user');
                
            }
        }
        setErrors(error);
    };

    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <section className="login-block">
                <div className="login-container">
                    <div className="row ">
                        <div className="col login-sec">
                            <h2 className="text-center-login">Login</h2>
                            <form className="login-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" className="text-uppercase" >Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handleInput} value={register_inputs.email} />
                                    {errors.email.required && <span className="text-danger">Email is required.</span>}
                                    {!errors.email.required && errors.email.invalid && <span className="text-danger">Invalid Email</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-uppercase" >Password</label>
                                    <div className="password-input-wrapper">
                                        <input
                                            className="form-control"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            onChange={handleInput}
                                            value={register_inputs.password}
                                        />
                                        <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                                        </span>
                                    </div>
                                    {errors.password.required ? <span className="text-danger">Password is required.</span> : null}
                                    {errors.password.invalid ? <span className="text-danger">Password should contain at least 8 characters.</span> : null}
                                    {errors.password.format ? <span className="text-danger">Password must contain at least one uppercase letter, one lowercase letter, and one special character.</span> : null}
                                </div>
                                <div>
                                    {errors.custom_error ? <span className="text-danger">{errors.custom_error}</span> : null}
                                </div>
                                <input type="submit" className="btn btn-login float-right" value="Login" />
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    Create new account ? Please <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
