import React from 'react';
import styles from './hero.module.scss';
import { Permanent_Marker, Pirata_One } from 'next/font/google';
import { ContactButtonWhite } from '../contact_button.js/contact_button';

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const pirataOne = Pirata_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.profile_image}>&nbsp;</div>
      <div className={styles.text_container}>
        <h4 className={pirataOne.className}>Helps you build your dream project with love and perfection.</h4>
        <div className={styles.description}>
          <h2 className={permanentMarker.className}>Ben-Hur Gican II</h2>
          <p>
            Frontend Developer <b> &bull;</b> Fullstack Developer <b> &bull;</b> UI/UX Designer
          </p>

          <ContactButtonWhite />
        </div>
      </div>
    </div>
  );
}
