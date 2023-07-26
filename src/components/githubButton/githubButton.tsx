import { FC } from 'react';

import { GitHubIcon } from './consts';

export const GithubButton: FC = () => (
  <a href="https://github.com/amplience/dc-visualization-get-started">
    <div className={"githubButton"}>
    <span>{GitHubIcon}</span>
    <span className="buttonText">Fork me on Github!</span>
    </div>
  </a>
);
