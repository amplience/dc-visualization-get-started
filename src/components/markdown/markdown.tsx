import { FC, HTMLAttributes } from 'react';

import MarkdownJsx from 'markdown-to-jsx';

import { MarkdownWrapper, buttonStyles } from './styles';
import { GithubButton } from '../githubButton/githubButton';

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
        <GithubButton style={buttonStyles} />
      </div>
    </Wrapper>
  );
};
