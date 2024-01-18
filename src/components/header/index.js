'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

import { navLinks } from '@/assets/data';

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.nav_container}>
        {navLinks.map((nav) => {
          return (
            <Link className={pathName === nav.href ? styles.nav_active : styles.nav} href={nav.href} key={nav.name}>
              {nav.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
