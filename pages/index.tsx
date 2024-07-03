import { useCallback } from "react";
import { useRouter } from "next/router";

const Start = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="w-full h-[1091px] relative bg-gray1-800 overflow-hidden flex flex-row items-start justify-center pt-[243px] px-5 pb-[422px] box-border leading-[normal] tracking-[normal] text-left text-[32px] text-white font-inter">
      <div className="w-[426px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 overflow-hidden shrink-0 flex flex-row items-start justify-center pt-[172px] px-5 pb-[173px] box-border mix-blend-normal max-w-full mq450:pt-28 mq450:pb-28 mq450:box-border">
        <div
          className="w-[216px] flex flex-row items-end justify-between gap-[20px] cursor-pointer z-[1]"
          onClick={onGroupContainerClick}
        >
          <img
            className="h-[81px] w-[79.5px] relative overflow-hidden shrink-0 mix-blend-normal"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
          <div className="w-[99.8px] flex flex-col items-start justify-end pt-0 px-0 pb-[5.4px] box-border">
            <div className="self-stretch h-[70.2px] relative leading-[20px] font-semibold flex items-center shrink-0 mq450:text-[19px] mq450:leading-[12px] mq750:text-[26px] mq750:leading-[16px]">
              LOGO
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[1440px] w-[1440px] relative overflow-hidden shrink-0 hidden [mix-blend-mode:linear-dodge] max-w-full"
        alt=""
        src="/star-field.svg"
      />
      <div className="rounded-[30px] bg-dimgray hidden flex-col items-center justify-center pt-[42px] px-3 pb-3 box-border max-w-full">
        <img
          className="w-[1230px] relative rounded-3xl max-h-full object-cover max-w-full"
          alt=""
          src="/signup-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Start;
