'use client';
import React, { useState } from 'react';
import './home.css';

export default function Home() {
  // Toggle between Sign In and Sign Up forms
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="homeContainer bg-blue-50 min-h-screen flex items-center justify-center px-4">
      <div className="signIn_Container shadow-lg rounded-xl w-full max-w-md font-sans">
        {isSignIn ? (
          // ===== Sign In Form =====
          <>
            <h2 className="text-sm text-gray-500 mb-1">Welcome back 👋</h2>
            <h1 className="text-2xl font-bold text-blue-900 mb-6">Sign in to your account</h1>
            <form>
              <input
                type="text"
                placeholder="Username or Email"
                className="customInput"
              />
              <input
                type="password"
                placeholder="Password"
                className="customInput"
              />
              <button
                type="submit"
                className="signInButton transition-colors duration-300 hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
            <p className="text-sm text-center mt-4 text-gray-600">
              Don’t have an account?{' '}
              <button
                onClick={() => setIsSignIn(false)}
                className="text-blue-600 font-medium hover:underline bg-transparent border-none"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          // ===== Sign Up Form =====
          <>
            <h2 className="text-sm text-gray-500 mb-1">Let’s get you started</h2>
            <h1 className="text-2xl font-bold text-blue-900 mb-6">Create an account</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                className="customInput"
              />
              <input
                type="email"
                placeholder="Email"
                className="customInput"
              />
              <input
                type="password"
                placeholder="Password"
                className="customInput"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="customInput"
              />
              <button
                type="submit"
                className="signInButton transition-colors duration-300 hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setIsSignIn(true)}
                className="text-blue-600 font-medium hover:underline bg-transparent border-none"
              >
                Sign in
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
