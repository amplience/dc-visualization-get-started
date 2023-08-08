import styled from "@emotion/styled";

export const CarouselContainer = styled.div`
  .carousel,
  .slider {
    width: 100%;
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
      left: 30px;
    }

    .nextButton {
      right: 30px;
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
    .slider,
    .carousel__inner-slide {
      max-height: 354px;
    }

    @media only screen and (min-width: 640px) {
      .carousel,
      .slider,
      .slideInner,
      .carousel__inner-slide {
        max-height: 550px;
      }
    }

    @media only screen and (min-width: 1024px) {
      .carousel,
      .slider,
      .slideInner,
      .carousel__inner-slide {
        max-height: 768px;
      }
    }
  }
`;
