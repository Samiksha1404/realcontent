import { useCallback } from "react";
import { useRouter } from "next/router";
import NavigationContainer from "./navigation-container";
import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  const router = useRouter();

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <section
      className={`w-[1204px] flex flex-col items-start justify-start pt-0 pb-3 pr-0 pl-5 box-border gap-[8px] max-w-full text-left text-sm text-white font-inter ${className}`}
    >
      <NavigationContainer
        aboutUs="About Us"
        group33824="/group-3382421.svg"
        onContactUsTextClick={onContactUsTextClick}
      />
      <div className="w-[948px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-lg text-gray1-200">
        <div className="h-[216px] w-[216px] absolute !m-[0] top-[4px] left-[-108px] [filter:blur(40px)] rounded-9980xl bg-blueviolet overflow-hidden shrink-0 mix-blend-normal" />
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-row items-start justify-start pt-[50px] px-[50px] pb-[49px] max-w-full z-[1] border-[0px] border-solid border-gray1-300 mq1100:pl-[25px] mq1100:pr-[25px] mq1100:box-border">
          <img
            className="h-[253px] w-[928px] relative rounded-3xs hidden max-w-full"
            alt=""
            src="/rectangle-83.svg"
          />
          <div className="h-[154px] flex-1 relative inline-block max-w-full z-[1]">
            Welcome to [Company Name], where we're revolutionizing content
            creation for educators. Our real-time system utilizes speech
            recognition to capture concepts, integrates online image retrieval,
            and employs text summarization for efficient information
            condensation. By eliminating manual input barriers, we provide
            instant access to visual aids, enhancing traditional methods and
            empowering lecturers worldwide. With a passionate team dedicated to
            innovation, we're committed to reshaping the future of educational
            content creation.
          </div>
        </div>
      </div>
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
