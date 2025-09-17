import styles from "./certificates.module.scss";
import Image from "next/image";
import moment from "moment";
import React from "react";

import { certificateData } from "@/assets/data";

const CourseAndTrainingPage = () => {
  return (
    <div className={styles.container}>
      {certificateData
        .sort((a, b) => moment(b.date, "MM-DD-YYYY").diff(moment(a.date, "MM-DD-YYYY")))
        .map((cert) => {
          const imageSrc = cert.source === "udemy" ? `https://udemy-certificate.s3.amazonaws.com/image/${cert.id}.jpg` : cert.imageUrl;
          const link = cert.source === "udemy" ? `https://www.udemy.com/certificate/${cert.id}` : cert.link;

          const imageElement = (
            <div className={styles.certificate_image}>
              <Image src={imageSrc} fill alt={cert.title} title={cert.title} sizes="(max-width: 1200px) 100vw" />
            </div>
          );

          return (
            <div className={styles.certificate_container} key={cert.id}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {imageElement}
                </a>
              ) : (
                imageElement
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CourseAndTrainingPage;
