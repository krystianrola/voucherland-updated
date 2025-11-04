import { BaseHTMLAttributes, FC } from "react";
import { LuClock4 } from "react-icons/lu";

interface DateProps extends BaseHTMLAttributes<HTMLDivElement> {
  date: string;
}

const Date: FC<DateProps> = ({ date, className }) => {
  return (
    <div
      className={`w-fit flex justify-center items-center gap-3 px-2 py-1 rounded-lg bg-admin_red ${className}`}
    >
      <LuClock4 className="w-4 h-4 text-white" />
      <p className="text-sm leading-5 font-semibold text-light">{date}</p>
    </div>
  );
};

export { Date };
