import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const {login} = useAuth();
  const [error, setError] = useState(null);
  const [onProcess, setOnProcess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setOnProcess(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const user = await login(email, password);
      if (!user.emailVerified) {
        setError("Please verify your email before logging in.");
        return;
      }
      form.reset();
      navigate(from, { replace: true });
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setOnProcess(false);
    }
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
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button type="submit" className="btn btn-neutral mt-4">
          {onProcess ? "Logging in..." : "Login"}
        </button>
        <div className="mt-5">
          <p>Don't have an account? <Link to="/auth/register" className="link link-hover text-blue-500 font-semibold px-2">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
