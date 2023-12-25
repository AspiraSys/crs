import React from 'react'
import styles from './Header.module.css'

const Header = ({title, className}) => {
  return (
    <>
      <h1 className={`${styles.head} ${className}`}>{title}</h1>
    </>
  )
}

export default Header
