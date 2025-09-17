import { ContactButtonGreen } from "../contact_button.js/contact_button";
import { skillData } from "@/assets/data";
import styles from "./skills.module.scss";
import React from "react";

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2>Skills</h2>
      {skillData.map((group) => (
        <div key={group.category} className={styles.group}>
          <h3 className={styles.category}>{group.category}</h3>
          {group.skills.map((skill) => (
            <div className={styles.bar_container} key={skill.name}>
              <div className={styles.bar_title}>{skill.name}</div>
              <div className={styles.bar}>
                <div className={styles.bar_value} style={{ "--bar-width": skill.value }}>
                  {skill.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <ContactButtonGreen />
    </section>
  );
};

export default Skills;
