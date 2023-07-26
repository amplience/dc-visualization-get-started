import { FC, HTMLAttributes } from 'react';

import MarkdownJsx from 'markdown-to-jsx';

import { MarkdownWrapper } from './styles';
import { GitHubIcon } from '../banner/consts';

export type MarkdownProps = {
  Wrapper: FC<HTMLAttributes<HTMLDivElement>>;
  text?: string;
};

export const Markdown: FC<MarkdownProps> = (props) => {
  const { Wrapper = MarkdownWrapper, text } = props;

  return (
    <Wrapper>
      <div className="wrapper">
        <MarkdownJsx>{text}</MarkdownJsx>
        <a href="https://github.com/amplience/dc-visualization-get-started">
          <div className={"githubButton"}>
            <span>{GitHubIcon}</span>
            <span className="buttonText">Fork me on Github!</span>
          </div>
        </a>
      </div>
    </Wrapper>
  );
};
