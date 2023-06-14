import { FC } from "react";

import { DynamicImage } from "../dynamicImage/dynamicImage";

import { BannerWrapper } from "./styles";
import { BannerComponent } from "./type";
import { GitHubIcon, ArrowIcon } from "./consts";

export const Banner: FC<BannerComponent> = (props) => {
  const {
    Wrapper = BannerWrapper,
    background,
    strapline,
    headline,
    link: { url, title }
  } = props;

  return (
    <Wrapper className={"Banner"}>
      <DynamicImage image={background} />
      <aside>
        {headline && <h1>{headline}</h1>}
        {strapline && <p className={"subheader"}>{strapline}</p>}
      </aside>
      <a href="https://github.com/amplience/dc-visualization-get-started">
        <div className={"githubButton"}>
          <span>{GitHubIcon}</span>
          <span className={"buttonText"}>Fork me on Github!</span>
        </div>
      </a>
      {url && title && (
        <div className="button">
          <a href={url} title={title} className={"link"}>
            {title}
            <span>{ArrowIcon}</span>
          </a>
        </div>
      )}
    </Wrapper>
  );
};
