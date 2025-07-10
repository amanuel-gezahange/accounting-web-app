"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import SignIn from "@/components/signIn/SignIn";
import SignUp from "@/components/signup/SignUp";

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className={styles.homeContainer}>
      {isSignIn ? (
        <div>
          <SignIn />
          <p className={styles.linkText}>
            Don’t have an account?{" "}
            <button onClick={() => setIsSignIn(false)} className={styles.linkButton}>
              Sign up
            </button>
          </p>
        </div>
      ) : (
        <SignUp />
      )}
    </div>
  );
}
