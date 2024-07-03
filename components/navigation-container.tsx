import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const NavigationContainer = ({
  className = "",
  aboutUs,
  group33824,
  onAboutUsTextClick,
  onContactUsTextClick,
}) => {
  const router = useRouter();

  const onIconClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onContactUsTextClick1 = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-sm text-white font-inter ${className}`}
    >
      <div className="h-[621px] w-[1041px] relative max-w-full">
        <div className="absolute top-[53px] left-[0px] rounded-2xl bg-gray1-600 box-border w-[641.7px] flex flex-row items-start justify-between py-1.5 pr-[17px] pl-3.5 gap-[20px] max-w-full border-[1px] border-solid border-gray1-300 mq450:hidden">
          <header className="h-12 w-[641.7px] relative rounded-2xl bg-gray1-600 box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
          <div className="flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0">
            <img
              className="w-[30px] h-[30px] relative overflow-hidden shrink-0 mix-blend-normal cursor-pointer z-[1]"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
              onClick={onIconClick}
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[42px] z-[1]">
              Home
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[20px] inline-block min-w-[109px] whitespace-nowrap z-[1]">
              Course Content
            </div>
          </div>
          <div className="w-[66px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <a
              className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] [text-shadow:5px_0px_9px_#fff] z-[1]"
              onClick={onAboutUsTextClick}
            >{`About Us `}</a>
          </div>
          <div className="w-[164px] flex flex-row items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a
                className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[76px] whitespace-nowrap cursor-pointer z-[1]"
                onClick={onContactUsTextClick}
              >{`Contact Us `}</a>
            </div>
            <div className="h-8 flex-1 relative text-xs text-gray1-500">
              <img
                className="absolute top-[0px] left-[0px] rounded-md w-full h-full z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-4.svg"
              />
              <a className="[text-decoration:none] absolute top-[7px] left-[11px] text-[inherit] inline-block w-[46px] h-[18px] min-w-[46px] whitespace-nowrap z-[2]">
                Log Out
              </a>
            </div>
          </div>
        </div>
        <div className="absolute h-full top-[0px] bottom-[0px] left-[111px] w-[930px] text-center text-41xl">
          <div className="absolute top-[147px] left-[0px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 w-[426px] h-[426px] overflow-hidden mix-blend-normal">
            <button className="cursor-pointer p-0 bg-gray1-300 absolute top-[260px] left-[141px] rounded-9980xl box-border w-36 h-9 z-[1] border-[1px] border-solid border-white">
              <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-gray1-300 box-border w-full h-full hidden border-[1px] border-solid border-white" />
              <div className="absolute top-[6px] left-[5.4px] text-sm leading-[25px] font-inter text-gray1-100 text-center flex items-center justify-center w-[111.2px] h-6 z-[1]">
                Let’s Know
              </div>
              <img
                className="absolute top-[12px] left-[124.2px] w-[6.5px] h-3 overflow-hidden mix-blend-normal z-[1]"
                alt=""
                src="/icon1.svg"
              />
            </button>
            <h1 className="m-0 absolute top-[112px] left-[-281px] text-inherit leading-[61px] font-medium font-inherit flex items-center justify-center w-[981px] h-[158px] z-[2] mq450:text-17xl mq450:leading-[37px] mq750:text-29xl mq750:leading-[49px]">
              {aboutUs}
            </h1>
          </div>
          <img
            className="absolute top-[53px] left-[834px] w-10 h-10"
            loading="lazy"
            alt=""
            src={group33824}
          />
          <img
            className="absolute top-[-88px] left-[28px] w-[902px] h-[709px] object-cover z-[4]"
            alt=""
            src="/grid@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

NavigationContainer.propTypes = {
  className: PropTypes.string,
  aboutUs: PropTypes.string,
  group33824: PropTypes.string,

  /** Action props */
  onAboutUsTextClick: PropTypes.func,
  onContactUsTextClick: PropTypes.func,
};

export default NavigationContainer;
