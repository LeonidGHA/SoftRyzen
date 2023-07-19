import { FC, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';

import { AuthorCard } from '../AuthorCard';

import PlayVideoIcon from '@/public/images/feedbacks/play-icon.svg';
import HoverPlayVideoIcon from '@/public/images/feedbacks/play-icon-1.svg';

import { FeedbackVideoCardProps } from './FeedbackVideoCard.props';
import Image from 'next/image';

export const FeedbackVideoCard: FC<FeedbackVideoCardProps> = ({
  feedback,
  defaultValue,
  ...props
}) => {
  const { review, image, author } = feedback;

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = () => {
    setIsPlaying(true);
  };

  return (
    <li {...props}>
      <div className="gradient h-full w-full text-white_light">
        {hasWindow && (
          <ReactPlayer
            url={review}
            height="100%"
            width="100%"
            controls
            playing={isPlaying}
            onReady={onReady}
            light={
              <Image
                src={`${image}` || '/images/feedbacks/default-video-image.png'}
                alt="Thumbnail"
                className="h-full w-full object-cover"
                width={392}
                height={400}
              />
            }
            playIcon={
              <>
                <PlayVideoIcon
                  className="absolute z-10 duration-300 hover:opacity-0"
                  width={50}
                  height={50}
                />
                <HoverPlayVideoIcon
                  className="absolute z-[1] text-current"
                  width={50}
                  height={50}
                />
              </>
            }
          />
        )}

        <AuthorCard
          className={`absolute bottom-2 right-2 w-[95%] text-white_light sm:w-[424px] md:w-[320px] xl:bottom-3 xl:right-4 xl:w-[360px] ${
            isPlaying ? 'hidden' : 'absolute'
          }`}
          author={author}
          defaultValue={defaultValue}
          stylingIcon="text-white_light hover:text-dark focus:text-dark"
          textColor="text-white_light"
        />
      </div>
    </li>
  );
};
