import {FC, HTMLAttributes} from "react";

export type ImageProps = {
  image: {
    image: {
      defaultHost: string;
      name: string;
      endpoint: string;
    };
    alt: string;
    query?: string;
    crop?: string;
    poi?: string;
    aspectLock?: string;
  };
  Wrapper?: FC<HTMLAttributes<HTMLDivElement>>;
  imgSrc?: string;
  breakpoints?: {
    _meta: any;
    breakpoints: { name: string; minWidth: number }[];
  };
  aspectRatios?: {
    _meta: any;
    aspectRatios: { name: string; aspectRatio: string }[];
  };
  imageAltText?: string;
  seoText?: string;
  wrapperStyles?: string;
};
