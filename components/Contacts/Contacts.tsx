import { contactsData } from "@/constants";

import { Container, Form } from "@/components";

const Contacts = () => {
  return (
    <footer>
      <section className="bg-contacts cover-norepeat max-w-[1440px]">
        <Container>
          <Form
            form={contactsData.form}
            messageHeight={["193px", "221px", "174px"]}
            uneven
          />
        </Container>
      </section>
    </footer>
  );
};

export default Contacts;
