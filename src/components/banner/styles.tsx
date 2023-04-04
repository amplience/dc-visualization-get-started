import React from "react";
import styled from "@emotion/styled";

type ImageProps = {
  className: string;
};

export const BannerWrapper = styled.div<ImageProps>`
  position: relative;
  margin: 0;
  height: 100%;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }

  aside {
    padding: 1rem 2rem;
    box-sizing: border-box;
    font-size: 1.2rem;

    h1 {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 700;
      text-transform: capitalize;
      color: #fff;
    }

    .subheader {
      font-size: 1.6rem;
      color: #fff;
    }
    a {
      font-size: 1.2rem;
      color: #fff;
    }
  }

  display: grid;
  grid-template-columns: 1fr;

  aside {
    width: fit-content;
    height: fit-content;
    position: absolute;
    padding: 2rem 4rem;
    box-sizing: border-box;
    color: inherit;

    h1 {
      font-size: 4vw;
      line-height: 4vw;
    }
  }
`;
