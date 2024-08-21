import React from 'react';
import styles from './skills.module.scss';

import { skillData } from '@/assets/data';
import { ContactButtonGreen } from '../contact_button.js/contact_button';

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2>Skills</h2>
      {skillData.map((skill) => {
        return (
          <div className={styles.bar_container} key={skill.name}>
            <div className={styles.bar_title}>{skill.name}</div>
            <div className={styles.bar}>
              <div className={styles.bar_value} style={{ '--bar-width': skill.value }}>
                {skill.value}
              </div>
            </div>
          </div>
        );
      })}
      <ContactButtonGreen />
    </section>
  );
};

export default Skills;
