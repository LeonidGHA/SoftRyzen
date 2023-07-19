import { FC, useState } from 'react';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react';
import { useTranslation } from 'next-i18next';

import 'keen-slider/keen-slider.min.css';

import { SliderProps } from './Slider.props';

const BREAKPOINTS = {
  tab: '(min-width: 768px)',
  desk: '(min-width: 1280px)',
};
const DELAY_AUTOPLAY = 5000;

const defaultOptions = {
  mobile: { perView: 1, spacing: 0 },
  tablet: { perView: 2, spacing: 32 },
  desktop: { perView: 3, spacing: 20 },
};

export const Slider: FC<SliderProps> = ({
  children,
  partners = false,
  options = defaultOptions,
  ...props
}) => {
  const { t } = useTranslation('slider');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>(
    {
      breakpoints: {
        [BREAKPOINTS.tab]: {
          slides: {
            perView: options.tablet?.perView,
            spacing: options.tablet?.spacing,
          },
        },
        [BREAKPOINTS.desk]: {
          slides: {
            perView: options.desktop?.perView,
            spacing: options.desktop?.spacing,
          },
        },
      },
      slides: {
        perView: options.mobile?.perView,
        spacing: options.mobile?.spacing,
      },
      initial: 0,
      loop: true,
      slideChanged(slider: KeenSliderInstance) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, DELAY_AUTOPLAY);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  const paginationVariant = loaded && instanceRef.current && (
    <div className={`dots ${partners ? 'mb-6 md:mb-10' : ''}`}>
      {getPagination(instanceRef.current.track.details.slides.length).map(
        idx => {
          return (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
              aria-label={t('button.ariaLabel')}
            ></button>
          );
        },
      )}
    </div>
  );

  return (
    <div {...props}>
      {partners && paginationVariant}

      <ul
        ref={sliderRef}
        className={`keen-slider ${!partners ? 'mb-5 md:mb-10' : ''}`}
      >
        {children}
      </ul>

      {partners || paginationVariant}
    </div>
  );
};

const getPagination = (length: number): number[] => {
  let array: number[] = [];
  const endIteration = length;

  for (let i = 0; i < endIteration; i++) {
    array = [...array, i];
  }

  return array;
};
