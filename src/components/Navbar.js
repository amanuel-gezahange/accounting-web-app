"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ activePage }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={activePage === "dashboard" ? styles.active : ""}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/addtransactions" className={activePage === "add" ? styles.active : ""}>
            Add Transaction
          </Link>
        </li>
        <li>
          <Link href="/debts" className={activePage === "debts" ? styles.active : ""}>
            Debts
          </Link>
        </li>
        <li className={styles.hiddenLink}>
          <Link href="/export">Export Data</Link>
        </li>
      </ul>
    </nav>
  );
}
