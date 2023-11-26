import React from 'react';
import { Icon } from '@iconify/react';
import { social } from '../data/social_media';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  let networks;

  if (social) {
    networks = social.map((network) => (
      <span key={network.name} className={styles.m_4}>
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <Icon icon={network.icon} className={network.class} />
        </a>
      </span>
    ));
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.column_md}>
        <div className={styles.social_links}>{networks}</div>
        <div className={styles.copyright}>
          <div className={styles.container}>
            <small>
              Copyright ©Chandula Adhikari
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
