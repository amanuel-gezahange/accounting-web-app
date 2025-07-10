"use client";
import React from "react";
import styles from "./SignIn.module.css";

export default function SignIn() {
  return (
    <div>
      <h2 className={styles.heading}>Welcome back 👋</h2>
      <h1 className={styles.title}>Sign in to your account</h1>
      <form>
        <input
          type="text"
          placeholder="Username or Email"
          className={styles.customInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.customInput}
        />
        <button
          type="submit"
          className={`${styles.signInButton} ${styles.transition}`}
        >
          Sign In
        </button>
      </form>        
    </div>
  );
}
