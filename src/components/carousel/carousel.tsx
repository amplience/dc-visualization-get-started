import { FC, HTMLAttributes, ReactNode } from "react";

import { nanoid } from "nanoid";
import { CarouselProvider, Dot, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Banner } from "../banner/banner";
import { BannerComponent } from "../banner/type";

import { BackButton, NextButton } from "./buttons";
import { CarouselContainer } from "./styles";

interface Props {
  Wrapper?: FC<HTMLAttributes<HTMLDivElement>>;
  loop: boolean;
  navigationDots: boolean;
  banners: BannerComponent[];
}

export const Carousel: FC<Props> = ({
  Wrapper = CarouselContainer,
  loop = false,
  navigationDots = true,
  banners = [],
}) => (
  <Wrapper>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      visibleSlides={1}
      totalSlides={banners.length}
      infinite={loop}
      isPlaying={loop}
      interval={5000}
    >
      <Slider className="slider">
        {banners.map((slide: any, index: number) => {
          return (
            <Slide key={index} index={index}>
              <Banner {...slide} />
            </Slide>
          );
        })}
      </Slider>
      <BackButton className={"backButton"} />
      <NextButton className={"nextButton"} />
      <nav>
        {navigationDots &&
          banners.map((slide: any, index: number) => (
            <Dot key={nanoid()} slide={index} />
          ))}
      </nav>
    </CarouselProvider>
  </Wrapper>
);
