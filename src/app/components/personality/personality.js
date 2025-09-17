import { ContactButtonWhite } from "../contact_button.js/contact_button";
import styles from "./personality.module.scss";
import React from "react";
import Image from "next/image";

const Personality = () => {
  return (
    <section className={styles.container}>
      {/* background image */}
      <div className={styles.imageWrapper}>
        <Image src="/images/mountain_ranges.jpg" alt="Mountain ranges" fill sizes="100vw" priority className={styles.bg_img} />
      </div>
      <div className={styles.overlay}></div>

      <h2>Personality</h2>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card__img}>
            <Image src="/images/innovative.jpg" alt="Innovative" fill className={styles.card__img__content} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <h3 className={`${styles.card__header} ${styles.bg_primary}`}>Innovative</h3>
          <p>
            Crafting modern web solutions that push the boundaries of technology. With expertise in React JS and Next JS, I build responsive, dynamic applications that offer exceptional user
            experiences.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.card__img}>
            <Image src="/images/versatile.png" alt="Versatile" fill className={styles.card__img__content} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <h3 className={`${styles.card__header} ${styles.bg_secondary}`}>Versatile</h3>
          <p>
            From frontend interfaces to backend systems, I deliver comprehensive solutions. My proficiency in the MERN stack allows me to create end-to-end applications that are both robust and
            scalable.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.card__img}>
            <Image src="/images/reliable.jpg" alt="Reliable" fill className={styles.card__img__content} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <h3 className={`${styles.card__header} ${styles.bg_tertiary}`}>Reliable</h3>
          <p>
            With over four years of industry experience, I bring reliability to every project. I adhere to best practices and deliver high-quality results, ensuring your project is completed on time
            and to the highest standards.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.card__img}>
            <Image src="/images/collaborative.jpg" alt="Collaborative" fill className={styles.card__img__content} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <h3 className={`${styles.card__header} ${styles.bg_quaternary}`}>Collaborative</h3>
          <p>
            Effective communication and teamwork are at the heart of my approach. I work closely with clients and stakeholders to understand their needs, translating ideas into efficient, scalable
            code that meets project goals.
          </p>
        </div>
      </div>

      <div className={styles.btn_container}>
        <ContactButtonWhite />
      </div>
    </section>
  );
};

export default Personality;
