import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Project</h1>
      <p className="text-gray-600 mb-6">Choose an option below:</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Signup
        </Link>
        <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;