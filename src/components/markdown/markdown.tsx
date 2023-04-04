import {FC, HTMLAttributes, ReactNode} from "react";

import MarkdownJsx from "markdown-to-jsx";
import { useRouter } from "next/router";

import { MarkdownWrapper } from "./styles";

export type MarkdownProps = {
  Wrapper: FC<HTMLAttributes<HTMLDivElement>>;
  stringWithMinMax?: string;
  justString?: string;
};

export const Markdown: FC<MarkdownProps> = (props) => {
  const {
    Wrapper = MarkdownWrapper,
    justString,
    stringWithMinMax = "!! content missing !!"
  } = props;

  return (
    <Wrapper>
      <MarkdownJsx>{justString || stringWithMinMax}</MarkdownJsx>
    </Wrapper>
  );
};
