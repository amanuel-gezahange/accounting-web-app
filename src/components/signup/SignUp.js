"use client";
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
          value={"username"}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.customInput}
          value={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.customInput}
          value={"password"}
          onChange={(e) => setPassport(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.customInput}
          value={"confirmedPassword"}
          onChange={(e) => setConfirmedPassport(e.target.value)}
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
