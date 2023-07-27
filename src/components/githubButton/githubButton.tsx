import { CSSProperties, FC } from 'react';

import { GitHubIcon } from './consts';
import styles from './GithubButton.module.css';

export const GithubButton: FC<{ style: CSSProperties }> = ({ style }) => (
  <a style={style} href="https://github.com/amplience/dc-visualization-get-started">
    <div className={styles.githubButton}>
      <span>{GitHubIcon}</span>
      <span className="buttonText">Fork me on Github!</span>
    </div>
  </a>
);
