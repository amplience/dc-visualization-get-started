import styled from "@emotion/styled";

export const DynamicImageDefaultWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  line-height: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
