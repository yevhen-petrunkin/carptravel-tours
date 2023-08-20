import { careerData } from "@/constants";

import { Container, Form } from "@/components";

const Career = () => {
  return (
    <section className="bg-career cover-norepeat ">
      <Container>
        <Form
          form={careerData.form}
          messageHeight={["196px", "234px", "268px"]}
        />
      </Container>
    </section>
  );
};

export default Career;
// h-[196px] md:h-[234px]
