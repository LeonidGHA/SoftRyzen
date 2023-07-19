import { FC, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';

import UkraineIcon from '@/public/images/header/ua-icon.svg';
import USAIcon from '@/public/images/header/en-icon.svg';
import Arrow from '@/public/images/header/arrow-icon.svg';

const locales = [
  { name: <USAIcon width={24} height={16} aria-hidden="true" />, id: 'en' },
  { name: <UkraineIcon width={24} height={16} aria-hidden="true" />, id: 'uk' },
];

export const LanguageToggle: FC = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string | undefined>('uk');

  const handleLocaleChange: (value: string) => void = ({ id }: any): void => {
    router.push(router.route, router.asPath, {
      locale: id,
    });

    setSelected(id);
  };

  return (
    <div className=" mr-6 md:mr-10">
      <Listbox value={selected} onChange={handleLocaleChange}>
        {() => (
          <div className="relative">
            <Listbox.Button className="relative flex items-center justify-center rounded-[5px] p-1 transition-all hover:bg-slate-50 hover:outline hover:outline-primary focus:bg-slate-50 focus:outline focus:outline-primary">
              <span className="tracking-thick truncate text-sm font-light uppercase leading-[21px] text-neutral-900">
                {selected == 'uk' ? (
                  <UkraineIcon width={24} height={16} aria-hidden="true" />
                ) : (
                  <USAIcon width={24} height={16} aria-hidden="true" />
                )}
              </span>

              <Arrow
                width={20}
                height={20}
                className="text-current"
                aria-hidden="true"
              />
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute -top-1 left-0 mt-1 max-h-60 w-full overflow-auto rounded-[5px] border border-primary bg-slate-50 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {locales.map((locale, index) => (
                  <Listbox.Option
                    id={locale.id}
                    key={locale.id}
                    className={({ active }) =>
                      `relative cursor-pointer p-1 uppercase transition-colors hover:bg-primary hover:text-white focus:bg-primary focus:text-white ${
                        active && 'bg-primary text-white'
                      }`
                    }
                    value={locale}
                  >
                    {({ selected }) => (
                      <span
                        className={`flex items-center truncate uppercase leading-[21px] ${
                          selected ? 'bg-primary text-white' : 'text-inherit'
                        }`}
                      >
                        {locale.name}

                        {index == locales.length - 1 && (
                          <Arrow
                            width={20}
                            height={20}
                            className="block shrink-0 rotate-180 text-current"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};
