import React from 'react';
import Image from 'next/image';
import styles from './certificates.module.css';
import moment from 'moment';

import { certificateData } from '@/assets/data';

const CourseAndTrainingPage = () => {
  return (
    <div className={styles.container}>
      {certificateData
        .sort((a, b) => moment(b.date, 'MM-DD-YYYY').diff(moment(a.date, 'MM-DD-YYYY')))
        .map((cert) => {
          return (
            <div className={styles.certificate_container} key={cert.id}>
              <a href={`https://www.udemy.com/certificate/${cert.id}`} target="_blank">
                <div className={styles.certificate_image}>
                  <Image
                    src={`https://udemy-certificate.s3.amazonaws.com/image/${cert.id}.jpg`}
                    fill
                    alt={cert.title}
                    title={cert.title}
                    sizes="(max-width: 1200px) 100vw"
                  />
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default CourseAndTrainingPage;
