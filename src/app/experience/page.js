import React from 'react';
import styles from './experience.module.css';

import { workExperienceData } from '@/assets/data';

const WorkExperiencePage = () => {
  return (
    <div className={styles.container}>
      {workExperienceData.map((work, index) => {
        return (
          <div className={styles.company} key={index}>
            <div className={styles.company_header_container}>
              <div className={styles.company_name}>{work.company}</div>
              <div className={styles.company_name}>{work.duration}</div>
            </div>
            {work.position.map((position, index) => {
              return (
                <div className={styles.position} key={index}>
                  <div className={styles.position_name_container}>
                    <p className={styles.position_name}>{position.title}</p>
                    <p className={styles.position_name}>{position.date}</p>
                  </div>
                  <ul className={styles.role_description_container}>
                    {position.description.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperiencePage;
