import React from 'react';
import styles from './contact_button.module.scss';

export const ContactButtonWhite = () => {
  return (
    <a href="#contact_info" className={styles.btn}>
      Get Contact Information
    </a>
  );
};

export const ContactButtonGreen = () => {
  return (
    <a href="#contact_info" className={`${styles.btn} ${styles.btn_green}`}>
      Get Contact Information
    </a>
  );
};
