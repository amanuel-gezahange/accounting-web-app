'use client';
import React from 'react';
import styles from './AddTransaction.module.css';

export default function AddTransaction() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Add Transaction</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input type="date" id="date" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <input type="text" id="description" placeholder="Enter a description" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="amount" className={styles.label}>Amount</label>
          <input type="number" id="amount" placeholder="0.00" className={styles.input} />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Type</label>
          <div className={styles.radioGroup}>
            <label><input type="radio" name="type" value="sale" defaultChecked /> Sale</label>
            <label><input type="radio" name="type" value="expense" /> Expense</label>
          </div>
        </div>

        <button type="submit" className={styles.submit}>Add Transaction</button>
      </form>
    </main>
  );
}
