"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your auth logic here
    router.push("/addtransactions");
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.heading}>Welcome back 👋</h2>
      <h1 className={styles.title}>Sign in to your account</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username or Email"
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
