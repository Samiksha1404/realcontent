import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const router = useRouter();

  const onIconClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onLogOutTextClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px] text-center text-41xl text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[638px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[111px] max-w-full mq750:gap-[28px] mq1100:gap-[55px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border top-[0] z-[99] sticky max-w-full">
            <header className="w-[641.7px] rounded-2xl bg-gray1-600 box-border flex flex-row items-start justify-between py-1.5 pr-[17px] pl-3.5 gap-[20px] max-w-full z-[3] text-left text-sm text-white font-inter border-[1px] border-solid border-gray1-300 mq450:hidden">
              <div className="h-12 w-[641.7px] relative rounded-2xl bg-gray1-600 box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
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
                <a
                  className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[42px] cursor-pointer z-[1]"
                  onClick={onIconClick}
                >
                  Home
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <div className="relative leading-[23px] inline-block min-w-[109px] whitespace-nowrap z-[1]">
                  Course Content
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <a
                  className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer z-[1]"
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
                  <a
                    className="[text-decoration:none] absolute top-[7px] left-[11px] text-[inherit] inline-block w-[46px] h-[18px] min-w-[46px] whitespace-nowrap cursor-pointer z-[2]"
                    onClick={onLogOutTextClick}
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </header>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
            <div className="self-stretch h-9 flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border">
              <Button
                className="self-stretch w-[265.4px] z-[3]"
                endIcon={<img width="12px" height="12px" src="/icon-2.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fafafa",
                  fontSize: "14",
                  background: "#18181b",
                  border: "#2b2b2b solid 1px",
                  borderRadius: "9999px",
                  "&:hover": { background: "#18181b" },
                  width: 265.4,
                }}
              >
                Presenting New Learing Tech
              </Button>
            </div>
            <h1 className="m-0 self-stretch relative text-inherit leading-[61px] font-medium font-inherit z-[4] mq450:text-17xl mq450:leading-[37px] mq750:text-29xl mq750:leading-[49px]">
              Revolutionary Approach To Content Creation
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[195px] flex flex-col items-end justify-start pt-[13px] pb-2 pr-[21px] pl-[15px] box-border relative gap-[160px] ml-[-11px] text-left text-xl mq1100:ml-0">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-darkslategray-200 box-border border-[1px] border-solid border-gray1-300" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <a className="[text-decoration:none] flex-1 relative text-[inherit] [text-shadow:1px_0_0_#2b2b2b,_0_1px_0_#2b2b2b,_-1px_0_0_#2b2b2b,_0_-1px_0_#2b2b2b] z-[1] mq450:text-base">
                xyz
              </a>
            </div>
            <div className="self-stretch relative text-smi [text-shadow:1px_0_0_#2b2b2b,_0_1px_0_#2b2b2b,_-1px_0_0_#2b2b2b,_0_-1px_0_#2b2b2b] z-[1]">
              Xyz.gmail.com
            </div>
          </div>
          <div className="w-[154px] flex flex-row items-start justify-start text-smi">
            <div className="flex-1 relative [text-shadow:1px_0_0_#2b2b2b,_0_1px_0_#2b2b2b,_-1px_0_0_#2b2b2b,_0_-1px_0_#2b2b2b] shrink-0 z-[1]">
              Account Setting
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 ml-[-6px]">
              <img
                className="w-3 h-2.5 relative shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[131px] flex flex-row items-start justify-end py-0 px-[34px] box-border text-smi">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="h-[22px] flex-1 relative inline-block [text-shadow:1px_0_0_#2b2b2b,_0_1px_0_#2b2b2b,_-1px_0_0_#2b2b2b,_0_-1px_0_#2b2b2b] z-[1]">
              Logout
            </div>
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-[13px] h-3 relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
