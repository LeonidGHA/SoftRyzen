import { FC } from 'react';

import { ServiceProps } from './Service.props';

export const Service: FC<ServiceProps> = ({ title }) => {
  return (
    <li className="service relative h-[146px] py-[4px] md:w-[351px] xl:w-[278px]">
      <div className="service-inner flex h-full items-center justify-center border-x border-primary p-[41px]">
        <h3 className="text-center text-lg font-light md:text-[20px]">
          {title}
        </h3>
      </div>
    </li>
  );
};
