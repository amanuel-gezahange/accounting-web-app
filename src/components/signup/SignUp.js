"use client";
import React, { useState } from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g. validation, API call)
  };

  return (
    <div className={styles.signUpContainer}>
      <h2 className={styles.heading}>Let’s get you started</h2>
      <h1 className={styles.title}>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.customInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength={3}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.customInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.customInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.customInput}
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          required
          minLength={6}
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
