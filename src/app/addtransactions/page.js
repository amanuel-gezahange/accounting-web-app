'use client';
import React from 'react';
import styles from './AddTransaction.module.css';
import Navbar from '@/components/Navbar';

export default function AddTransaction() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.heading}>Add Transaction</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" defaultValue={today} />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" placeholder="Enter a description" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" placeholder="0.00" />
          </div>

          <div className={styles.inputGroup}>
            <label>Type</label>
            <div className={styles.radioGroup}>
              <label><input type="radio" name="type" value="sale" defaultChecked /> Sale</label>
              <label><input type="radio" name="type" value="expense" /> Expense</label>
            </div>
          </div>

          <button type="submit" className={styles.submit}>Add Transaction</button>
        </form>
      </main>
    </>
  );
}
