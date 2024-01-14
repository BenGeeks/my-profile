import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Ben-Hur Vergara Gican II</h1>
      </div>

      <ul className={styles.nav_container}>
        <li className={styles.nav}>
          <Link href="/experience"> Work Experience</Link>{' '}
        </li>
        <li className={styles.nav}>
          <Link href="/courses">Courses and Trainings</Link>{' '}
        </li>
        <li className={styles.nav}>
          <Link href="/education">Education</Link>{' '}
        </li>
        <li className={styles.nav}>
          <Link href="/contact">Contact Me</Link>{' '}
        </li>
      </ul>
    </header>
  );
};

export default Header;
