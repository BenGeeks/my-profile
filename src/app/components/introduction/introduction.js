import React from 'react';

import styles from './introduction.module.scss';
import { ContactButtonGreen } from '../contact_button.js/contact_button';

const Introduction = () => {
  return (
    <section className={styles.container}>
      <h2>Meet Ben</h2>
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
        assisting and troubleshooting users' concerns and issues. Additionally, boasting 6 years of thriving in a work-from-Hero
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
      <ContactButtonGreen />
    </section>
  );
};

export default Introduction;
