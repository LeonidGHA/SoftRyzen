import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

import { QuestionItemProps } from './QuestionItem.props';

import { Title } from '@/components/typography/Title';

import Arrow from '@/public/images/button-arrow.svg';

export const QuestionItem: FC<QuestionItemProps> = ({ question }) => {
  return (
    <Tab
      as="li"
      key={question.title}
      className="tab-card relative outline-none"
    >
      {({ selected }) => {
        return (
          <div className="md:px-5 md:py-4">
            <Title
              tag="h3"
              className={`${
                selected && 'mb-3 md:mb-4'
              } cursor-pointer text-lg duration-300 hover:text-primary focus:text-primary md:text-xl smOnly:max-w-[244px]`}
            >
              {question.title}
            </Title>
            {selected && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="font-light smOnly:max-w-[288px]"
              >
                {question.text}
              </motion.p>
            )}
            <Arrow
              className={`${
                !selected && 'rotate-[180deg]'
              } absolute right-0 top-0 h-8 w-8 text-primary duration-300 md:right-5 md:top-4`}
            />
          </div>
        );
      }}
    </Tab>
  );
};
