"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ activePage }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/dashboard"
            className={activePage === "dashboard" ? styles.active : ""}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/addtransactions"
            className={activePage === "addtransactions" ? styles.active : ""}
          >
            Add Transaction
          </Link>
        </li>
        <li>
          <Link
            href="/debts"
            className={activePage === "debts" ? styles.active : ""}
          >
            Debts
          </Link>
        </li>
        <li>
          <Link
            href="/export"
            className={activePage === "export" ? styles.active : ""}
          >
            Export Data
          </Link>
        </li>
      </ul>
    </nav>
  );
}
