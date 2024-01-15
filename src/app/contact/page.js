import React from 'react';
import styles from './contact.module.css';

import { ContactInfo } from '@/assets/data';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {ContactInfo.map((info) => {
        return (
          <div className={styles.info} key={info.data}>
            <span className={styles.icon}>{info.icon}</span>
            <p>{info.data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPage;
