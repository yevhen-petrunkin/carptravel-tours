import { careerData } from "@/constants";

import { Container, SectionHeading, Paragraph, Form } from "@/components";
import { spawnSync } from "child_process";

const Career = () => {
  const { heading, paragraphs, list, form } = careerData;

  return (
    <section className="bg-career bg-auto bg-[center_top] md:bg-cover md:bg-center md:bg-no-repeat">
      <Container>
        <div className="md:grid md:grid-cols-[auto_231.5px_231.5px]  xl:grid-cols-[auto_302px_302px] md:grid-rows-[auto_auto_auto]">
          <div className="md:col-start-1 md:row-start-1 md:col-span-2">
            <SectionHeading
              content={heading.content}
              highlight={heading.highlight}
            />
          </div>

          <div className="mt-[24px] md:mt-[8px] ml-auto w-[179px] md:w-full xl:w-[292px]">
            <Paragraph
              size={["14px", "13px", "18px"]}
              line={[1.43, 1.54, 1.33]}
              content={paragraphs.p01.content}
              align={["left", "justify", "justify"]}
            />
          </div>

          <section className="mt-[36px] md:mt-[12px] xl:mt-[24px] md:pr-[20px] md:col-start-1 md:row-start-2 md:row-span-2">
            <h3 className="ml-[100px] md:ml-auto xl:ml-[123px] text-[30px] xl:text-[36px] leading-[1.21] xl:leading-[1.08] font-extralight uppercase md:text-right xl:text-left ">
              Why us?
            </h3>

            <ul className="mt-[36px] md:mt-[56px] xl:mt-[45px] w-[181px] md:w-full flex flex-col gap-[16px] md:gap-[24px] career-list">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-[8px] xl:flex-row xl:items-baseline xl:justify-end xl:gap-[24px]"
                >
                  <h4 className="text-[14px] md:text-[16px] xl:text-[18px] leading-[1.43] md:leading-[1.25] md:-tracking-[0.01em] xl:leading-[1.33] font-normal text-right">
                    {item.title}
                  </h4>

                  <div className="xl:w-[309px] xl:pr-[24px]">
                    <Paragraph
                      size={["12px"]}
                      line={[1.67, 1.67, 1.9]}
                      content={item.paragraph}
                      align={["right", "right", "left"]}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-[112px] md:mt-[103px] xl:mt-[25px] ml-auto: xl:ml-0 w-[179px] md:w-full xl:w-[234px]">
            <Paragraph
              size={["14px", "13px", "18px"]}
              line={[1.43, 1.54, 1.33]}
              content={paragraphs.p02.content}
            />
            <Paragraph
              size={["14px", "13px", "18px"]}
              line={[1.43, 1.54, 1.33]}
              content={paragraphs.p03.content}
            />
          </div>

          <div className="mt-[24px] md:mt-[32px] xl:mt-[14px] md:col-start-2 md:row-start-3 md:col-span-2 md:w-[463px] xl:w-[604px]">
            <Form form={form} messageHeight={["196px", "234px", "268px"]} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Career;
// h-[196px] md:h-[234px]
