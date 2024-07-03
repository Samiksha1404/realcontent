import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Footer1 from "../components/footer1";

const VIdeo1 = () => {
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

  return (
    <div className="w-full relative bg-gray1-800 overflow-hidden flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border gap-[75px] mix-blend-normal tracking-[normal] leading-[normal] text-left text-sm text-white font-inter mq750:gap-[37px] mq450:gap-[19px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border sticky top-[0] z-[99] max-w-full">
        <div className="w-[641.7px] rounded-2xl bg-gray1-600 box-border flex flex-row items-start justify-between py-1.5 pr-[17px] pl-3.5 gap-[20px] max-w-full z-[1] border-[1px] border-solid border-gray1-300 mq450:hidden">
          <div className="h-12 w-[641.7px] relative rounded-2xl bg-gray1-600 box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
          <div className="flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0">
            <img
              className="w-[30px] h-[30px] relative overflow-hidden shrink-0 mix-blend-normal cursor-pointer z-[2]"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
              onClick={onIconClick}
            />
          </div>
          <div className="w-[42px] flex flex-col items-start justify-start pt-1 pb-0 pr-px pl-0 box-border">
            <a
              className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[40px] cursor-pointer z-[2]"
              onClick={onIconClick}
            >
              Home
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[23px] inline-block min-w-[109px] whitespace-nowrap z-[2]">
              Course Content
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <a
              className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[66px] whitespace-nowrap cursor-pointer z-[2]"
              onClick={onAboutUsTextClick}
            >{`About Us `}</a>
          </div>
          <div className="w-[164px] flex flex-row items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <a
                className="[text-decoration:none] relative leading-[23px] text-[inherit] inline-block min-w-[76px] whitespace-nowrap cursor-pointer z-[2]"
                onClick={onContactUsTextClick}
              >{`Contact Us `}</a>
            </div>
            <div className="h-8 flex-1 relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-md w-full h-full z-[2]"
                loading="lazy"
                alt=""
                src="/rectangle-4.svg"
              />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] left-[11px] text-xs font-inter text-gray1-500 text-left inline-block w-[46px] h-[18px] min-w-[46px] whitespace-nowrap z-[3]">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
        <section className="w-[1295px] flex flex-row items-start justify-center py-0 pr-5 pl-0 box-border max-w-full [row-gap:20px] text-left text-lg text-white font-inter mq1100:flex-wrap">
          <div className="h-[929px] w-[443px] relative min-w-[443px] max-w-full mq1100:flex-1 mq750:min-w-full">
            <div className="absolute top-[424px] left-[-62px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 w-[505px] h-[505px] overflow-hidden mix-blend-normal" />
            <img
              className="absolute top-[0px] left-[98px] rounded-2xl w-[254px] h-[771px] overflow-hidden object-contain mix-blend-normal z-[1]"
              loading="lazy"
              alt=""
              src="/leftsection1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[541px] max-w-full mq750:min-w-full mq450:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-[562px] w-[409px] absolute !m-[0] right-[-165px] bottom-[-216px]">
                <div className="absolute top-[346px] left-[0px] [filter:blur(40px)] rounded-9980xl bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal" />
                <div className="absolute top-[0px] left-[151px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 w-[426px] h-[426px] overflow-hidden mix-blend-normal z-[1]" />
              </div>
              <div className="h-[453px] w-[936px] !m-[0] absolute top-[-176px] right-[-165px] flex flex-row items-start justify-start">
                <div className="h-[474px] w-[944px] absolute !m-[0] top-[-21px] right-[-8px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                    alt=""
                    src="/grid@2x.png"
                  />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[74px] left-[840px] w-10 h-10 z-[1] flex items-center justify-center">
                    <img
                      className="cursor-pointer [border:none] bg-[transparent] w-full h-full z-[1]"
                      alt=""
                      loading="lazy"
                      src="/group-338242.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-end justify-start pt-0 px-0 pb-[35.6px] gap-[54.3px] max-w-full z-[2] border-[0px] border-solid border-gray1-300 mq1100:flex-1 mq450:gap-[27px]">
                <img
                  className="self-stretch h-[623px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/rectangle-82.svg"
                />
                <video
                  className="self-stretch h-[431px] rounded-3xs flex flex-row items-start justify-start bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"
                  controls
                >
                  <source src />
                </video>
                <div className="w-[541.4px] flex flex-row items-start justify-end py-0 px-[68px] box-border max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="w-[61px] flex flex-col items-start justify-start gap-[10px]">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="h-[66.6px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-darkslategray-100" />
                          <img
                            className="absolute top-[12.2px] left-[15px] w-[33px] h-[42.2px] z-[2]"
                            loading="lazy"
                            alt=""
                            src="/vector-2.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-[9px]">
                        <div className="h-[25.5px] relative leading-[20px] flex items-center min-w-[46px] z-[1]">
                          Start
                        </div>
                      </div>
                    </div>
                    <div className="w-[182px] flex flex-col items-start justify-start pt-[24.4px] px-0 pb-0 box-border">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
                        <Button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[35.5px] w-[68px] z-[1]">
                          <div className="h-[35.5px] w-[68px] relative rounded-md box-border hidden z-[1] border-[1px] border-solid border-white" />
                          <div className="w-[47px] relative text-sm font-inter text-white text-left inline-block shrink-0 z-[1]">{`Save `}</div>
                          <div className="flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                            <img
                              className="w-3.5 h-[12.2px] relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/bisave1.svg"
                            />
                          </div>
                        </Button>
                        <button className="cursor-pointer [border:none] pt-[7.8px] px-[5px] pb-[8.8px] bg-gray1-100 flex-1 rounded-md flex flex-row items-start justify-start z-[1]">
                          <div className="h-[35.5px] w-[84px] relative rounded-md bg-gray1-100 hidden" />
                          <div className="flex-1 relative text-sm font-inter text-black text-left z-[1]">
                            Upload
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                            <img
                              className="w-[17.9px] h-[16.3px] relative z-[1]"
                              loading="lazy"
                              alt=""
                              src="/vector-31.svg"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-gray1-600 box-border flex flex-row items-start justify-start pt-[72px] px-8 pb-[43.9px] max-w-full z-[2] text-mid text-dark-foregrounds-fg-base font-readex-pro border-[0px] border-solid border-gray1-300">
              <img
                className="h-[201px] w-[824px] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-11261.svg"
              />
              <div className="w-[501.5px] flex flex-col items-start justify-start max-w-full z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px] max-w-full">
                  <div className="self-stretch h-[85.1px] flex flex-col items-start justify-start gap-[8.4px]">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative inline-block min-w-[103px]">
                        Descriptions
                      </div>
                    </div>
                    <textarea className="bg-gray1-800 [outline:none] self-stretch flex-1 rounded-[16.72px] overflow-hidden flex flex-row items-center justify-center pt-[15.8px] pb-4 pr-[127px] pl-[13px] font-inter font-medium text-lgi-5 text-slategray border-[1.4px] border-solid border-gray1-400 mq450:pr-5 mq450:box-border" />
                  </div>
                  <div className="w-[445.8px] h-7 relative text-lgi-5 leading-[27.86px] font-inter text-gray-500 hidden max-w-full">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer1 />
      </main>
    </div>
  );
};

export default VIdeo1;
