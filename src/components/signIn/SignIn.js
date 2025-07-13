"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import axios from 'axios'
import styles from "./SignIn.module.css";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    router.push(`/addtransactions?isLoggedIn=true`);
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="text"
        placeholder="Username or Email"
        className={styles.customInput}
        value={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.customInput}
        value={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className={`${styles.signInButton} ${styles.transition}`}
      >
        Sign In
      </button>
    </form>
  );
}
