import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md border border-black-400">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome, Sign up
          </h1>
          <p className="text-gray-600 text-center mb-6">
            It is our great pleasure to have you on board!
          </p>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-5 py-3 border rounded-lg text-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Create your Login"
              className="w-full px-5 py-3 border rounded-lg text-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Create your Password"
              className="w-full px-5 py-3 border rounded-lg text-lg focus:ring focus:ring-blue-300"
            />

            <div className="flex flex-col space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Sign up
              </button>
              <Link to="/login">
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg text-lg font-medium hover:bg-gray-300 transition">
                  Sign in
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
