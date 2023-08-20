import { contactsData } from "@/constants";

import { Container, SectionHeading, Form, Contact } from "@/components";

const Contacts = () => {
  const { heading, phone, email, media, form } = contactsData;

  return (
    <footer>
      <section className="bg-contacts cover-norepeat max-w-[1440px]">
        <Container>
          <SectionHeading
            content={heading.content}
            highlight={heading.highlight}
          />

          <div className="mt-[36px] xl:mt-[71px] xl:flex justify-end xl:gap-[231px]">
            <article className="flex flex-col md:flex-row xl:flex-col gap-[24px] md:gap-[90px] xl:gap-[124px]">
              <div className="flex flex-col gap-[24px] xl:gap-[64px]">
                <Contact contact={phone} />
                <Contact contact={email} />
              </div>
              <div>
                <Contact contact={media} changeable />
              </div>
            </article>

            <div className="mt-[12px] md:mt-[64px] xl:mt-[3px] xl:w-[607px]">
              <Form
                form={form}
                messageHeight={["193px", "221px", "174px"]}
                uneven
              />
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Contacts;
