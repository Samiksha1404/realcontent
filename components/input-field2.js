import { useMemo } from "react";
import PropTypes from "prop-types";

const InputField2 = ({
  className = "",
  email,
  examplegmailcomPlaceholde,
  propFlex,
  propWidth,
}) => {
  const inputField1Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start shrink-0 max-w-full z-[2] text-left text-mid text-dark-foregrounds-fg-base font-readex-pro ${className}`}
      style={inputField1Style}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px]">
          <div className="flex flex-row items-center justify-start">
            <div className="relative inline-block min-w-[45px]">{email}</div>
          </div>
          <div className="self-stretch rounded-[16.72px] bg-gray1-800 overflow-hidden flex flex-row items-center justify-start py-3.5 px-[13px] border-[1.4px] border-solid border-gray1-400">
            <input
              className="w-[194px] [border:none] [outline:none] font-medium font-inter text-lgi-5 bg-[transparent] h-6 relative text-slategray text-left inline-block whitespace-nowrap p-0"
              placeholder={examplegmailcomPlaceholde}
              type="text"
            />
          </div>
        </div>
        <div className="w-[445.8px] h-7 relative text-lgi-5 leading-[27.86px] font-inter text-gray-500 hidden max-w-full">
          This is a hint text to help user.
        </div>
      </div>
    </div>
  );
};

InputField2.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  examplegmailcomPlaceholde: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
};

export default InputField2;
