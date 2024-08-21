import React from 'react';
import styles from './contact.module.scss';

import { ContactInfo } from '@/assets/data';

const Contact = () => {
  return (
    <section className={styles.container} id="contact_info">
      <h2>Contact Information</h2>
      <div className={styles.contact__info}>
        {ContactInfo.map((info, index) => {
          return (
            <div className={styles.info} key={index}>
              <span className={styles.icon}>{info.icon}</span>
              {info.data}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
