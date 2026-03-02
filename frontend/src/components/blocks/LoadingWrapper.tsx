import type { FC, JSX } from "react";
import { SkeletonCard } from "./SkeletonCard";

interface LoadingWrapperProps {
  loading?: boolean;
  children: JSX.Element;
}

// EXPERIMENT

const LoadingWrapper: FC<LoadingWrapperProps> = ({ loading = true, children }) => {
  return (
    <div>
      {loading ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
            {Array.from({ length: 4 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default LoadingWrapper;
