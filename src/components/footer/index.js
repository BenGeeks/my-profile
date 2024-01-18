import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

import { navLinks } from '@/assets/data';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav_container}>
        {navLinks.map((nav) => {
          return (
            <Link className={styles.nav} href={nav.href} key={nav.name}>
              {nav.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
