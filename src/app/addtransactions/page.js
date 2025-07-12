'use client';
import React, { useState } from 'react';
import styles from './AddTransaction.module.css';

export default function AddTransaction() {
  const [date, setDate] = useState('2025-07-10');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('sale');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !amount.trim()) {
      setError('Please enter both description and amount.');
      return;
    }

    // If valid, reset error and proceed (you can send data here)
    setError('');
    console.log({ date, description, amount, type });

    // Reset form (optional)
    setDescription('');
    setAmount('');
    setType('sale');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Add Transaction</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="amount" className={styles.label}>Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Type</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="sale"
                checked={type === 'sale'}
                onChange={() => setType('sale')}
              />
              Sale
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={type === 'expense'}
                onChange={() => setType('expense')}
              />
              Expense
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submit}>
          Add Transaction
        </button>
      </form>
    </main>
  );
}
