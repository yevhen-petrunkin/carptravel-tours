import {ICareerReasonsProps} from "@/interfaces/ICareerReasonsProps";

import { Paragraph } from "@/components";

const CareerReasons: React.FC<ICareerReasonsProps> = ({ list }) => {
  return (
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
            <h4 className="text-[14px] md:text-[16px] xl:text-[18px] leading-[1.43] md:leading-[1.25] xl:leading-[1.33] font-normal text-right">
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
  );
};

export default CareerReasons;
