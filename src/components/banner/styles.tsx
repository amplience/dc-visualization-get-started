import styled from "@emotion/styled";
import { GithubButton } from "../githubButton/githubButton";

type ImageProps = {
  className: string;
};

export const BannerWrapper = styled.div<ImageProps>`
  position: relative;
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: grid;
  min-height: 354px;

  aside {
    padding: 1.75rem 1.5rem;
    box-sizing: border-box;
    font-size: 1.2rem;
    position: absolute;

    h1 {
      font-size: 1.5rem;
      line-height: 1.875rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
    }

    .subheader {
      font-size: 0.875rem;
      line-height: 1.1375rem;
      color: #fff;
    }
  }

  @media only screen and (min-width: 640px) {
    min-height: 550px;

    aside {
      padding: 1.75rem 2.25rem;

      h1 {
        font-size: 2.25rem;
        line-height: 2.875rem;
      }

      .subheader {
        font-size: 1.25rem;
        line-height: 1.625rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    min-height: 768px;

    aside {
      h1 {
        padding-right: 190px;
      }
    }
  }
`;

export const BannerActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.75rem 1.5rem;
  gap: 12px;
  pointer-events: none;

  @media only screen and (min-width: 640px) {
    padding: 1.75rem 2.25rem;
  }

  @media only screen and (min-width: 1024px) {
    top: 0;
    flex-direction: column;
  }
`;

export const BannerGithubButton = styled(GithubButton)`
  pointer-events: auto;
`;

export const BannerCta = styled.a`
  background: rgba(26, 34, 45, 0.75);
  border-radius: 25px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  gap: 8px;
  min-width: 1px;
  font-size: 14px;
  font-weight: 400;
  pointer-events: auto;

  @media only screen and (min-width: 640px) {
    font-size: 20px;
    padding: 12px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: calc(100% - 1.75rem);
  }
`;

export const BannerCtaLabel = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
