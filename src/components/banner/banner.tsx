import { FC } from "react";

import { DynamicImage } from "../dynamicImage/dynamicImage";

import { BannerWrapper } from "./styles";
import { BannerComponent } from "./type";
import { ArrowIcon } from "./consts";
import { GithubButton } from "../githubButton/githubButton";

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
      <GithubButton style={{ position: "absolute" }} />
      {url && title && (
        <div className="button">
          <a href={url} title={title} className={"link"}>
            <div className={"text"}>{title}</div>
            <span>{ArrowIcon}</span>
          </a>
        </div>
      )}
    </Wrapper>
  );
};
