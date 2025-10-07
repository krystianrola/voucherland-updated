import type { FC } from "react";

interface BenefitItemProps {
  title: string;
  number: string;
  description: string;
}

const BenefitItem: FC<BenefitItemProps> = ({ title, number, description }) => {
  return (
    <div className="grid grid-cols-[w-8_1fr] grid-rows-auto justify-center items-center gap-2">
      <div className="w-8 h-8 p-4 flex justify-center items-center rounded-full bg-dark text-text text-sm font-bold tracking-[2px]">
        {number}
      </div>
      <h3 className="col-start-2 row-start-1 text-lg leading-7 text-dark font-bold">{title}</h3>
      <p className="col-start-2 row-start-2 text-base text-description leading-6">{description}</p>
    </div>
  );
};

export { BenefitItem };
