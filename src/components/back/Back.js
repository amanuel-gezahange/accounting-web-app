'use client'
import React from 'react'
import styles from './Back.module.css'
import { useRouter } from 'next/navigation'

export default function Back() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <button className={styles.backButton} onClick={handleClick}>
      ← Back
    </button>
  )
}
