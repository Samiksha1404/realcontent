import FooterContainer from "./footer-container";
import PropTypes from "prop-types";

const Footer = ({ className = "", socialMedia, aboutUsTarget }) => {
  return (
    <footer
      className={`self-stretch box-border flex flex-row items-start justify-start pt-[73px] px-[66px] pb-1 gap-[183px] max-w-full text-left text-lg text-white font-inter border-[1px] border-solid border-gray1-300 mq450:gap-[23px] mq750:gap-[46px] mq1275:flex-wrap mq1275:gap-[91px] mq1275:justify-center mq1275:pl-[33px] mq1275:pr-[33px] mq1275:box-border ${className}`}
    >
      <div className="h-[228px] w-[1440px] relative box-border hidden max-w-full border-[1px] border-solid border-gray1-300" />
      <FooterContainer />
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

Footer.propTypes = {
  className: PropTypes.string,
  socialMedia: PropTypes.string,
  aboutUsTarget: PropTypes.string,
};

export default Footer;
