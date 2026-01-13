import React from "react";
import { Link } from "react-router";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log({ email, password, name });
  };
  return (
    <div className="w-full max-w-md shrink-0 shadow-2xl p-15">
      <h2 className="text-center font-semibold text-4xl">Register</h2>
      <form onSubmit={handleSubmit} className="fieldset ">
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="Name"
          required
        />
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
        <button type="submit" className="btn btn-neutral mt-4">
          Register
        </button>
        <div className="mt-5">
          <p>
            Already have an account? 
            <Link
              to="/auth/login"
              className="link link-hover text-blue-500 font-semibold px-2"
            >
               Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
