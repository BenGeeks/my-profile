import { ContactButtonWhite } from "../contact_button.js/contact_button";
import { Permanent_Marker, Pirata_One } from "next/font/google";
import styles from "./hero.module.scss";
import Image from "next/image";
import React from "react";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const pirataOne = Pirata_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_bg}>
        <Image src="/images/hero-background.jpg" alt="Hero Background" fill priority className={styles.hero_bg_img} sizes="100vw" />
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.profile_image}>
        <Image src="/images/me_profile.jpg" alt="Profile" fill priority className={styles.profile_img_content} sizes="50vw" />
      </div>

      <div className={styles.text_container}>
        <h4 className={pirataOne.className}>Helps you build your dream project with love and perfection.</h4>
        <div className={styles.description}>
          <h2 className={permanentMarker.className}>Ben-Hur Gican II</h2>
          <p>Senior Full-Stack JavaScript & AI Integration Developer</p>
          <ContactButtonWhite />
        </div>
      </div>
    </div>
  );
}
