import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch box-border flex flex-row items-start justify-start pt-[81px] px-14 pb-0 gap-[22.4px] max-w-full z-[1] text-left text-sm-9 text-gray1-100 font-inter border-[1px] border-solid border-gray1-300 mq1225:flex-wrap mq1225:pl-7 mq1225:pr-7 mq1225:box-border ${className}`}
    >
      <img
        className="h-[45px] w-[48.6px] relative overflow-hidden shrink-0 mix-blend-normal"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
      <div className="w-[305.6px] flex flex-col items-start justify-start pt-[3px] pb-0 pr-5 pl-0 box-border text-lg text-white">
        <div className="w-[61px] h-[39px] relative leading-[20px] font-semibold flex items-center shrink-0">
          LOGO
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 pb-0 pr-[19px] pl-0">
        <div className="relative leading-[17px] font-medium inline-block min-w-[40px]">
          Home
        </div>
      </div>
      <div className="w-[589.6px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
        <div className="w-[429px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[34px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative leading-[17px] font-medium inline-block min-w-[106px]">
                  Course Content
                </div>
              </div>
              <div className="relative leading-[17px] font-medium inline-block min-w-[62px]">
                About Us
              </div>
              <div className="relative leading-[17px] font-medium inline-block min-w-[75px]">
                Contact Us
              </div>
            </div>
          </div>
          <img
            className="w-[347px] relative max-h-full max-w-full"
            loading="lazy"
            alt=""
            src="/social-media2.svg"
          />
          <div className="w-[346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs-7">
            <div className="w-[180px] relative leading-[20px] flex items-center shrink-0">
              Real-Time-content © 2024
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-0 mix-blend-normal">
          <img
            className="h-8 w-8 relative rounded-31xl mix-blend-normal min-h-[32px]"
            loading="lazy"
            alt=""
            src="/button-switch-button--aftgf.svg"
          />
          <img
            className="h-8 w-8 relative rounded-31xl mix-blend-normal min-h-[32px]"
            loading="lazy"
            alt=""
            src="/button-switch-button--aftgf-1.svg"
          />
          <img
            className="h-8 w-8 relative rounded-31xl mix-blend-normal min-h-[32px]"
            loading="lazy"
            alt=""
            src="/button-switch-button--aftgf-2.svg"
          />
        </div>
      </div>
      <div className="h-[230px] w-[1442px] relative box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
    </footer>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
