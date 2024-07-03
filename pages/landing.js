import DivW216px from "../components/div-w216px";
import FrameComponent from "../components/frame-component";
import Group3 from "../components/group3";
import Group2 from "../components/group2";
import CompactLectures from "../components/compact-lectures";
import Footer from "../components/footer";

const Landing = () => {
  return (
    <div className="w-full relative bg-gray1-800 overflow-hidden flex flex-col items-end justify-start pt-[53px] px-0 pb-0 box-border gap-[364px] mix-blend-normal leading-[normal] tracking-[normal] text-center text-base text-white font-inter mq450:gap-[91px] mq750:gap-[182px]">
      <main className="w-full h-[1744px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[1528px] left-[849px] [filter:blur(40px)] rounded-9980xl bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal" />
        <div className="absolute top-[838px] left-[1189px] [filter:blur(40px)] rounded-9980xl bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal" />
        <img
          className="absolute top-[-73px] left-[-531px] w-[1971px] h-[725px] object-cover z-[2]"
          alt=""
          src="/grid@2x.png"
        />
        <div className="absolute top-[1145px] left-[-116px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 w-[505px] h-[505px] overflow-hidden mix-blend-normal" />
        <DivW216px />
        <img
          className="absolute top-[657px] left-[160px] rounded-2xl w-[253px] h-[792px] overflow-hidden object-contain mix-blend-normal z-[1]"
          loading="lazy"
          alt=""
          src="/section-border@2x.png"
        />
        <img
          className="absolute top-[53px] left-[1344px] w-10 h-10 z-[3]"
          loading="lazy"
          alt=""
          src="/group-338241.svg"
        />
      </main>
      <div className="w-[1257px] flex flex-row items-start justify-end py-0 px-[46px] box-border max-w-full mq1275:pl-[23px] mq1275:pr-[23px] mq1275:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[30px] max-w-full">
          <FrameComponent />
          <div className="w-[1152px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[919.2px] flex flex-col items-start justify-start gap-[177px] max-w-full mq450:gap-[44px] mq1100:gap-[88px]">
              <div className="w-[723px] relative leading-[25px] flex items-center max-w-full z-[4]">
                <span className="w-full">
                  <p className="m-0">
                    Create a real-time content creation system for lecturers
                    using
                  </p>
                  <p className="m-0">speech recognition to capture concepts.</p>
                </span>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-xs text-gray1-200">
                <div className="w-[789.2px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px_12.8px] min-h-[644px]">
                    <Group3 />
                    <Group2
                      prop="/frame-13@3x.png"
                      lucidecalendar="/lucidecalendar-1.svg"
                    />
                    <Group2
                      prop="/frame-12@3x.png"
                      lucidecalendar="/lucidecalendar.svg"
                    />
                    <div className="w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] border-[0px] border-solid border-gray1-300">
                      <img
                        className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/rectangle-8.svg"
                      />
                      <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-[76px] px-[102px] bg-[url('/frame-11@3x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
                        <img
                          className="h-[180px] w-[253.2px] relative rounded-3xs object-cover hidden"
                          alt=""
                          src="/frame-11@3x.png"
                        />
                        <img
                          className="h-7 w-[26px] relative rounded-16xl overflow-hidden shrink-0 z-[4]"
                          loading="lazy"
                          alt=""
                          src="/mdiplay-6.svg"
                        />
                      </div>
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
                    <div className="w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] border-[0px] border-solid border-gray1-300">
                      <img
                        className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/rectangle-8.svg"
                      />
                      <div className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 hidden" />
                      <div className="self-stretch rounded-3xs flex flex-row items-start justify-center py-[76px] pr-5 pl-[21px] bg-[url('/frame-18@3x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
                        <img
                          className="h-[180px] w-[253.2px] relative rounded-3xs object-cover hidden"
                          alt=""
                          src="/frame-18@3x.png"
                        />
                        <img
                          className="h-7 w-[26px] relative rounded-16xl overflow-hidden shrink-0 z-[4]"
                          loading="lazy"
                          alt=""
                          src="/mdiplay-6.svg"
                        />
                      </div>
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
            </div>
          </div>
        </div>
      </div>
      <Footer socialMedia="/social-media1.svg" />
    </div>
  );
};

export default Landing;
