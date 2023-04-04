import { ReactNode, FC, HTMLAttributes } from "react";

export type BannerComponent = {
  Wrapper?: FC<HTMLAttributes<HTMLDivElement>>;
  background: any;
  strapline:string;
  headline:string;
  link: { url:string; title:string; }
};
