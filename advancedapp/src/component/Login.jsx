import React from 'react';
import '../assets/Login.css'


const LoginForm = () => {
  return (
    <div className="login-container">
      <form>
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" placeholder="Name" />
        <label>Email</label>
        <input type="text" placeholder="Email id" />
        <label>Password</label>
        <input type="text" placeholder="Password" />
        <div className="container">
          <button>Done</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
