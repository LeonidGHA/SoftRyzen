import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';

import { StageItemProps } from './StageItem.props';

import Arrow from '@/public/images/button-arrow.svg';

export const StagesItem: FC<StageItemProps> = ({ stage }) => {
  return (
    <Tab as="li" key={stage.number} className="cursor-pointer outline-none">
      {({ selected }) => {
        return (
          <div
            className={`${
              selected
                ? 'border-l-2 border-t-2 border-l-transparent border-t-transparent bg-primary pb-10'
                : 'group border-l-2 border-t-2 border-l-primary border-t-disabled bg-transparent pb-5 hover:border-t-primary focus:border-t-primary'
            } relative w-full p-5 pl-8 duration-300 md:pl-10 xl:pt-6 mdOnly:pb-5`}
          >
            <h3
              className={`${
                selected ? 'mb-7 text-white' : 'mb-0 text-dark'
              } text-lg font-light group-hover:text-primary group-focus:text-primary md:text-xl smOnly:max-w-[238px]`}
            >
              {stage.title}
            </h3>
            {selected && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="font-light text-[#F8F8F8] md:max-w-[355px] xl:max-w-[579px]"
              >
                {stage.text}
              </motion.p>
            )}
            <p className="absolute bottom-0 right-[9px] text-[40px] font-black text-white_light opacity-20 md:bottom-[-15px] md:right-6 md:text-[73px]">
              {stage.number}
            </p>
            <Arrow
              className={`${
                !selected ? 'rotate-[180deg] text-primary' : 'text-white'
              } absolute right-0 top-0 h-8 w-8 duration-300 md:right-5 md:top-4`}
            />
          </div>
        );
      }}
    </Tab>
  );
};
