import Navigation1 from "../components/navigation1";
import VisionContainer from "../components/vision-container";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-gray1-800 overflow-hidden flex flex-col items-end justify-start gap-[34px] mix-blend-normal leading-[normal] tracking-[normal] mq750:gap-[17px]">
      <div className="w-[505px] h-[505px] absolute !m-[0] top-[1161px] left-[-88px] [filter:blur(93.52px)] rounded-[23377.29px] bg-moccasin-100 overflow-hidden shrink-0 mix-blend-normal" />
      <Navigation1 />
      <div className="w-[1236px] h-[1158px] relative hidden max-w-full z-[2]" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
        <VisionContainer />
      </section>
      <Footer socialMedia="/social-media1.svg" />
    </div>
  );
};

export default AboutUs;
