import { FC } from 'react';

import { NavItem } from '../NavItem';

import { NavListProps } from './NavList.props';

export const NavList: FC<NavListProps> = ({ list }) => {
  return (
    <ul className="xl block xl:flex xl:gap-10 notXl:space-y-10 ">
      <NavItem list={list} />
    </ul>
  );
};
