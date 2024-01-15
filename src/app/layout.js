import Sidebar from '@/components/side-bar/side-bar';
import Footer from '@/components/footer';

import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  title: 'Ben-Hur Gican II',
  description: 'A web developer profile page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
