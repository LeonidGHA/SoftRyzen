import { FC, useEffect, KeyboardEvent } from 'react';
import { useTranslation } from 'next-i18next';
import { ModalProps } from './Modal.props';

import { AuthorCard } from '../AuthorCard/AuthorCard';
import { Paragraph } from '@/components/typography/Paragraph';

import Close from '@/public/images/header/icon-close.svg';
import Quotes from '@/public/images/modal/quotes.svg';

export const Modal: FC<ModalProps> = ({
  feedback,
  defaultValue,
  onClose,
  handleOverlayClick,
}) => {
  const { t } = useTranslation('feedbacks');
  const { review, author } = feedback;

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown as unknown as EventListener,
    );

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener(
        'keydown',
        handleKeyDown as unknown as EventListener,
      );
    };
  }, [onClose]);

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#484848CC] bg-opacity-80 p-4"
    >
      <div className="z-[10000] flex h-auto w-[804px] flex-col bg-primary p-6">
        <div className="flex items-center justify-between">
          <Quotes
            className="h-[60px] w-[60px] rotate-180 transform"
            aria-label={t('ariaLabel.quotes')}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t('ariaLabel.close')}
          >
            <Close className="h-6 w-6 text-white" />
          </button>
        </div>
        <Paragraph className="max-h-[70vh] flex-grow-[1] overflow-y-auto text-white">
          {review}
        </Paragraph>
        <div className="flex items-center justify-between">
          <AuthorCard
            textColor={'text-white'}
            className="pt-4"
            author={author}
            defaultValue={defaultValue}
          />
          <Quotes
            className="h-[60px] w-[60px]"
            aria-label={t('ariaLabel.quotes')}
          />
        </div>
      </div>
    </div>
  );
};
