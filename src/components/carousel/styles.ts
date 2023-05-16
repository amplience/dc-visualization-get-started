import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  .carousel,
  .slider {
    width: 100%;
    max-height: 500px;
    overflow: hidden;
    position: relative;

    .dots {
      background-color: #ccc;
      &:disabled {
        background-color: #999;
      }
      overflow: hidden;
      border: 0;
      margin-right: 15px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    .carousel__inner-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      > * {
        width: 100%;
      }
    }

    .backButton,
    .nextButton {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 50%;
      border-radius: 100%;
      font-size: 1rem;
      border: 1px solid #ccc;
    }

    .backButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }

    nav {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translate(-50%, 0);

      button {
        margin: 2px;
      }
    }

    .slideInner,
    .carousel__inner-slide {
      max-height: 488px;
    }

    @media only screen and (max-width: 640px) {
      .slideInner,
      .carousel__inner-slide {
        max-height: 488px;
      }
    }
  }
`;
