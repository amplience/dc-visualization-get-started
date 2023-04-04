import styled from "@emotion/styled";

export const MarkdownWrapper = styled.div`
  font-size: 1.5rem;

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
