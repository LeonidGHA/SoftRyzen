import { FC, Key } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavItemProps } from './NavItem.props';

export const NavItem: FC<NavItemProps> = ({ list }) => {
  const router = useRouter();

  return (
    <>
      {list.map((item, index: Key) => {
        return (
          <li
            key={index}
            className={`text-lg text-dark xl:py-0 notXl:text-xl notXl:font-semibold notXl:text-white ${
              router.pathname === item.url ? 'text-primary' : null
            }`}
          >
            <Link
              className="outline-primary duration-300 xl:hover:text-primary"
              href={item.url}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
