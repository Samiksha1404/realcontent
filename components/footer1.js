import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch box-border flex flex-row items-start justify-start pt-[73px] px-[66px] pb-1 gap-[22.4px] max-w-full text-left text-sm-9 text-gray1-100 font-inter border-[1px] border-solid border-gray1-300 mq1275:flex-wrap mq1275:justify-center mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border ${className}`}
    >
      <div className="h-[228px] w-[1440px] relative box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
      <img
        className="h-[45px] w-[48.6px] relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
        loading="lazy"
        alt=""
        src="/icon-3.svg"
      />
      <div className="w-[305.6px] flex flex-col items-start justify-start pt-[3px] pb-0 pr-5 pl-0 box-border text-lg text-white">
        <div className="w-[61px] h-[39px] relative leading-[20px] font-semibold flex items-center shrink-0 z-[1]">
          LOGO
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-3 pb-0 pr-[19px] pl-0">
        <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[40px] z-[1]">
          Home
        </a>
      </div>
      <div className="w-[589.6px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
        <div className="w-[429px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[34px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative leading-[17px] font-medium inline-block min-w-[106px] z-[1]">
                  Course Content
                </div>
              </div>
              <div className="relative leading-[17px] font-medium inline-block min-w-[62px] z-[1]">
                About Us
              </div>
              <div className="relative leading-[17px] font-medium inline-block min-w-[75px] z-[1]">
                Contact Us
              </div>
            </div>
          </div>
          <img
            className="w-[347px] relative max-h-full max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/social-media1.svg"
          />
          <div className="w-[346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs-7">
            <div className="w-[180px] relative leading-[20px] flex items-center shrink-0 z-[1]">
              Real-Time-content © 2024
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
        <div className="rounded-81xl flex flex-row items-start justify-start py-1 px-0 mix-blend-normal z-[1]">
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
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
