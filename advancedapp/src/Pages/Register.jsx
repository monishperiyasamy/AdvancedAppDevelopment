import React, { useState } from 'react';
import '../assets/Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import NavigationBar from '../component/NavigationBar';

function Register() {
    const initialStateErrors = {
        email: { required: false, invalid: false },
        password: { required: false, invalid: false, format: false },
        confirmPassword: { required: false, match: false },
        name: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [load, setLoad] = useState(false);
    const [register_inputs, setRegisterInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInput = (event) => {
        setRegisterInputs({ ...register_inputs, [event.target.name]: event.target.value });
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let error = { ...initialStateErrors };
        let hasError = false;

        if (!register_inputs.name) {
            error.name.required = true;
            hasError = true;
        }
        if (!register_inputs.email) {
            error.email.required = true;
            hasError = true;
        }
        if (!register_inputs.password) {
            error.password.required = true;
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

        if (register_inputs.confirmPassword === "") {
            error.confirmPassword.required = true;
            hasError = true;
        } else if (register_inputs.password !== register_inputs.confirmPassword) {
            error.confirmPassword.match = true;
            hasError = true;
        }

        if (!hasError) {
            setLoad(true)
             
            navigate('/admin')
            console.log("Registration successful!");
        }
        setErrors(error);
    };

    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <section className="register-block">
                <div className="container">
                    <div className="row ">
                        <div className="col register-sec">
                            <h2 className="text-center-register">Register</h2>
                            <form onSubmit={handleSubmit} className="register-form" action="">
                                <div className="form-group">
                                    <label htmlFor="name" className="text-uppercase">Name</label>
                                    <input type="text" onChange={handleInput} className="form-control" name="name" id="name" />
                                    {errors.name.required && <span className="text-danger">Name is required.</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-uppercase">Email</label>
                                    <input type="text" onChange={handleInput} className="form-control" name="email" id="email" />
                                    {errors.email.required && <span className="text-danger">Email is required.</span>}
                                    {errors.email.invalid && <span className="text-danger">Invalid Email</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-uppercase">Password</label>
                                    <div className="password-input-wrapper">
                                        <input
                                            className="form-control"
                                            onChange={handleInput}
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                        />
                                        <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                                        </span>
                                    </div>
                                    {errors.password.required && <span className="text-danger">Password is required.</span>}
                                    {errors.password.invalid && <span className="text-danger">Password should contain at least 8 characters.</span>}
                                    {errors.password.format && <span className="text-danger">Password must contain at least one uppercase letter, one lowercase letter, and one special character.</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword" className="text-uppercase">Confirm Password</label>
                                    <input
                                        className="form-control"
                                        onChange={handleInput}
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                    />
                                    {errors.confirmPassword.required && <span className="text-danger">Confirm your password</span>}
                                    {errors.confirmPassword.match && <span className="text-danger">Passwords do not match.</span>}
                                </div>
                                  {load ? (
                    <div className="text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                      </div>
                    </div>
                  ) : null}

                                <input type="submit" className="register" value="Register" />
                                <div className="clearfix"></div>
                                <div className="form-group">
                                    Already have an account? Please <Link to="/login">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;
