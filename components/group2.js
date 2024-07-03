import PropTypes from "prop-types";

const Group2 = ({ className = "", prop, lucidecalendar }) => {
  return (
    <div
      className={`w-[253px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-col items-start justify-start pt-0 px-0 pb-[16.1px] box-border gap-[17px] z-[2] text-left text-xs text-gray1-200 font-inter ${className}`}
    >
      <img
        className="self-stretch h-[312px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
        alt=""
        src="/rectangle-8.svg"
      />
      <video
        className="self-stretch rounded-3xs flex flex-row items-start justify-center bg-cover bg-no-repeat bg-[top] z-[3]"
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
                src={lucidecalendar}
              />
            </div>
            <div className="relative tracking-[0.03em] inline-block min-w-[85.5px] z-[1]">
              Mar 10, 2024
            </div>
          </div>
          <div className="w-[73px] flex flex-row items-start justify-start pt-0 px-0.5 pb-[6.2px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[3.8px]">
              <div className="flex flex-col items-start justify-start pt-[1.7px] px-0 pb-0">
                <img
                  className="w-[9.6px] h-[11.1px] relative shrink-0 z-[1]"
                  alt=""
                  src="/indicators.svg"
                />
              </div>
              <div className="flex-1 relative tracking-[0.03em] shrink-0 z-[1]">
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
  );
};

Group2.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  lucidecalendar: PropTypes.string,
};

export default Group2;
