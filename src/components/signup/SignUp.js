'use client';
import React from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <div>
      <h2 className={styles.heading}>Let’s get you started</h2>
      <h1 className={styles.title}>Create an account</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          className={styles.customInput}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.customInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.customInput}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.customInput}
        />
        <button
          type="submit"
          className={`${styles.signUpButton} ${styles.transition}`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
