import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Group3 from "./group3";
import Group2 from "./group2";
import CompactLectures from "./compact-lectures";
import PropTypes from "prop-types";

const InnerContent = ({ className = "" }) => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  return (
    <div
      className={`w-[1048.2px] flex flex-col items-end justify-start gap-[111px] max-w-full text-center text-41xl text-white font-inter mq750:gap-[28px] mq1100:gap-[55px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[86px] pl-5 box-border sticky top-[0] z-[99] max-w-full mq450:pr-5 mq450:box-border mq750:pr-[43px] mq750:box-border">
        <header className="w-[641.7px] rounded-2xl bg-gray1-600 box-border flex flex-row items-start justify-between py-1.5 pr-[17px] pl-3.5 gap-[20px] max-w-full z-[1] text-left text-sm text-white font-inter border-[1px] border-solid border-gray1-300 mq450:hidden">
          <div className="h-12 w-[641.7px] relative rounded-2xl bg-gray1-600 box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
          <div className="flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0">
            <img
              className="w-[30px] h-[30px] relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <a
              className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[42px] z-[1]"
              id="Home"
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
                className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[76px] whitespace-nowrap z-[1]"
                id="contatus"
              >{`Contact Us `}</a>
            </div>
            <Button
              className="h-8 flex-1 relative"
              disableElevation
              color="primary"
              variant="text"
              href="/sign-up"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            />
          </div>
        </header>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[66px] box-border max-w-full">
        <div className="w-[981px] flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
            <div className="self-stretch h-9 flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border">
              <Button
                className="self-stretch w-[265.4px] z-[1]"
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
            <h1 className="m-0 self-stretch relative text-inherit leading-[61px] font-medium font-inherit z-[2] mq450:text-17xl mq450:leading-[37px] mq750:text-29xl mq750:leading-[49px]">
              Revolutionary Approach To Content Creation
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base">
            <div className="w-[723px] relative leading-[25px] flex items-center shrink-0 max-w-full z-[2]">
              <span className="w-full">
                <p className="m-0">
                  Create a real-time content creation system for lecturers using
                </p>
                <p className="m-0">speech recognition to capture concepts.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[789.2px] flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xs text-gray1-200">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px_12.8px] min-h-[644px]">
          <Group3 />
          <Group2 lucidecalendar="/lucidecalendar-1.svg" />
          <Group2 lucidecalendar="/lucidecalendar.svg" />
          <div className="w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] border-[0px] border-solid border-gray1-300">
            <img
              className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
              alt=""
              src="/rectangle-8.svg"
            />
            <video
              className="self-stretch rounded-3xs flex flex-row items-start justify-start bg-cover bg-no-repeat bg-[top] z-[3]"
              controls
            >
              <source src />
            </video>
            <div className="flex flex-row items-start justify-start py-0 px-3.5">
              <div className="flex flex-col items-start justify-start gap-[3.5px]">
                <div className="relative text-sm tracking-[0.03em] text-gray1-100 inline-block min-w-[93px] z-[1]">
                  Lecture No.1
                </div>
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] gap-[4.3px]">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/lucidecalendar-3.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
                    Mar 10, 2024
                  </div>
                </div>
                <div className="w-[71px] flex flex-row items-start justify-start pt-0 px-0 pb-[6.2px] box-border gap-[5.8px]">
                  <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <img
                      className="w-[9.6px] h-[11.1px] relative shrink-0 z-[3]"
                      alt=""
                      src="/indicators.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.03em] shrink-0 z-[1]">
                    Online
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[92.5px] h-[28.9px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-md w-full h-full z-[1]"
                    alt=""
                    src="/rectangle-4-1.svg"
                  />
                  <div className="absolute top-[6px] left-[14px] text-xs font-inter text-gray1-500 text-left inline-block w-[65px] h-4 min-w-[65px] z-[2]">
                    View More
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] box-border gap-[17px]">
            <img
              className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
              alt=""
              src="/rectangle-8.svg"
            />
            <div className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 hidden" />
            <video
              className="self-stretch rounded-3xs flex flex-row items-start justify-center bg-cover bg-no-repeat bg-[top] z-[3]"
              controls
            >
              <source src />
            </video>
            <div className="w-[123.2px] flex flex-row items-start justify-start py-0 px-2 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1.5 text-sm text-gray1-100">
                  <div className="relative tracking-[0.03em] inline-block min-w-[93px] z-[1]">
                    Lecture No.1
                  </div>
                </div>
                <div className="h-[16.5px] flex flex-row items-start justify-start gap-[10.3px]">
                  <img
                    className="h-[9.8px] w-[11.4px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/lucidecalendar.svg"
                  />
                  <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
                    Mar 10, 2024
                  </div>
                </div>
                <div className="w-[77px] flex flex-row items-start justify-start pt-0 px-0 pb-[6.7px] box-border gap-[11.8px]">
                  <img
                    className="h-[11.1px] w-[9.6px] relative shrink-0 z-[1]"
                    alt=""
                    src="/indicators.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
                    <div className="self-stretch relative tracking-[0.03em] shrink-0 z-[1]">
                      Online
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-1.5">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[28.9px] flex-1 relative">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-md w-full h-full z-[1]"
                      alt=""
                      src="/rectangle-4-1.svg"
                    />
                    <div className="absolute top-[6px] left-[14px] text-xs font-inter text-gray1-500 text-left inline-block w-[65px] h-4 min-w-[65px] z-[2]">
                      View More
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Group3 />
        </div>
        <CompactLectures />
      </div>
    </div>
  );
};

InnerContent.propTypes = {
  className: PropTypes.string,
};

export default InnerContent;
