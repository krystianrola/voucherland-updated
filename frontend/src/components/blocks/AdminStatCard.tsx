import type { FC } from "react";
import { isPositive } from "../../utils";

interface AdminStatCardProps {
  statLabel: string;
  statValue: number;
  trendChange?: number;
}

const AdminStatCard: FC<AdminStatCardProps> = ({ statLabel, statValue, trendChange }) => {
  return (
    <div className="min-w-fit flex flex-col gap-3 py-3 px-6 rounded-lg bg-block3 border border-solid border-block">
      <p className="text-base leading-6 text-description">{statLabel}</p>
      <div className="flex gap-10 justify-between items-center">
        <h3 className="text-3xl leading-9 text-dark">{statValue}</h3>
        {trendChange && (
          <div
            className={`px-2 py-1 rounded-md text-sm font-semibold text-text ${
              isPositive(trendChange) ? "bg-admin_green" : "bg-admin_red"
            }`}
          >
            {trendChange}%
          </div>
        )}
      </div>
    </div>
  );
};

export { AdminStatCard };
