import { FC, HTMLAttributes } from "react";

import * as Styled from "./styles";
import { GitHubIcon } from "./consts";

export const GithubButton: FC<HTMLAttributes<HTMLAnchorElement>> = (props) => (
  <Styled.GithubButton
    href="https://github.com/amplience/dc-visualization-get-started"
    {...props}
  >
    {GitHubIcon}
    <Styled.GithubButtonLabel>Fork me on Github!</Styled.GithubButtonLabel>
  </Styled.GithubButton>
);
