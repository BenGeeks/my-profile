import React from 'react';
import styles from './personality.module.scss';

import { ContactButtonWhite } from '../contact_button.js/contact_button';

const Personality = () => {
  return (
    <section className={styles.container}>
      <h2>Personality</h2>
      <div className={styles.card_container}>
        <div className={styles.card_container_split}>
          <div className={styles.card}>
            <div className={`${styles.card__img} ${styles.card__img__1}`}></div>
            <h3 className={`${styles.card__header} ${styles.card__header__1}`}>Innovative</h3>

            <p>
              Crafting modern web solutions that push the boundaries of technology. With expertise in React JS and Next JS, I build responsive, dynamic
              applications that offer exceptional user experiences.
            </p>
          </div>
          <div className={styles.card}>
            <div className={`${styles.card__img} ${styles.card__img__2}`}></div>
            <h3 className={`${styles.card__header} ${styles.card__header__2}`}>Versatile</h3>

            <p>
              From frontend interfaces to backend systems, I deliver comprehensive solutions. My proficiency in the MERN stack allows me to create end-to-end
              applications that are both robust and scalable.
            </p>
          </div>
        </div>
        <div className={styles.card_container_split}>
          <div className={styles.card}>
            <div className={`${styles.card__img} ${styles.card__img__3}`}></div>
            <h3 className={`${styles.card__header} ${styles.card__header__3}`}>Reliable</h3>
            <p>
              With over four years of industry experience, I bring reliability to every project. I adhere to best practices and deliver high-quality results,
              ensuring your project is completed on time and to the highest standards.
            </p>
          </div>
          <div className={styles.card}>
            <div className={`${styles.card__img} ${styles.card__img__4}`}></div>
            <h3 className={`${styles.card__header} ${styles.card__header__4}`}>Collaborative</h3>
            <p>
              Effective communication and teamwork are at the heart of my approach. I work closely with clients and stakeholders to understand their needs,
              translating ideas into efficient, scalable code that meets project goals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.btn_container}>
        <ContactButtonWhite />
      </div>
    </section>
  );
};

export default Personality;
