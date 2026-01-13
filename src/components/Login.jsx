import React from "react";
import { Link } from "react-router";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };
  return (
    <div className="w-full max-w-md shrink-0 shadow-2xl p-15">
      <h2 className="text-center font-semibold text-4xl">Login</h2>
      <form onSubmit={handleSubmit} className="fieldset ">
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input"
          placeholder="Email"
          required
        />
        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input"
          placeholder="Password"
          required
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
        <div className="mt-5">
          <p>Already have an account? <Link to="/auth/register" className="link link-hover text-blue-500 font-semibold">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
