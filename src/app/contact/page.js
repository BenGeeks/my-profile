import React from 'react';
import styles from './contact.module.css';

import { ContactInfo } from '@/assets/data';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {ContactInfo.map((info, index) => {
        return (
          <div className={styles.info} key={index}>
            <span className={styles.icon}>{info.icon}</span>
            <p>{info.data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPage;
