import styled from "@emotion/styled";

export const DynamicImageDefaultWrapper = styled.div`
  overflow: hidden;
  width: auto;
  line-height: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
