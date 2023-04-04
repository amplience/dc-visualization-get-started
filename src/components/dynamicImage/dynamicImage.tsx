import { FC } from "react";

import { DynamicImageDefaultWrapper } from "./styles";
import { ImageProps } from "./types";

export const DynamicImage: FC<ImageProps> = (props) => {
  const {
    Wrapper = DynamicImageDefaultWrapper,
    image,
    imgSrc,
    imageAltText,
    seoText,
  } = props;

  if (!!image?.image && !!imgSrc) {
    return null;
  }

  const {
    image: {
      defaultHost = "cdn.media.amplience.net",
      name = "no_image",
      endpoint = "quadraticdemo"
    },
    query
  } = image ?? {
    image: {
      defaultHost: "cdn.media.amplience.net",
      name: "no_image",
      endpoint: "quadraticdemo"
    }
  };

  const queryParams = ["fmt=auto"];
  if (query) {
    queryParams.push(query);
  }

  const imgSource = imgSrc
    ? imgSrc.replace(/ /g, "%20")
    : `https://${defaultHost}/i/${endpoint}/${encodeURI(name)}`;

  return (
    <>
      <Wrapper>
          <img
            src={`${imgSource}?${queryParams.join("&")}`}
            alt={image.alt || imageAltText || name}
            title={image.alt || imageAltText || seoText || name}
          />
      </Wrapper>
    </>
  );
};

