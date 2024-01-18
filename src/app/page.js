import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import { skillData } from '@/assets/data';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_image}>
        <Image
          src="https://i.ibb.co/47fjkMZ/1705248700683.jpg"
          fill
          alt="Picture of Ben Gican II"
          sizes="(max-width: 1200px) 100vw"
          priority
        />
      </div>
      <div className={styles.description}>
        <h2 className={styles.complete_name}>Ben-Hur Vergara Gican II </h2>
        <p>
          {`
        Meet a resourceful and self-taught web developer with a stellar reputation for getting the job done. With over 4 years of
        programming experience, he specializes in React.js front-end development, as well as Next.js and MERN full-stack development.`}
        </p>
        <br />
        <p>
          {`
        Having earned a Top Rated Plus rating on Upwork, this developer has successfully delivered high-quality projects, demonstrating a
        commitment to excellence. With a background encompassing 15 years in technical support, he brings a wealth of experience in
        assisting and troubleshooting users' concerns and issues. Additionally, boasting 6 years of thriving in a work-from-home
        environment, his adaptability and discipline shine through.`}
        </p>
        <br />
        <p>
          {`
        Beyond his development expertise, he possesses 5 years of experience in QA testing, covering both manual and automated methods.
        This comprehensive skill set ensures the quality and reliability of the applications he works on.`}
        </p>
        <br />
        <p>
          {`Passionate about creating seamless and visually appealing web experiences, this developer is eager to contribute his skills to
          your projects. Consider connecting to explore how his diverse background and expertise can benefit your team!`}
        </p>
      </div>

      <h2 className={styles.sub_header}>Skills</h2>

      <section className={styles.skills}>
        {skillData.map((skill) => {
          return (
            <div className={styles.bar_container} key={skill.name}>
              <span className={styles.bar_title}>{skill.name}</span>
              <div className={styles.bar}>
                <div className={styles.bar_value} style={{ width: skill.value }}>
                  {skill.value}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
