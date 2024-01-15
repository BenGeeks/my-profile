import styles from './page.module.css';

export default function Home() {
  const skillData = [
    { name: 'HTML5', value: '92%' },
    { name: 'CSS3', value: '90%' },
    { name: 'JavaScript', value: '90%' },
    { name: 'ReactJs', value: '90%' },
    { name: 'NodeJs', value: '80%' },
    { name: 'MongoDB', value: '75%' },
    { name: 'ExpressJs', value: '75%' },
    { name: 'NextJs', value: '60%' },
  ];
  return (
    <div>
      <h1 className={styles.header}>Ben-Hur Vergara Gican II</h1>

      <div className={styles.description}>
        <p>
          Meet a resourceful and self-taught web developer with a stellar reputation for getting the job done. With over 5 years of
          programming experience, he specialize in React.js front-end development, as well as Next.js and MERN full-stack development.
        </p>
        <br />
        <p>
          Having earned a Top Rated Plus rating on Upwork, this developer has successfully delivered high-quality projects, demonstrating a
          commitment to excellence. With a background encompassing 15 years in technical support, he brings a wealth of experience in
          assisting and troubleshooting for users. Additionally, boasting 6 years of thriving in a work-from-home environment, his
          adaptability and discipline shine through.
        </p>
        <br />
        <p>
          Beyond his development expertise, he possess 5 years of experience in QA testing, covering both manual and automated methods. This
          comprehensive skill set ensures the quality and reliability of the applications he work on.
        </p>
        <br />
        <p>
          Passionate about creating seamless and visually appealing web experiences, this developer is eager to contribute his skills to
          your projects. Consider connecting to explore how his diverse background and expertise can benefit your team!
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
