import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import DivW216px from "../components/div-w216px";
import InnerContent from "../components/inner-content";
import Footer from "../components/footer";

const LandingPage = () => {
  const router = useRouter();

  const onLetsCreateTextClick = useCallback(() => {
    router.push("/v-ideo");
  }, [router]);

  return (
    <div className="w-full relative bg-gray1-800 overflow-hidden flex flex-col items-end justify-start pt-[53px] px-0 pb-0 box-border gap-[364px] mix-blend-normal tracking-[normal] leading-[normal] mq450:gap-[91px] mq750:gap-[182px]">
      <main className="w-full h-[1744px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[1528px] left-[849px] [filter:blur(40px)] rounded-9980xl bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal" />
        <div className="absolute top-[838px] left-[1189px] [filter:blur(40px)] rounded-9980xl bg-blueviolet w-[216px] h-[216px] overflow-hidden mix-blend-normal" />
        <img
          className="absolute top-[-73px] left-[-531px] w-[1971px] h-[725px] object-cover"
          alt=""
          src="/grid@2x.png"
        />
        <div className="absolute top-[1145px] left-[-116px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 w-[505px] h-[505px] overflow-hidden mix-blend-normal" />
        <DivW216px onLetsCreateTextClick={onLetsCreateTextClick} />
        <div
          className="absolute top-[657px] left-[160px] rounded-2xl bg-gray1-600 box-border w-[253px] h-[792px] overflow-hidden mix-blend-normal z-[1] border-[1px] border-solid border-gray1-300"
          creatediv
        />
        <Button
          className="absolute top-[53px] left-[1344px] z-[1] flex items-center justify-center p-0"
          disableElevation
          color="primary"
          variant="text"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 40, height: 40 }}
        >
          <img
            className="z-[1] w-full h-full"
            alt=""
            loading="lazy"
            src="/group-33824.svg"
          />
        </Button>
      </main>
      <div className="w-[1373px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <InnerContent />
      </div>
      <Footer socialMedia="/social-media.svg" aboutUsTarget="_blank" />
    </div>
  );
};

export default LandingPage;
