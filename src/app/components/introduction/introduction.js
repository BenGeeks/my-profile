import { ContactButtonGreen } from "../contact_button.js/contact_button";
import styles from "./introduction.module.scss";
import React from "react";

const Introduction = () => {
  return (
    <section className={styles.container}>
      <h2>Meet Ben</h2>
      <p>
        {`I’m Ben-Hur Vergara Gican II, a Senior Full-Stack JavaScript & AI Integration Developer. With over 4 years of professional web
        development experience, I specialize in React.js front-end development and full-stack applications using Next.js, Node.js, and
        the MERN stack.`}
      </p>
      <br />
      <p>
        {`Beyond full-stack development, I focus on applied AI solutions — from Retrieval-Augmented Generation (RAG) pipelines and
        custom AI agents to chatbot workflows powered by LangChain, OpenAI, and vector databases. My work bridges modern web apps with
        intelligent, AI-driven capabilities that deliver measurable business value.`}
      </p>
      <br />
      <p>
        {`I hold a Top Rated Plus badge on Upwork, backed by consistent client satisfaction and a reputation for proactive problem-solving.
        With a background of 15 years in technical support and QA testing, I bring both technical depth and strong communication skills,
        ensuring smooth collaboration and reliable results.`}
      </p>
      <br />
      <p>
        {`Passionate about building scalable, high-performance solutions, I’m eager to help businesses and startups turn their ideas into
        seamless digital products. Let’s connect and explore how I can contribute to your next project!`}
      </p>
      <ContactButtonGreen />
    </section>
  );
};

export default Introduction;
