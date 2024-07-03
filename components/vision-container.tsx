import PropTypes from "prop-types";

const VisionContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[930px] flex flex-col items-end justify-start gap-[36px] max-w-full text-left text-11xl text-white font-inter mq450:gap-[18px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq450:gap-[16px] mq1100:flex-wrap">
        <div className="flex-[0.8951] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-10 pb-[124px] pr-5 pl-[27px] gap-[29px] min-w-[291px] max-w-full z-[1] border-[0px] border-solid border-gray1-300 mq450:pt-[26px] mq450:pb-[81px] mq450:box-border mq1100:flex-1">
          <img
            className="w-[448px] h-[433px] relative rounded-3xs hidden max-w-full"
            alt=""
            src="/rectangle-84.svg"
          />
          <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[89px] z-[1] mq450:text-lg mq750:text-5xl">
            Vision
          </h2>
          <div className="self-stretch h-[204px] relative text-lg text-gray1-200 inline-block shrink-0 z-[1]">
            <p className="m-0">
              Our vision is to enhance learning outcomes and engagement by
              creating dynamic
            </p>
            <p className="m-0">
              learning environments that leverage cutting-edge technology. We
              aim to revolutionize
            </p>
            <p className="m-0">
              the educational experience by improving the efficiency of
              information retrieval, enabling
            </p>
            <p className="m-0">
              educators to enrich their teaching with diverse multimedia content
              and interactive
            </p>
            <p className="m-0">resources.</p>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 flex flex-row items-start justify-start min-w-[291px] max-w-full text-lg text-gray1-200 mq1100:flex-1">
          <img
            className="self-stretch w-[448px] relative rounded-3xs max-h-full hidden min-h-[433px] max-w-full"
            alt=""
            src="/rectangle-85.svg"
          />
          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-10 px-[25px] pb-2.5 gap-[7px] max-w-full z-[2] border-[0px] border-solid border-gray1-300 mq450:pt-[26px] mq450:pb-5 mq450:box-border">
            <div className="self-stretch h-[322px] relative hidden shrink-0">
              <p className="m-0">{`
● Real-Time Speech Recognition: The system accurately transcribes spoken`}</p>
              <p className="m-0">
                content in real-time, converting lectures into text format
                instantly.
              </p>
              <p className="m-0">
                ● Concept Extraction: Advanced algorithms extract key concepts
                and keywords
              </p>
              <p className="m-0">
                from the transcribed text to identify primary topics covered in
                the lecture.
              </p>
              <p className="m-0">
                ● Online Image Retrieval: Integration with APIs or web scraping
                techniques to
              </p>
              <p className="m-0">
                fetch relevant images from online sources based on extracted
                concepts and
              </p>
              <p className="m-0">keywords.</p>
            </div>
            <img
              className="w-[448px] h-[433px] relative rounded-3xs hidden max-w-full"
              alt=""
              src="/rectangle-84.svg"
            />
            <h2 className="m-0 relative text-11xl font-normal font-inherit text-white inline-block min-w-[128px] z-[1] mq450:text-lg mq750:text-5xl">
              Features
            </h2>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
              <div className="self-stretch relative z-[1]">
                <p className="m-0">{`
● Real-Time Speech Recognition: The system accurately transcribes spoken`}</p>
                <p className="m-0">
                  content in real-time, converting lectures into text format
                  instantly.
                </p>
                <p className="m-0">
                  ● Concept Extraction: Advanced algorithms extract key concepts
                  and keywords
                </p>
                <p className="m-0">
                  from the transcribed text to identify primary topics covered
                  in the lecture.
                </p>
                <p className="m-0">
                  ● Online Image Retrieval: Integration with APIs or web
                  scraping techniques to
                </p>
                <p className="m-0">
                  fetch relevant images from online sources based on extracted
                  concepts and
                </p>
                <p className="m-0">keywords.</p>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <button className="cursor-pointer py-1 px-[3px] bg-gray1-300 w-[84px] rounded-9980xl box-border flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-white">
                  <div className="h-9 w-[84px] relative rounded-9980xl bg-gray1-300 box-border hidden z-[1] border-[1px] border-solid border-white" />
                  <div className="w-[64.9px] relative text-sm leading-[25px] font-inter text-gray1-100 text-center flex items-center justify-center shrink-0 z-[1]">
                    More
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-4.1px]">
                    <img
                      className="w-3 h-3 relative overflow-hidden shrink-0 mix-blend-normal z-[1]"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[426px] w-[426px] absolute !m-[0] top-[102px] right-[-313px] [filter:blur(78.89px)] rounded-[19720.25px] bg-moccasin-200 overflow-hidden shrink-0 mix-blend-normal" />
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-[84px] px-14 pb-[71px] gap-[49px] max-w-full z-[1] border-[0px] border-solid border-gray1-300 mq450:gap-[24px] mq450:pt-9 mq450:pb-[30px] mq450:box-border mq1100:pt-[55px] mq1100:px-7 mq1100:pb-[46px] mq1100:box-border">
          <img
            className="w-[930px] h-[905px] relative rounded-3xs hidden max-w-full"
            alt=""
            src="/rectangle-86.svg"
          />
          <h2 className="m-0 w-[214px] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-lg mq750:text-5xl">
            How it work
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[30px] pl-8 box-border max-w-full">
            <img
              className="h-[665px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/real-time-content-flowchart-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[216px] w-[216px] absolute !m-[0] right-[-108px] bottom-[-34px] [filter:blur(40px)] rounded-9980xl bg-blueviolet overflow-hidden shrink-0 mix-blend-normal" />
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray1-600 box-border flex flex-col items-start justify-start pt-[25.9px] pb-[18px] pr-5 pl-[49px] gap-[15.1px] max-w-full z-[1] border-[0px] border-solid border-gray1-300 mq1100:pl-6 mq1100:box-border">
          <img
            className="w-[930px] h-[280px] relative rounded-3xs hidden max-w-full"
            alt=""
            src="/rectangle-87.svg"
          />
          <div className="w-[270.6px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
            <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit z-[1] mq450:text-lg mq750:text-5xl">
              Benefits
            </h2>
          </div>
          <div className="w-[818px] h-[185px] relative text-lg text-gray1-200 inline-block shrink-0 max-w-full z-[1]">
            <p className="m-0">
              ● Time Efficiency: Our project saves educators time by automating
              content
            </p>
            <p className="m-0">creation tasks.</p>
            <p className="m-0">
              ● Enhanced Engagement: Students are more engaged with dynamic
              visual aids
            </p>
            <p className="m-0">and real-time information.</p>
            <p className="m-0">
              ● Improved Learning Outcomes: Students grasp concepts better and
              retain
            </p>
            <p className="m-0">information more effectively.</p>
            <p className="m-0">
              ● Innovation in Education: Our project drives innovation by
              leveraging
            </p>
            <p className="m-0">
              cutting-edge technologies like AI and real-time processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

VisionContainer.propTypes = {
  className: PropTypes.string,
};

export default VisionContainer;
