import { FC } from "react";

import { DynamicImage } from "../dynamicImage/dynamicImage";

import { BannerWrapper } from "./styles";
import { BannerComponent } from "./type";

export const Banner: FC<BannerComponent> = (props) => {
  const {
    Wrapper = BannerWrapper,
    background,
    strapline,
    headline,
    link: { url, title }
  } = props;

  return (
    <Wrapper
      className={"Banner"}
    >
      <DynamicImage image={background} />
      <aside>
        {headline && <h1>{headline}</h1>}
        {strapline && <p className={"subheader"}>{strapline}</p>}

        {url && title && (
          <a href={url} title={title}>
            {title}
          </a>
        )}
      </aside>
    </Wrapper>
  );
};

