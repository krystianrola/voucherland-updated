import type { FC } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { formatStatistic } from "../../utils";

interface StatisticItemProps {
  name: string;
  value: number;
}

const StatisticItem: FC<StatisticItemProps> = ({ name, value }) => {
  const { formatted_number, unit } = formatStatistic(value);
  const { ref, inView } = useInView({ threshold: 1 });
  const animatedNum = useSpring({
    from: { num: 0 },
    to: { num: inView ? formatted_number : 0 },
    config: { duration: 800 },
  });

  return (
    <div
      className="flex flex-col gap-5 justify-evenly items-center bg-transparent text-center"
      ref={ref}
    >
      <p className="text-sm font-bold text-description">{name}</p>
      <p className="flex flex-row gap-1 justify-center items-center text-6xl leading-4 font-extrabold text-dark">
        <animated.div>
          {animatedNum.num.to((x) => (x % 1 === 0 ? x.toFixed(0) : x.toFixed(1)))}
        </animated.div>
        {unit}
      </p>
    </div>
  );
};

export { StatisticItem };
