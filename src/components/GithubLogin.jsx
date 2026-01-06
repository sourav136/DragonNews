import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubLogin = () => {
  return (
    <button className="btn btn-outline w-full text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white">
      <FaGithub /> Login with Github
    </button>
  );
};

export default GithubLogin;
