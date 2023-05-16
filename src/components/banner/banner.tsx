import { FC } from 'react';

import { DynamicImage } from '../dynamicImage/dynamicImage';

import { BannerWrapper } from './styles';
import { BannerComponent } from './type';

export const Banner: FC<BannerComponent> = (props) => {
  const {
    Wrapper = BannerWrapper,
    background,
    strapline,
    headline,
    link: { url, title },
  } = props;

  return (
    <Wrapper className={'Banner'}>
      <DynamicImage image={background} />
      <aside>
        {headline && <h1>{headline}</h1>}
        {strapline && <p className={'subheader'}>{strapline}</p>}

        {url && title && (
          <a href={url} title={title}>
            {title}
          </a>
        )}
      </aside>
      <a href='https://github.com/amplience/dc-visualization-get-started'>
        <div className={'githubButton'}>
          <span>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_4006_91116)'>
                <path
                  d='M10 0C15.525 0 20 4.475 20 10C19.9995 12.0953 19.3419 14.1376 18.1198 15.8395C16.8977 17.5415 15.1727 18.8173 13.1875 19.4875C12.6875 19.5875 12.5 19.275 12.5 19.0125C12.5 18.675 12.5125 17.6 12.5125 16.2625C12.5125 15.325 12.2 14.725 11.8375 14.4125C14.0625 14.1625 16.4 13.3125 16.4 9.475C16.4 8.375 16.0125 7.4875 15.375 6.7875C15.475 6.5375 15.825 5.5125 15.275 4.1375C15.275 4.1375 14.4375 3.8625 12.525 5.1625C11.725 4.9375 10.875 4.825 10.025 4.825C9.175 4.825 8.325 4.9375 7.525 5.1625C5.6125 3.875 4.775 4.1375 4.775 4.1375C4.225 5.5125 4.575 6.5375 4.675 6.7875C4.0375 7.4875 3.65 8.3875 3.65 9.475C3.65 13.3 5.975 14.1625 8.2 14.4125C7.9125 14.6625 7.65 15.1 7.5625 15.75C6.9875 16.0125 5.55 16.4375 4.65 14.925C4.4625 14.625 3.9 13.8875 3.1125 13.9C2.275 13.9125 2.775 14.375 3.125 14.5625C3.55 14.8 4.0375 15.6875 4.15 15.975C4.35 16.5375 5 17.6125 7.5125 17.15C7.5125 17.9875 7.525 18.775 7.525 19.0125C7.525 19.275 7.3375 19.575 6.8375 19.4875C4.8458 18.8245 3.11342 17.5513 1.88611 15.8483C0.658808 14.1453 -0.0011006 12.0991 1.37789e-06 10C1.37789e-06 4.475 4.475 0 10 0Z'
                  fill='black'
                />
              </g>
              <defs>
                <clipPath id='clip0_4006_91116'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className={'buttonText'}>Fork me on Github!</span>
        </div>
      </a>
    </Wrapper>
  );
};
