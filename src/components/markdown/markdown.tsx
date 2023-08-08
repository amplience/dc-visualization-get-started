import { FC, HTMLAttributes } from "react";
import MarkdownJsx from "markdown-to-jsx";

import { GithubButton } from "../githubButton/githubButton";

import { MarkdownJsxWrapper, MarkdownWrapper } from "./styles";

export type MarkdownProps = {
  Wrapper: FC<HTMLAttributes<HTMLDivElement>>;
  text?: string;
};

export const Markdown: FC<MarkdownProps> = ({
  Wrapper = MarkdownWrapper,
  text,
}) => (
  <Wrapper>
    <MarkdownJsxWrapper>
      <MarkdownJsx>{text}</MarkdownJsx>
    </MarkdownJsxWrapper>
    <GithubButton />
  </Wrapper>
);
