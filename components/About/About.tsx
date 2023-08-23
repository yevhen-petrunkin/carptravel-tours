import { aboutData } from "@/constants";

import { Container, SectionHeading, Paragraph } from "@/components";

const About = () => {
  const { heading, paragraphs } = aboutData;

  return (
    <section id="about" className="bg-about cover-norepeat ">
      <Container>
        <div className="md:grid md:grid-cols-[auto_243px_220px] xl:grid-cols-[auto_306px_297px] md:grid-rows-[auto_auto_auto]">
          <div className="md:col-start-1 md:row-start-1 md:col-span-2 ">
            <SectionHeading
              content={heading.content}
              highlight={heading.highlight}
            />
          </div>

          <div className="mt-[8px] md:mt-0 md:pt-[8px] xl:pt-[12px] xl:pr-[14px] flex flex-col gap-[10px] md:gap-[16px] w-[180px] md:col-start-3 md:row-start-1 md:row-span-2 xl:col-start-2 xl:row-start-1 xl:row-span-2 md:w-full">
            <Paragraph
              size={["14px", "16px", "18px"]}
              line={[1.42, 1.25, 1.33]}
              highlight={paragraphs.p01.highlight}
              content={paragraphs.p01.content}
            />
            <Paragraph
              size={["14px", "16px", "18px"]}
              line={[1.42, 1.25, 1.33]}
              highlight={paragraphs.p02.highlight}
              content={paragraphs.p02.content}
            />
          </div>

          <p className="mt-[40px] md:mt-auto ml-auto md:ml-0 paragraph-content flex flex-col w-[180px] md:w-[221px] xl:w-full -tracking-[0.01em] md:tracking-[0.02em] xl:tracking-[0.12em] spec md:col-start-1 md:row-start-2 xl:col-start-3 xl:row-start-3">
            <span className="text-left">From vacationers</span>
            <span className="text-right">to active travelers</span>
            we have a tour for everyone.
          </p>

          <div className="mt-[40px] md:mt-[64px] xl:mt-[72px] xl:pr-[25px] md:col-start-2 md:row-start-3 md:col-span-2 xl:col-start-1 xl:row-start-3 xl:col-span-1">
            <Paragraph
              size={["14px", "16px", "18px"]}
              line={[1.42, 1.25, 1.33]}
              highlight={paragraphs.p03.highlight}
              content={paragraphs.p03.content}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
