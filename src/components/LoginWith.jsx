import React from "react";
import GoogleLogin from "./GoogleLogin";
import GithubLogin from "./GithubLogin";

const LoginWith = () => {
  return (
    <div>
      <h2 className="mb-5 font-semibold text-xl text-accent-foreground">
        Login with
      </h2>
      <GoogleLogin />
      <GithubLogin />
    </div>
  );
};

export default LoginWith;
