import styled from "@emotion/styled";

export const MarkdownWrapper = styled.div`
  width: auto;
  font-size: 1.5rem;
  background-color: #002c42;
  color: #ffffff;
  font-weight: 500;
  position: relative;
  margin: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 354px;
  padding: 28px 24px;

  @media only screen and (min-width: 640px) {
    min-height: 768px;
    padding: 28px 36px;
    font-size: 2.25rem;
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

export const MarkdownJsxWrapper = styled.div`
  margin-bottom: 20px;
`;
