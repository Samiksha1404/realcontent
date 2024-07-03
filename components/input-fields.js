import { useCallback } from "react";
import InputField2 from "./input-field2";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const InputFields = ({ className = "" }) => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <section
      className={`w-[928px] flex flex-col items-center justify-start pt-[42px] px-5 pb-[62px] box-border relative gap-[38.6px] max-w-full text-left text-mid text-dark-foregrounds-fg-base font-readex-pro mq750:gap-[19px] mq750:pt-[27px] mq750:pb-10 mq750:box-border ${className}`}
    >
      <div className="w-[216px] h-[216px] absolute !m-[0] bottom-[-61px] left-[-122px] [filter:blur(40px)] rounded-9980xl bg-blueviolet overflow-hidden shrink-0 mix-blend-normal" />
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/about-us-text.svg"
      />
      <div className="w-[501.5px] flex flex-row items-start justify-start pt-0 px-0 pb-[3.3px] box-border max-w-full">
        <InputField2 email="Email" examplegmailcomPlaceholde="00000000" />
      </div>
      <InputField2
        email="Phone"
        examplegmailcomPlaceholde="00000000"
        propFlex="unset"
        propWidth="501.5px"
      />
      <div className="w-[501.5px] flex flex-col items-start justify-start max-w-full z-[2]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8.4px]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative inline-block min-w-[72px]">Message</div>
            </div>
            <textarea
              className="bg-gray1-800 [outline:none] self-stretch h-[129px] rounded-[16.72px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start pt-[52.5px] pb-[52px] pr-[427px] pl-[13px] font-inter font-medium text-lgi-5 text-slategray border-[1.4px] border-solid border-gray1-400"
              placeholder="empty"
            />
          </div>
          <div className="w-[445.8px] h-7 relative text-lgi-5 leading-[27.86px] font-inter text-gray-500 hidden max-w-full">
            This is a hint text to help user.
          </div>
        </div>
      </div>
      <div className="w-[502px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border max-w-full text-center text-sm text-gray1-100 font-inter">
        <div
          className="w-[113px] rounded-9980xl bg-gray1-300 box-border flex flex-row items-start justify-start p-1 cursor-pointer z-[2] border-[1px] border-solid border-white"
          onClick={onGroupContainerClick}
        >
          <div className="h-9 w-[113px] relative rounded-9980xl bg-gray1-300 box-border hidden z-[1] border-[1px] border-solid border-white" />
          <div className="w-[87.3px] relative leading-[25px] flex items-center justify-center shrink-0 z-[1]">
            Sent
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-2.6px]">
            <img
              className="w-3.5 h-3 relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
              loading="lazy"
              alt=""
              src="/icon-21.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
