import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const MarkdownWrapper = styled.div`
  .wrapper {
    width: auto;
    height: fit-content;
    font-size: 2.25rem;
    background-color: #002C42;
    padding: 28px 36px;
    color: #ffffff;
    font-weight: 500;
    position: relative;
    margin: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    min-height: 768px;

    .buttonText {
      margin-left: 12px;
    }

    a {
      width: 190px;
    }

    @media only screen and (max-width: 1024px) {
      .githubButton {
        left: 30px;
        bottom: 30px;
        top: inherit;
      }
    }
  
    @media only screen and (max-width: 640px) {
      a {
        width: 32px;
      }

      .githubButton {
        width: 33px;
        height: 32px;
      }

      .buttonText {
        display: none;
      }

      span {
        font-size: 1.5rem;
      }

      a {
        top: 26px;
      }
    }
  }

  a {
    position: absolute;
    right: 30px;
    top: 34px;
    text-decoration: none;
  }  

  .pendingContent {
    text-align: center;
    width: min-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: #666;
    font-weight: 400;
    line-height: 1.5rem;

    span {
      white-space: nowrap;
    }
  }
`;


export const buttonStyles: CSSProperties = { position: 'absolute' };
