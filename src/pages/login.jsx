import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-black-400">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome, Log into your account
          </h1>
          <p className="text-gray-500 text-center mb-6">
            It is our great pleasure to have you on board!
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter your Login"
              className="w-full px-5 py-3 border rounded-lg text-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-5 py-3 border rounded-lg text-lg focus:ring focus:ring-blue-300"
            />

            <div className="flex flex-col items-center space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Login
              </button>
              <Link to="/signup" className="text-blue-500 hover:underline text-sm">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
