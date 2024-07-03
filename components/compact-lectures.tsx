import PropTypes from "prop-types";

const CompactLectures = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch grid flex-row items-end justify-start gap-[14.8px] grid-cols-[repeat(3,_minmax(190px,_1fr))] text-left text-xs text-gray1-200 font-inter mq450:grid-cols-[minmax(190px,_1fr)] mq750:grid-cols-[repeat(2,_minmax(190px,_329px))] mq750:justify-center ${className}`}
    >
      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] border-[0px] border-solid border-gray1-300">
        <img
          className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/rectangle-8.svg"
        />
        <div className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 hidden z-[3]" />
        <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-[76px] px-[101px] bg-[url('/lecture-items@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="h-[180px] w-[253px] relative rounded-3xs object-cover hidden"
            alt=""
            src="/lecture-items@3x.png"
          />
          <img
            className="h-7 w-[26px] relative rounded-16xl overflow-hidden shrink-0 z-[3]"
            loading="lazy"
            alt=""
            src="/mdiplay-6.svg"
          />
        </div>
        <div className="w-[127.2px] flex flex-row items-start justify-start py-0 px-3 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.5px]">
            <div className="flex flex-row items-start justify-start py-0 pr-2 pl-0.5 text-sm text-gray1-100">
              <div className="relative tracking-[0.03em] inline-block min-w-[93px] z-[1]">
                Lecture No.1
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[2.3px] gap-[6.3px]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/lucidecalendar.svg"
                />
              </div>
              <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
                Mar 10, 2024
              </div>
            </div>
            <div className="w-[73px] flex flex-row items-start justify-start pt-0 px-0 pb-[6.2px] box-border gap-[7.8px]">
              <img
                className="h-[11.1px] w-[9.6px] relative shrink-0 z-[3]"
                alt=""
                src="/indicators.svg"
              />
              <div className="flex-1 relative tracking-[0.03em] shrink-0 z-[1]">
                Online
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-0.5">
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
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] z-[1] border-[0px] border-solid border-gray1-300">
          <img
            className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
            alt=""
            src="/rectangle-8.svg"
          />
          <div className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 hidden z-[3]" />
          <div className="self-stretch rounded-3xs flex flex-row items-start justify-center pt-[85px] pb-[67px] pr-5 pl-[21px] bg-[url('/lecture-items@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="h-[180px] w-[253px] relative rounded-3xs object-cover hidden"
              alt=""
              src="/lecture-items@3x.png"
            />
            <img
              className="h-7 w-[26px] relative rounded-16xl overflow-hidden shrink-0 z-[3]"
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
                    className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 z-[3]"
                    alt=""
                    src="/lucidecalendar.svg"
                  />
                </div>
                <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
                  Mar 10, 2024
                </div>
              </div>
              <div className="w-[71px] flex flex-row items-start justify-start pt-0 px-0 pb-[6.2px] box-border gap-[5.8px]">
                <img
                  className="h-[11.1px] w-[9.6px] relative shrink-0 z-[3]"
                  alt=""
                  src="/indicators.svg"
                />
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
      </div>
      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] gap-[17px] z-[1] border-[0px] border-solid border-gray1-300">
        <img
          className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/rectangle-8.svg"
        />
        <div className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 hidden z-[3]" />
        <div className="self-stretch rounded-3xs flex flex-row items-start justify-center pt-[84px] pb-[68px] pr-5 pl-[25px] bg-[url('/lecture-items@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="h-[180px] w-[253px] relative rounded-3xs object-cover hidden"
            alt=""
            src="/lecture-items@3x.png"
          />
          <img
            className="h-7 w-[26px] relative rounded-16xl overflow-hidden shrink-0 z-[3]"
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
            <div className="flex flex-row items-start justify-start pt-0 pb-[2.3px] pr-0 pl-px">
              <div className="flex flex-row items-start justify-start gap-[3.3px]">
                <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <img
                    className="w-[11.4px] h-[9.8px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/lucidecalendar.svg"
                  />
                </div>
                <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] shrink-0 z-[1]">
                  Mar 10, 2024
                </div>
              </div>
            </div>
            <div className="w-[72px] flex flex-row items-start justify-start pt-0 px-px pb-[6.2px] box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[4.8px]">
                <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                  <img
                    className="w-[9.6px] h-[11.1px] relative z-[1]"
                    alt=""
                    src="/indicators.svg"
                  />
                </div>
                <div className="flex-1 relative tracking-[0.03em] z-[1]">
                  Online
                </div>
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
    </div>
  );
};

CompactLectures.propTypes = {
  className: PropTypes.string,
};

export default CompactLectures;
