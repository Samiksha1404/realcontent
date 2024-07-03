import { useCallback } from "react";
import { useRouter } from "next/router";
import NavigationContainer from "../components/navigation-container";
import InputFields from "../components/input-fields";
import FrameComponent3 from "../components/frame-component3";

const ContactUs = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  return (
    <div className="w-full relative bg-gray1-800 overflow-hidden flex flex-col items-end justify-start gap-[90px] mix-blend-normal tracking-[normal] leading-[normal] mq450:gap-[22px] mq750:gap-[45px]">
      <div className="w-[1236px] h-[1158px] relative hidden max-w-full" />
      <main className="w-[1204px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border max-w-full">
        <NavigationContainer
          aboutUs="Contact Us"
          group33824="/group-338243.svg"
          onAboutUsTextClick={onAboutUsTextClick}
        />
        <InputFields />
      </main>
      <FrameComponent3 />
    </div>
  );
};

export default ContactUs;
