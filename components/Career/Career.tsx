"use client";

import { careerData } from "@/constants";

import { SubmitHandler, FieldValues } from "react-hook-form";

import {
  Container,
  SectionHeading,
  Paragraph,
  Form,
  CareerReasons,
} from "@/components";

const Career = () => {
  const { heading, paragraphs, list, form } = careerData;

  const onSubmit: SubmitHandler<FieldValues> = (formData: FieldValues) => {
    const displayedData = Object.entries(formData).reduce(
      (aggr, item) => aggr + `${item[0]}: ${item[1]}\n`,
      "Submitted Data:\n"
    );
    console.log(displayedData);
    alert(displayedData);
  };

  return (
    <section
      id="career"
      className="bg-career bg-auto bg-[center_top] md:bg-cover md:bg-center md:bg-no-repeat"
    >
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

          <CareerReasons list={list} />

          <div className="mt-[112px] md:mt-[103px] xl:mt-[25px] ml-auto xl:ml-0 w-[179px] md:w-full xl:w-[234px]">
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
            <Form
              form={form}
              messageHeight={["196px", "234px", "268px"]}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Career;
