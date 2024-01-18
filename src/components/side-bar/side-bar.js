'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from './side-bar.module.css';

const Sidebar = () => {
  const pathName = usePathname();
  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Work Experience', href: '/experience' },
    { name: 'Training Certificates', href: '/certificates' },
    { name: 'Educational Background', href: '/education' },
    { name: 'Contact Information', href: '/contact' },
  ];
  return (
    <div className={styles.side_bar}>
      <div className={styles.profile_image}>
        <Image src="https://i.ibb.co/47fjkMZ/1705248700683.jpg" fill alt="Picture of Ben Gican II" />
      </div>
      <div className={styles.nav_container}>
        {navLinks.map((nav) => {
          return (
            <Link className={pathName === nav.href ? styles.nav_active : styles.nav} href={nav.href} key={nav.name}>
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
