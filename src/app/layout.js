import './globals.css';
import styles from './page.module.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Ben-Hur Gican II',
  description: 'A web developer profile page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
