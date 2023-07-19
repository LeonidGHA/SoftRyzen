import { FC, Key } from 'react';
import { useTranslation } from 'next-i18next';

import s from './ServicesAnimation.module.css';

const styleAnimation = {
  first: 'text-xl font-semibold leading-7 flex gap-x-6 justify-center',
  second: 'text-base font-normal leading-7 flex gap-x-6 justify-center',
  third: 'text-2xl leading-7 font-normal flex gap-x-6 justify-center',
  fourth: 'text-[28px] font-bold leading-none flex gap-x-6 justify-center',
  fifth: 'text-base font-semibold leading-7 flex gap-x-6 justify-center',
};

export const ServicesAnimation: FC = () => {
  const { t } = useTranslation('servicesHeroAnimation');

  const first = t('first', {
    returnObjects: true,
    defaultValue: '',
  });
  const second = t('second', {
    returnObjects: true,
    defaultValue: '',
  });
  const third = t('third', {
    returnObjects: true,
    defaultValue: '',
  });
  const fourth = t('fourth', {
    returnObjects: true,
    defaultValue: '',
  });
  const fifth = t('fifth', {
    returnObjects: true,
    defaultValue: '',
  });
  const sixth = t('sixth', {
    returnObjects: true,
    defaultValue: '',
  });
  const seventh = t('seventh', {
    returnObjects: true,
    defaultValue: '',
  });
  const eighth = t('eighth', {
    returnObjects: true,
    defaultValue: '',
  });
  const ninth = t('ninth', {
    returnObjects: true,
    defaultValue: '',
  });
  const tenth = t('tenth', {
    returnObjects: true,
    defaultValue: '',
  });
  const eleventh = t('eleventh', {
    returnObjects: true,
    defaultValue: '',
  });
  const twelfth = t('twelfth', {
    returnObjects: true,
    defaultValue: '',
  });
  const thirteenth = t('thirteenth', {
    returnObjects: true,
    defaultValue: '',
  });

  return (
    <div
      className={`absolute top-[5px] h-full w-max space-y-6 bg-transparent leading-7 text-[#d6dfe666] notXl:hidden ${s.services_hero}`}
    >
      {/* first */}
      <ul className={styleAnimation.first}>
        {first.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_first}>{item}</p>
            </li>
          ) : (
            <li key={ind} className={s.text_second_word}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* second */}
      <ul className={styleAnimation.second}>
        {second.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text_white}>{item}</p>
              <p className={s.text_second}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* third */}
      <ul className={styleAnimation.third}>
        {third.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_third}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* fourth */}
      <ul className={styleAnimation.fourth}>
        {fourth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_fourth}>{item}</p>
            </li>
          ) : (
            <li key={ind} className={s.text_second_word}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* fifth */}
      <ul className={styleAnimation.first}>
        {fifth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_fifth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* sixth */}
      <ul className={styleAnimation.third}>
        {sixth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_sixth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* seventh */}
      <ul className={styleAnimation.fourth}>
        {seventh.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_seventh}>{item}</p>
            </li>
          ) : (
            <li key={ind} className={s.text_second_word}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* eighth */}
      <ul className={styleAnimation.fifth}>
        {eighth.map((item, ind: Key) => (
          <li key={ind}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      {/* ninth */}
      <ul className={styleAnimation.third}>
        {ninth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_ninth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* tenth */}
      <ul className={styleAnimation.fourth}>
        {tenth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text_white}>{item}</p>
              <p className={s.text_tenth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* eleventh */}
      <ul className={styleAnimation.second}>
        {eleventh.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_eleventh}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* twelfth */}
      <ul className={styleAnimation.third}>
        {twelfth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text_white}>{item}</p>
              <p className={s.text_twelfth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
      {/* thirteenth */}
      <ul className={styleAnimation.first}>
        {thirteenth.map((item, ind: Key) =>
          ind === 0 ? (
            <li key={ind} className="relative">
              <p className={s.text}>{item}</p>
              <p className={s.text_thirteenth}>{item}</p>
            </li>
          ) : (
            <li key={ind}>
              <p>{item}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};
