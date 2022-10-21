import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

import styles from './styles.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a
        className={styles.link}
        href="https://unsplash.com/"
        target="_blank"
        rel="noreferrer"
      >
        <LogoIcon className={styles.icon} />
        <span className={styles.text}>Unsplash</span>
      </a>
    </div>
  );
};
