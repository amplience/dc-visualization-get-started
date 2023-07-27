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
    text-decoration: none;
    position: absolute;
    right: 30px;
    top: 28px;

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

    aside {
      h1 {
        font-size: 36px;
      }
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

    aside {
      h1 {
        font-size: 24px;
      }
    }
  }

  display: grid;
  grid-template-columns: 1fr;

  aside {
    width: fit-content;
    height: fit-content;
    position: absolute;
    padding: 28px 36px;
    box-sizing: border-box;
    color: inherit;

    h1 {
      font-size: 4vw;
      line-height: 4vw;
      margin: 0;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 46px;
      margin-bottom: 24px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      margin: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    aside {
      h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .subheader {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 640px) {
    aside {
      padding: 28px 24px;
      h1 {
        font-size: 24px;
        width: 245px;
        line-height: 30px;
      }
      .subheader {
        font-size: 14px;
        width: 226px;
        line-height: 18px;
      }
    }
  }

  .button {
    background: rgba(26, 34, 45, 0.75);
    border-radius: 25px;
    position: absolute;
    bottom: 28px;
    right: 30px;
    padding: 12px;
  }

  .link {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      margin-left: 8px;
      display: flex;
      align-items: center;
    }
  }

  @media only screen and (max-width: 640px) {
    .link {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
