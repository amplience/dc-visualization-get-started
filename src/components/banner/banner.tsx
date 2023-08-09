import { FC } from "react";

import { DynamicImage } from "../dynamicImage/dynamicImage";

import {
  BannerActions,
  BannerCta,
  BannerCtaLabel,
  BannerGithubButton,
  BannerWrapper,
} from "./styles";
import { BannerComponent } from "./type";
import { ArrowIcon } from "./consts";

export const Banner: FC<BannerComponent> = ({
  Wrapper = BannerWrapper,
  background,
  strapline,
  headline,
  link: { url, title },
}) => (
  <Wrapper className={"Banner"}>
    <DynamicImage image={background} />
    <aside>
      {headline && <h1>{headline}</h1>}
      {strapline && <p className={"subheader"}>{strapline}</p>}
    </aside>
    <BannerActions>
      <BannerGithubButton />
      {url && title && (
        <BannerCta href={url} title={title}>
          <BannerCtaLabel>{title}</BannerCtaLabel>
          {ArrowIcon}
        </BannerCta>
      )}
    </BannerActions>
  </Wrapper>
);
