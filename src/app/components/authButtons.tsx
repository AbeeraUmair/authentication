'use client'
import React, { useState } from 'react';
import { SignInButton,SignUpButton } from '@clerk/nextjs';

const AuthButtons = () => {
  // State to toggle between Sign In and Sign Up
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex justify-center">
      {isSignIn ? (
        <SignInButton>
          <button
            onClick={() => setIsSignIn(false)}
            className="text-white font-bold w-[10rem] my-8 py-2 px-6 rounded-3xl flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            Sign In
          </button>
        </SignInButton>
      ) : (
        <SignUpButton>
          <button
            onClick={() => setIsSignIn(true)}
            className="text-white font-bold w-[10rem] my-8 py-2 px-6 rounded-3xl flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            Sign Up
          </button>
        </SignUpButton>
      )}
    </div>
  );
};

export default AuthButtons;
