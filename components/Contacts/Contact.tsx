import { IContactProps } from "@/interfaces";

import { createUrl } from "@/services";

const Contact: React.FC<IContactProps> = ({ contact, changeable }) => {
  return (
    <section>
      <h3 className="visually-hidden">Contacts</h3>
      <div
        className={`flex gap-[20px] ${
          changeable
            ? "flex-row justify-end xl:flex-row-reverse xl:justify-start"
            : "flex-row-reverse"
        } items-baseline`}
      >
        <span
          className={`${
            !changeable && "min-w-[81px]"
          } xl:min-w-[81px] text-[12px] leading-[1.66] font-extralight`}
        >
          {contact.label}
        </span>
        <ul
          className={`${
            changeable ? "min-w-[81px]" : "md:min-w-[221px] text-right"
          }`}
        >
          {contact.list.map((item) => {
            const url = createUrl(contact.id, item.link);
            return (
              <li key={item.label}>
                <a
                  href={url}
                  className="text-[14px] md:text-[16px] xl:text-[18px] leading-[1.71] md:leading-[1.5] xl:leading-[1.33] cursor-pointer"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
