import React from 'react';
import styled from '@emotion/styled';

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

  .githubButton {
    width: 177px;
    height: 32px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    background: #efefef;
    border-radius: 4px;
    text-decoration: none;
    position: absolute;
    right: 30px;
    top: 30px;

    svg {
      margin-left: 12px;
    }
  }

  .buttonText {
    margin: 0 12px;
  }

  @media only screen and (max-width: 1024px) {
    .githubButton {
      justify-content: center;
      left: 30px;
      bottom: 30px;
      top: inherit;
    }
  }

  @media only screen and (max-width: 640px) {
    .githubButton {
      width: 33px;
      height: 32px;
      justify-content: center;
    }
    .githubButton svg {
      margin-left: 0;
    }
    .buttonText {
      display: none;
      margin: 0;
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
