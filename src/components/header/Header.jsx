import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

export default function Header() {
  return (
    <Link to="/">
      <header className={styles.header}>
        <span className={styles.title}>
          NETFLIX ROULETTE
        </span>
      </header>
    </Link>
  );
}
