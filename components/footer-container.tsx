import PropTypes from "prop-types";

const FooterContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[910px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-white font-inter mq750:flex-wrap mq750:justify-center ${className}`}
    >
      <div className="w-[132px] flex flex-row items-start justify-start gap-[22.4px]">
        <img
          className="h-[45px] w-[48.6px] relative overflow-hidden shrink-0 mix-blend-normal min-h-[45px] z-[1]"
          loading="lazy"
          alt=""
          src="/icon-3.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <h3 className="m-0 self-stretch h-[39px] relative text-inherit leading-[20px] font-semibold font-inherit flex items-center shrink-0 z-[1]">
            LOGO
          </h3>
        </div>
      </div>
      <div className="w-[511px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full text-sm-9 text-gray1-100">
        <div className="self-stretch flex flex-row items-start justify-start gap-[42px] max-w-full mq750:flex-wrap mq750:gap-[21px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[40px] z-[1]">
              Home
            </a>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[279px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[34px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[106px] z-[1]">
                    Course Content
                  </a>
                </div>
                <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[62px] z-[1]">
                  About Us
                </a>
                <a className="[text-decoration:none] relative leading-[17px] font-medium text-[inherit] inline-block min-w-[75px] z-[1]">
                  Contact Us
                </a>
              </div>
            </div>
            <a className="[text-decoration:none] w-[347px] relative max-w-full z-[1] flex items-center justify-center p-0">
              <img
                className="[text-decoration:none] w-full z-[1] h-full"
                alt=""
                loading="lazy"
                src="/social-media.svg"
              />
            </a>
            <div className="w-[346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs-7">
              <div className="w-[180px] relative leading-[20px] flex items-center shrink-0 z-[1]">
                Real-Time-content © 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
