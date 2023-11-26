import React from 'react';
import { Icon } from '@iconify/react';
import { SkillsData } from '../data/skills';
import styles from '../styles/Skills.module.scss';

export const Skills = () => {
  let sectionName, skills;

  if (SkillsData) {
    sectionName = "SKILLS";
    skills = SkillsData.icons.map((skill, i) => (
      <li className={styles.list_inline} key={i}>
        <span>
          <div className={styles.skill_tile}>
            <i className={skill.class} style={{ fontSize: '220%' }}>
              <Icon icon={skill.icon} />
              <p className="text-center" style={{ fontSize: '20%', marginTop: '4px' }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    ));
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.vertical_align} id="skill-vertical-align">
        <div className={styles.col_md}>
          <h1 className={styles.section_title}>
            <span className={styles.text}>{sectionName}</span>
          </h1>
        </div>
        <div className={styles.col_md2}>
          <ul className={styles.skill_icon}>{skills}</ul>
        </div>
      </div>
    </section>
  );
};
