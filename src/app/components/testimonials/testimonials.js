import React from 'react';
import styles from './testimonials.module.scss';
import { ContactButtonWhite } from '../contact_button.js/contact_button';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg_video}>
        <video className={styles.bg_video__content} autoPlay muted loop>
          <source src="/images/bg-video.mp4" />
          Your browser is not supported
        </video>
      </div>
      <h2>Testimonials</h2>
      <div className={styles.testimonial}>
        <figure className={styles.circle}>
          <Image src="/images/bruna.jpeg" alt="image of bruna" width={160} height={160} />
          <figcaption className={styles.testimonial_caption}>Bruna Menegatti</figcaption>
        </figure>
        <div className={styles.text}>
          <h3>Ben is a shooting star!</h3>
          <p>
            Ben is a shooting star whose career as a developer will go far. He is not affraid to learn, ask, suggest. He communicates well, is a great team
            member and was very valuable in our project. His latest task consisted in turning a cloud-based software into a PWA, which he did susscessfully,
            even having been his first attempt at it. I shall be hapoy to have him join our team in the future any time again.
          </p>
        </div>
      </div>
      <div className={styles.testimonial}>
        <figure className={styles.circle}>
          <Image src="/images/nik.jpg" alt="image of nik" width={160} height={160} />
          <figcaption>Nik Thakorlal</figcaption>
        </figure>
        <div className={styles.text}>
          <h3>I highly recomment working with Ben!</h3>
          <p>
            "We had an exceptional experience working with Ben. His professionalism, communication, and quality of work were top-notch and exceeded
            expectations. His dedication and skills set him apart.
          </p>
          <br />
          <p>I highly recommend and look forward to future collaborations!</p>
        </div>
      </div>

      <div className={styles.testimonial}>
        <figure className={styles.circle}>
          <Image src="/images/dino.jpg" alt="image of dino" width={160} height={160} />
          <figcaption>Dino Dungog</figcaption>
        </figure>
        <div className={styles.text}>
          <h3>Ben was an amazing talent over all!</h3>
          <p>He was more skilled and had a lot of knowledge than what we expected from him.</p>
          <p>
            We would highly suggest him to anyone who is looking for an all arounder, one who can be very versatile on any fields within the Saas Industry and
            one who is very hungry to learn more.
          </p>
          <br />
          <p>We would highly recommend him.</p>
        </div>
      </div>
      <ContactButtonWhite />
    </section>
  );
};

export default Testimonials;
