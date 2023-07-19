import { FC, useRef, useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useTranslation } from 'next-i18next';

import { AuthorCard } from '../AuthorCard';
import { Paragraph } from '@/components/typography/Paragraph';

import { FeedbackTextCardProps } from './FeedbackTextCard.props';

export const FeedbackTextCard: FC<FeedbackTextCardProps> = ({
  feedback,
  lineClamp,
  defaultValue,
  onClick,
  ...props
}) => {
  const { review, author } = feedback;
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showBtn, setShowBtn] = useState(false);
  const { width } = useWindowSize();

  const { t } = useTranslation('feedbacks');

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const isOverflowing = textElement.scrollHeight > textElement.clientHeight;
      setShowBtn(isOverflowing);
    }
  }, [width]);

  return (
    <li {...props}>
      <Paragraph
        paragraphRef={textRef}
        className={`${lineClamp ? 'line-clamp-[10]' : ''} text-sm md:text-base`}
      >
        {review}
      </Paragraph>
      {showBtn && (
        <button className="mt-4 self-start" type="button" onClick={onClick}>
          <Paragraph className="!text-[14px] !leading-4 !text-primary underline">
            {t('buttonMore.text')}
          </Paragraph>
        </button>
      )}
      <AuthorCard author={author} defaultValue={defaultValue} />
    </li>
  );
};
