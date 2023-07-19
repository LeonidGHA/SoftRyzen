import { FC } from 'react';
import cn from 'classnames';

import { BriefAnimationProps } from './BriefAnimation.props';

import styles from './BriefAnimation.module.css';

export const BriefAnimation: FC<BriefAnimationProps> = ({
  outerWrapperClassNames,
  innerWrapperClassNames,
  nonBrief,
}) => {
  return (
    <div
      className={cn(
        'relative h-[232px] overflow-hidden md:h-[286px] xl:absolute xl:top-[-28px] xl:h-[759px] xl:w-[658px]',
        nonBrief ? 'xl:right-0' : 'xl:right-[calc(50%-717px);]',
        outerWrapperClassNames,
      )}
    >
      <div
        className={cn(
          'absolute right-0 top-0 ml-auto flex h-[415px] w-full overflow-hidden md:h-[816px] md:w-[704px] xl:h-[759px] xl:w-[658px]',
          innerWrapperClassNames,
        )}
      >
        <div className="relative w-1/4 border-l border-[#E0E0E0] md:w-[171px] xl:w-[160px] smOnly:border-l-0">
          <div
            className={cn(
              styles.firstCube,
              'absolute left-[11px] top-[154px] h-[17px] w-[17px] bg-primary md:left-[22px] md:top-[303px] md:h-[34px] md:w-[34px] xl:left-[20px] xl:top-[282px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.secondCube,
              'absolute bottom-[37px] left-[38px] h-[8px] w-[8px] bg-primary md:bottom-[74px] md:left-[65px] md:h-[15px] md:w-[15px] xl:bottom-[68px] xl:left-[60px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirdCube,
              'absolute right-[26px] top-[150px] h-[8px] w-[8px] bg-primary md:right-[52px] md:top-[296px] md:h-[15px] md:w-[15px] xl:right-[48px] xl:top-[275px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fourthCube,
              'absolute bottom-[112px] right-[11px] h-[17px] w-[17px] bg-primary md:bottom-[222px] md:right-[22px] md:h-[34px] md:w-[34px] xl:bottom-[205px] xl:right-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>
        <div className="relative w-1/4 border-l border-[#E0E0E0] md:w-[171px] xl:w-[160px]">
          <div
            className={cn(
              styles.fifthCube,
              'absolute bottom-[37px] left-[11px] h-[17px] w-[17px] bg-primary md:bottom-[74px] md:left-[22px] md:h-[34px] md:w-[34px] xl:bottom-[68px] xl:left-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.sixthCube,
              'absolute left-[40px] top-[93px] h-[8px] w-[8px] bg-primary md:left-[84px] md:top-[186px] md:h-[15px] md:w-[15px] xl:left-[73px] xl:top-[171px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.seventhCube,
              'absolute bottom-[15px] left-[40px] h-[8px] w-[8px] bg-primary md:bottom-[29px] md:left-[29px] md:h-[15px] md:w-[15px] xl:bottom-[27px] xl:left-[73px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.eighthCube,
              'absolute right-[20px] top-[257px] h-[8px] w-[8px] bg-primary md:right-[39px] md:top-[509px] md:h-[15px] md:w-[15px] xl:right-[36px] xl:top-[470px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
        </div>
        <div className="relative w-1/4 border-l border-[#E0E0E0] md:w-[171px] xl:w-[160px]">
          <div
            className={cn(
              styles.ninthCube,
              'absolute bottom-[37px] left-[11px] h-[17px] w-[17px] bg-primary md:bottom-[74px] md:left-[22px] md:h-[34px] md:w-[34px] xl:bottom-[68px] xl:left-[20px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.tenthCube,
              'absolute left-[25px] top-[38px] h-[8px] w-[8px] bg-primary md:left-[49px] md:top-[76px] md:h-[15px] md:w-[15px] xl:left-[45px] xl:top-[70px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.eleventhCube,
              'absolute left-[47px] top-[115px] h-[8px] w-[8px] bg-primary md:left-[94px] md:top-[228px] md:h-[15px] md:w-[15px] xl:left-[87px] xl:top-[211px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.twelfthCube,
              'absolute bottom-[147px] left-[47px] h-[8px] w-[8px] bg-primary md:bottom-[290px] md:left-[94px] md:h-[15px] md:w-[15px] xl:bottom-[270px] xl:left-[87px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.thirteenthCube,
              'absolute right-[11px] top-[197px] h-[17px] w-[17px] bg-primary md:right-[22px] md:top-[394px] md:h-[34px] md:w-[34px] xl:right-[20px] xl:top-[361px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
        </div>
        <div className="relative w-1/4 border-l border-[#E0E0E0] md:w-[171px] xl:w-[160px]">
          <div
            className={cn(
              styles.fourteenthCube,
              'absolute left-[11px] top-[33px] h-[17px] w-[17px] bg-primary md:left-[22px] md:top-[66px] md:h-[34px] md:w-[34px] xl:left-[20px] xl:top-[61px] xl:h-[32px] xl:w-[32px]',
            )}
          ></div>
          <div
            className={cn(
              styles.fifteenthCube,
              'absolute left-[39px] top-[128px] h-[8px] w-[8px] bg-primary md:left-[78px] md:top-[252px] md:h-[15px] md:w-[15px] xl:left-[72px] xl:top-[234px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.sixteenthCube,
              'absolute left-[39px] top-[209px] h-[8px] w-[8px] bg-primary md:left-[78px] md:top-[445px] md:h-[15px] md:w-[15px] xl:left-[72px] xl:top-[386px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
          <div
            className={cn(
              styles.seventeenthCube,
              'absolute bottom-[75px] left-[64px] h-[8px] w-[8px] bg-primary md:bottom-[157px] md:left-[155px] md:h-[15px] md:w-[15px] xl:bottom-[137px] xl:left-[132px] xl:h-[14px] xl:w-[14px]',
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};
