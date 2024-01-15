import React from 'react';
import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md';
import { IoMdPin } from 'react-icons/io';
import { AiOutlineSkype } from 'react-icons/ai';
import { SiUpwork } from 'react-icons/si';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import styles from './contact.module.css';

const ContactPage = () => {
  const info = [
    { icon: <MdOutlineEmail />, data: 'b3nhur77@gmail.com' },
    { icon: <MdLocalPhone />, data: '+63 999 995 7176' },
    { icon: <IoMdPin />, data: 'B19 L23 Sta. Rosa Hills, Puting Kahoy, Silang Cavite Philippines 4118' },
    { icon: <AiOutlineSkype />, data: 'b3nhur77' },
    {
      icon: <FaLinkedinIn />,
      data: (
        <a href="https://www.linkedin.com/in/benhurvergaragicanii" target="_blank">
          https://www.linkedin.com/in/benhurvergaragicanii
        </a>
      ),
    },
    {
      icon: <SiUpwork />,
      data: (
        <a href="https://www.upwork.com/freelancers/~0145a04c4a590d7cc0" target="_blank">
          https://www.upwork.com/freelancers/~0145a04c4a590d7cc0
        </a>
      ),
    },
    {
      icon: <FaGithub />,
      data: (
        <a href="https://github.com/BenGeeks" target="_blank">
          https://github.com/BenGeeks
        </a>
      ),
    },
  ];
  return (
    <div>
      <h1 className={styles.header}>Ben-Hur Vergara Gican II</h1>
      {info.map((info) => {
        return (
          <div className={styles.info} key={info.data}>
            <span className={styles.icon}>{info.icon}</span>
            <p>{info.data}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPage;
