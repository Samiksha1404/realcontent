import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const DivW216px = ({ className = "", onLetsCreateTextClick }) => {
  const router = useRouter();

  const onLetsCreateTextClick1 = useCallback(() => {
    router.push("/v-ideo");
  }, [router]);

  return (
    <div
      className={`absolute top-[278px] left-[594.5px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 w-[426px] h-[426px] overflow-hidden mix-blend-normal z-[1] ${className}`}
    >
      <button className="cursor-pointer p-0 bg-gray1-300 absolute top-[230px] left-[53.5px] rounded-9980xl box-border w-36 h-9 z-[2] border-[1px] border-solid border-white">
        <div className="absolute top-[0px] left-[0px] rounded-9980xl bg-gray1-300 box-border w-full h-full hidden border-[1px] border-solid border-white" />
        <div
          className="absolute top-[6px] left-[5.4px] text-sm leading-[25px] font-inter text-gray1-100 text-center flex items-center justify-center w-[111.2px] h-6 cursor-pointer z-[1]"
          onClick={onLetsCreateTextClick}
        >
          Let’s Create
        </div>
        <img
          className="absolute top-[12px] left-[124.2px] w-[6.5px] h-3 overflow-hidden mix-blend-normal z-[1]"
          alt=""
          src="/icon1.svg"
        />
      </button>
    </div>
  );
};

DivW216px.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onLetsCreateTextClick: PropTypes.func,
};

export default DivW216px;
