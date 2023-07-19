import { FC } from 'react';

import { NavList } from '../NavList';

import { NavigationProps } from './Navigation.props';

export const Navigation: FC<NavigationProps> = ({ list, isOpen = false }) => {
  return (
    <nav
      id="navbarCollapse"
      className={`xl:visible  xl:w-auto xl:max-w-[541px] xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
        isOpen ? 'visibility  opacity-100' : 'invisible top-[120%] opacity-0'
      }`}
    >
      <NavList list={list} />
    </nav>
  );
};
