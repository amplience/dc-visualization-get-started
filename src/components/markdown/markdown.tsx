import { FC, HTMLAttributes, ReactNode } from 'react';

import MarkdownJsx from 'markdown-to-jsx';
import { useRouter } from 'next/router';

import { MarkdownWrapper } from './styles';

export type MarkdownProps = {
  Wrapper: FC<HTMLAttributes<HTMLDivElement>>;
  text?: string;
};

export const Markdown: FC<MarkdownProps> = (props) => {
  const { Wrapper = MarkdownWrapper, text } = props;

  return (
    <Wrapper>
      <MarkdownJsx>{text}</MarkdownJsx>
    </Wrapper>
  );
};
